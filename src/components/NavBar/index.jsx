import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Styled from 'styled-components';

const NavContainer = Styled(motion.div)`
  width: 100vw;
  z-index: 5;
  position: absolute;
  top: ${(props) => (props.click ? '0' : `-${props.theme.navHeight}`)};

  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .3s ease-in-out;
`;

const MenuBtn = Styled(motion.li)`
  background-color:  ${(props) => `rgba(${props.theme.textRgba}, 0.7)`};
  list-style-type: none;
  color: ${(props) => props.theme.body};
  width:24rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
  font-weight: 600;
  font-size: ${(props) => props.theme.fontmd};
  text-transform: uppercase;

  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
`;

const MenuItems = Styled(motion.ul)`
  position: relative;
  height: ${(props) => props.theme.navHeight};
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  list-style: none;

  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  padding: 0 16rem;
  font-weight: 600;
`;

const MenuItem = Styled(motion.li)`
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  cursor: pointer;
`;

const NavBar = () => {
  const [click, setClick] = useState(false);
  return (
    <NavContainer
      click={click}
      initial={{
        y: '-100%',
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 2,
        delay: 2,
      }}
    >
      <MenuItems
        drag="y"
        dragConstraints={{ top: 0, bottom: 70 }}
        dragSnapToOrigin
        dragElastic={0.05}
      >
        <MenuBtn onClick={() => setClick(!click)}>Menu</MenuBtn>
        <MenuItem
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          Home
        </MenuItem>
        <MenuItem
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          About
        </MenuItem>
        <MenuItem
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          Shop
        </MenuItem>
        <MenuItem
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          New arrival
        </MenuItem>
      </MenuItems>
    </NavContainer>
  );
};

export default NavBar;
