import React, { useEffect, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { dark } from './styles/Themes';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

import 'locomotive-scroll/dist/locomotive-scroll.css';
import { AnimatePresence } from 'framer-motion';
import {
  About,
  Banner,
  Footer,
  Home,
  Loading,
  Shop,
  StrollTriggerProxy,
} from './components';
import NewArrial from './components/NewArrial';

function App() {
  const containerRef = useRef(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const idLoader = setTimeout(() => {
      setLoader(true);
    }, 3000);
    return () => {
      clearTimeout(idLoader);
    };
  }, []);

  return (
    <React.Fragment>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
          }}
          watch={[]}
          containerRef={containerRef}
        >
          <AnimatePresence>{!loader ? <Loading /> : null}</AnimatePresence>
          <StrollTriggerProxy />
          <AnimatePresence>
            <main className="App" data-scroll-container ref={containerRef}>
              <Home />
              <About />
              <Shop />
              <Banner />
              <NewArrial />
              <Footer />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
