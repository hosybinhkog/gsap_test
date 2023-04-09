import React, { useLayoutEffect, useRef } from 'react';
import Styled from 'styled-components';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import img1 from '../../assets/Images/11.webp';
import img2 from '../../assets/Images/12.webp';
import img3 from '../../assets/Images/13.webp';
import img4 from '../../assets/Images/14.webp';

const Section = Styled.section`
  min-height: 100vh;
  overflow: hidden;
  width: 100vw;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Overlay = Styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 90vh;
  z-index: 11;
  box-shadow: 0 0 0 10vw ${(props) => props.theme.text};
  border: .3rem solid ${(props) => props.theme.body};
`;

const Title = Styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: 'Kaushan Script';
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  position: absolute;
  top: 1.6rem;
  left: 5%;
  z-index: 11;
`;

const Text = Styled.div`
  width: 20%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: absolute;
  z-index:11;
  background-color: ${(props) => props.theme.text};
  height: 100%;
  padding: 3.2rem;
  line-height: 1.6;
  word-spacing: .5rem;
  right: 0;
  top: 0;
  color: ${(props) => props.theme.body};
  `;

const Container = Styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 25%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Item = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;
  img{
    width: 100%;
    height: auto;
    z-index: 5;
  }
`;

const Product = ({ img, title = '' }) => (
  <Item>
    <img src={img} alt="" />
    <h2>{title}</h2>
  </Item>
);

const NewArrial = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const scrollingRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = scrollingRef.current;

    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: 'bottom+=100% top-=100%',
          scroller: '.App',
          scrub: 1,
          pin: true,
          markets: true,
        },
        ease: 'none',
      });

      t1.fromTo(
        scrollingElement,
        {
          y: '0',
        },
        {
          y: '-100%',
          scrollTrigger: {
            trigger: scrollingElement,
            start: 'top top',
            end: 'bottom top',
            scroller: '.App',
            scrub: 1,
          },
        }
      );
      ScrollTrigger.refresh();
    }, 1000);

    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref}>
      <Overlay />
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        New Arrivals
      </Title>
      <Container ref={scrollingRef}>
        <Product title="Black window" img={img1} />
        <Product title="Black window" img={img2} />
        <Product title="Black window" img={img3} />
        <Product title="Black window" img={img4} />
      </Container>
      <Text data-scroll data-scroll-speed="-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        praesentium omnis fugit optio quod ut necessitatibus qui quia vel
        minima. Voluptas dolorum consequatur aspernatur quae ipsa optio incidunt
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
        molestias quia iure dolorum nesciunt facere repudiandae unde quibusdam
        fugiat quos.
      </Text>
    </Section>
  );
};

export default NewArrial;
