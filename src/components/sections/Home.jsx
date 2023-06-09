import React from 'react';
import styled from 'styled-components';
import { CoverVideo, Logo, Navbar } from '..';

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

const Home = () => {
  return (
    <Section id="home">
      <CoverVideo />
      <Logo />
      <Navbar />
    </Section>
  );
};

export default Home;
