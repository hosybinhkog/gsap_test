import React from 'react';
import Styled from 'styled-components';

import img1 from '../../assets/Images/1.webp';
import img2 from '../../assets/Images/2.webp';
import img3 from '../../assets/Images/3.webp';

const Section = Styled.section`
  position: relative;
  min-height: 100vh;
  width: 80vw;
  display: flex;
  margin: 0 auto;
`;

const Title = Styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: 'Kaushan Script';
  font-weight: 300;

  position: absolute;
  top: 1.6rem;
  left: 5%;
  z-index: 5;
`;

const Left = Styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;
  line-height: 1.6;
  
`;
const Right = Styled.div`
  width: 50%;
  position: relative;


  img{
    width: 100%;
    height:auto;
  }
  .small-image-1{
    width: 40%;
    position: absolute;
    right: 95%;
    bottom: 10%
  }

  .small-image-2{
    width: 40%;
    position: absolute;
    left: 80%;
    bottom: 30%
  }
`;

const About = () => {
  return (
    <Section id="fixed-target">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        About us
      </Title>
      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis,
        optio deserunt saepe iure unde, provident reiciendis perspiciatis libero
        <br />
        <br />
        tenetur consectetur quibusdam? Natus atque aliquam quas vel esse
        voluptatibus fugiat? Vel blanditiis doloremque aperiam voluptatum
        sapiente nulla ipsam provident asperiores, minima reiciendis facere
        officia unde quibusdam perferendis officiis optio porro dignissimos quo
        similique. Modi quibusdam, porro facilis quasi laboriosam natus impedit
        <br />
        <br />
        cumque voluptatum labore veritatis architecto alias, corrupti molestiae
        quos, ratione ea error inventore? Numquam, explicabo asperiores. Hic
        enim minus temporibus voluptatum doloremque. Reiciendis omnis a eius
        debitis perferendis in facilis dolorem quas. Voluptatum officiis iusto
        enim porro dolore quam quasi.
      </Left>
      <Right>
        <img src={img1} alt="" />
        <img
          data-scroll
          data-scroll-speed="5"
          src={img2}
          alt=""
          className="small-image-1"
        />
        <img
          data-scroll
          data-scroll-speed="-2"
          src={img3}
          alt=""
          className="small-image-2"
        />
      </Right>
    </Section>
  );
};

export default About;
