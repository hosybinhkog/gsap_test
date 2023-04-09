import React, { useLayoutEffect, useRef } from 'react';
import Styled from 'styled-components';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import img1 from '../../assets/Images/1.webp';
import img2 from '../../assets/Images/2.webp';
import img3 from '../../assets/Images/3.webp';
import img4 from '../../assets/Images/4.webp';
import img5 from '../../assets/Images/5.webp';
import img6 from '../../assets/Images/6.webp';
import img7 from '../../assets/Images/7.webp';
import img8 from '../../assets/Images/8.webp';
import img9 from '../../assets/Images/9.webp';
import img10 from '../../assets/Images/10.webp';
import { motion } from 'framer-motion';

const SectionShop = Styled.section`
  position: relative;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
  min-height: 100vh;
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Title = Styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: 'Kaushan Script';
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;
`;

const Left = Styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  min-height:100vh;
  color: ${(props) => props.theme.text};
  z-index: 5;
  position: fixed;
  left: 0;
  justify-content: center;
  align-items: center;
  display: flex;

  p{
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
    line-height:1.6;
    word-spacing: .4rem;
  }
`;
const Right = Styled.div`
  position: absolute;
  left: 35%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.grey};
  /* width: 65%; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 30%;
`;

const ItemImg = Styled(motion.div)`
  width: 32rem;
  margin-right: 9.6rem;
  display: flex;
  align-items: center;
  display: inline-block;
  justify-content: center;
  flex-direction: column;
  img {
    width:100%;
    height: auto;
    cursor: pointer;
  }

  h1{
    font-weight: 500;
    text-align:center;
    cursor: pointer;
    width: fit-content;
  }
`;

const Product = ({ img, title = ' ' }) => {
  return (
    <ItemImg
      initial={{ filter: 'grayscale(100%' }}
      whileInView={{ filter: 'grayscale(0%)' }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 'all' }}
    >
      <img src={img} alt={title} />
      <h1>{title}</h1>
    </ItemImg>
  );
};

const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;
    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: pinWrapWidth,
          scroller: '.App',
          scrub: true,
          pin: true,
          markers: true,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: 'none',
      });

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: 'top top',
          end: `${pinWrapWidth} bottom`,
          scroller: '.App',
          scrub: 1,
          markers: true,
        },
        x: -pinWrapWidth,
        ease: 'none',
      });
      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <SectionShop ref={ref}>
      <Title scroll-data scroll-data-speed="-1">
        New Collections
      </Title>
      <Left>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor enim,
          exercitationem voluptatibus adipisci vel temporibus in laboriosam,
          possimus impedit qui ipsa amet cupiditate? Officiis accusamus nulla,
          optio non animi sit saepe quibusdam eveniet itaque labore dignissimos
          <br />
          <br />
          quaerat laborum magni neque vero accusantium eaque nihil modi harum
          error exercitationem! Magnam, incidunt.quaerat laborum magni neque
          vero accusantium eaque nihil modi harum error exercitationem! Magnam,
          incidunt.
        </p>
      </Left>
      <Right data-scroll ref={horizontalRef}>
        <Product img={img3} title="Sweatshirts" />
        <Product img={img4} title="Ethnic Wear" />
        <Product img={img1} title="Man Basics" />
        <Product img={img2} title="Tops" />
        <Product img={img5} title="Blazers" />
        <Product img={img6} title="Suits" />
        <Product img={img7} title="Antiques" />
        <Product img={img8} title="Jewellery" />
        <Product img={img9} title="Watches" />
        <Product img={img10} title="Special Edition" />
      </Right>
    </SectionShop>
  );
};

export default Shop;
