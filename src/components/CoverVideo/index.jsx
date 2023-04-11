import { motion } from 'framer-motion';
import React from 'react';
import Styled from 'styled-components';
import MainVideo from '../../assets/WalkingGirl.mp4';

const VideoContainer = Styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  video{
    width: 100%;
    height: 100vh;
    object-fit: cover;

    @media screen and (max-width: 76.8rem){
      object-position: center 10%;
    }
    @media screen and (max-width: 48rem){
      object-position: center 50%;
    }
  }
`;

const DarkOverlay = Styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},.6)`};
`;

const Title = Styled(motion.div)`
  position: absolute;
  inset: 0;
  z-index: 5;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${(props) => props.theme.text};
  user-select: none;
  div{
    display: flex;
  }
  h1{
    font-family: 'Kaushan script';
    font-size: ${(props) => props.theme.fontBig};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    user-select: none;
  }
  h2{
    font-size: ${(props) => props.theme.fontlg};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    user-select: none;
    text-transform: capitalize;
    font-weight: 300;
  }
`;

const containerVariant = {
  hidden: {
    opaticy: 0,
  },
  show: {
    opaticy: 1,
    transition: {
      delayChidren: 2,
      staggerChildren: 0.3,
    },
  },
};

const itemVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const CoverVodeo = () => {
  return (
    <VideoContainer>
      <DarkOverlay />
      <Title variants={containerVariant} initial="hidden" animate="show">
        <div>
          <motion.h1
            variants={itemVariant}
            data-scroll
            data-scroll-speed="4"
            data-scroll-delay="0.13"
          >
            W
          </motion.h1>
          <motion.h1
            variants={itemVariant}
            data-scroll
            data-scroll-speed="4"
            data-scroll-delay="0.09"
          >
            i
          </motion.h1>
          <motion.h1
            variants={itemVariant}
            data-scroll
            data-scroll-speed="4"
            data-scroll-delay="0.06"
          >
            b
          </motion.h1>
          <motion.h1
            variants={itemVariant}
            data-scroll
            data-scroll-speed="4"
            data-scroll-delay="0.04"
          >
            e
          </motion.h1>
        </div>
        <motion.h2
          variants={itemVariant}
          data-scroll
          data-scroll-speed="2"
          data-scroll-delay="0.04"
        >
          Inspire.Create.Belive
        </motion.h2>
      </Title>
      <video src={MainVideo} type="video/mp4" autoPlay loop muted />
    </VideoContainer>
  );
};

export default CoverVodeo;
