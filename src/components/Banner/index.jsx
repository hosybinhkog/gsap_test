import React from 'react';
import Styled from 'styled-components';

const SectionBanner = Styled.section`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

const Container = Styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const BannerComponent = Styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: 'Kaushan Script';
  line-height: 1;
  white-space: nowrap;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  span{
    display: block;
    background-color: ${(props) => props.theme.body};
    padding: 1.6rem 3.2rem;
  }
`;

const Banner = () => {
  return (
    <SectionBanner>
      <Container id="up">
        <BannerComponent>
          <span
            data-scroll
            data-scroll-speed="-8"
            data-scroll-direction="horizontal"
            data-scroll-target="#up"
          >
            Lorem ipsum dolor sit amet
          </span>
        </BannerComponent>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-speed="6"
            data-scroll-direction="horizontal"
            data-scroll-target="#up"
          >
            , adipisicing elit. Voluptas, perspiciatis?
          </span>
        </BannerComponent>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-speed="-6"
            data-scroll-direction="horizontal"
            data-scroll-target="#up"
          >
            Lorem ipsum dolor sit amet
          </span>
        </BannerComponent>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-speed="6"
            data-scroll-direction="horizontal"
            data-scroll-target="#up"
          >
            , adipisicing elit. Voluptas, perspiciatis?
          </span>
        </BannerComponent>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-speed="-4"
            data-scroll-direction="horizontal"
            data-scroll-target="#up"
          >
            Lorem ipsum dolor sit amet
          </span>
        </BannerComponent>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-speed="4"
            data-scroll-direction="horizontal"
            data-scroll-target="#up"
          >
            , adipisicing elit. Voluptas, perspiciatis?
          </span>
        </BannerComponent>
      </Container>
    </SectionBanner>
  );
};

export default Banner;
