import { motion } from 'framer-motion';
import React from 'react';
import Styled from 'styled-components';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import logoImage from '../../assets/Svgs/star_white_48dp.svg';

const Section = Styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 5rem auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  position: relative;
`;

const LogoContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img{
    width: 10vw;
    height: auto;
  }

  h3{
    font-size: ${(props) => props.theme.fontxl};
    font-family: 'Kaushan Script';
  }
`;

const FooterComponent = Styled(motion.footer)`
  width: 80vw;

  ul{
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items:center;
    flex-wrap: wrap;
    margin:  3.2rem;
    margin-top: 6.4rem;
    padding: 0 1.6rem;
    border-top: 1px solid ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};
  }

  li{
    padding: 2rem;
    font-size: ${(props) => props.theme.fontxl};
    text-transform: uppercase;
    cursor: pointer;
    transition: all .3s ease;
    &:hover{
      transform: scale(1.1);
    }
  }
`;

const Bottom = Styled.div`
  padding: .5rem 0;
  margin: .4rem;
  font-size: ${(props) => props.theme.fontlg};

  display: flex;
  justify-content: space-between;
  align-items: center;

  a{
    text-decoration: underline;
  }
`;

const Footer = () => {
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    scroll.scrollTo(elem, {
      offset: '-100',
      duration: '2000',
      easing: [0.25, 0.0, 0.35, 1],
    });
  };
  return (
    <Section>
      <LogoContainer>
        <img data-scroll data-scroll-speed="2" src={logoImage} alt="" />
        <h3 data-scroll data-scroll-speed="-1">
          Wibe Studio
        </h3>
      </LogoContainer>
      <FooterComponent
        initial={{ y: '-400px' }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 1.5,
        }}
      >
        <ul>
          <li onClick={() => handleScroll('#home')}>home</li>
          <li onClick={() => handleScroll('.about')}>bout</li>
          <li onClick={() => handleScroll('#shop')}>shop</li>
          <li onClick={() => handleScroll('#new-arrival')}>new arrival</li>
          <li>
            <a href="https://google" target="_blank" rel="noopener noreferrer">
              Look book
            </a>
          </li>
          <li>
            <a href="https://google" target="_blank" rel="noopener noreferrer">
              Reviews
            </a>
          </li>
        </ul>
        <Bottom>
          <span
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            &copy; {new Date().getFullYear()}. All Rights Reserved.
          </span>
          <span
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
            Make with &hearts; by
          </span>
          <a href="https://google.com" target="_black" rel="noreferer">
            Google
          </a>
        </Bottom>
      </FooterComponent>
    </Section>
  );
};

export default Footer;
