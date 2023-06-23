import { Route, Routes, useLocation } from 'react-router-dom';
import { Home, Resume, Works } from '../../Pages';
import { AnimatePresence, motion, PanInfo, Variant, Variants } from 'framer-motion';
import { WebApplications } from '../../Pages/Works/Components';
import { BackendApps } from '../../Pages/Works/Components/BackendApps';
import { TestPage } from '../../Pages/TestPage/TestPage';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ContentWindow } from '../ContentWindow';
import { Box, Container, Typography } from '@mui/material';
import { wrap } from '@popmotion/popcorn';

const GRADIENT_COLOR_1 = 'black'
const GRADIENT_COLOR_2 = 'black'
const BORDER_COLOR = `linear-gradient(white, white) padding-box, linear-gradient(to right, ${GRADIENT_COLOR_1}, ${GRADIENT_COLOR_2}) border-box`

interface Page {
  title: string;
  path: string;
  component: React.ComponentType;
}

const PAGES: Page[] = [
  {title: 'Resume', path: '/resume', component: Resume },
  {title: 'Home', path: '/', component: Home },
  {title: 'Works', path: '/works', component: Works },
  {title: 'Test', path: '/testpage', component: TestPage },
];

const navVariants: Variants = {
  initial: { width: 0 },
  animate: { width: 20, boxShadow: '0 0 5px black', transition: { delay: .5, type: 'spring', bounce: .4} },
  exit: { width: 0 },
  hover: { width: 30, boxShadow: '0 0 7px 0px black',  transition: {  type: 'spring', bounce: .5}, },
}

const sliderVariants: Variants = {
  incoming: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    scale: 1.2,
    opacity: 0,
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
    scale: 1,
    opacity: 0,
  }),
};

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04],
};

export function AnimatedRoutes() {
  const [[itemCount, direction], setItemCount] = useState<[number, number]>([0, 1]);
  const activeItemIndex = wrap(0, PAGES.length, itemCount);

  const swipeToItem = (swipeDirection: number) => {
    setItemCount([itemCount + swipeDirection, swipeDirection]);
  };

  const dragEndHandler = (dragInfo: PanInfo) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 50;
    if (draggedDistance > swipeThreshold) {
      swipeToItem(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToItem(1);
    }
  };

  const skipToItem = (imageId: number) => {
    setItemCount([imageId, imageId > activeItemIndex ? 1 : -1]);
  };

  return (
    <AnimatePresence initial={true}>
      <Box
        component={motion.div}
        key={"page" + activeItemIndex}
        variants={sliderVariants}
        custom={direction}
        initial="incoming"
        animate="active"
        exit="exit"
        transition={sliderTransition}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          padding: '1rem',
          alignItems: 'center',
          height: '90%',
          margin: '1rem',
          position: 'absolute',
          width: '90%',
          px: 0,
          
        }}
      >
        <Box 
        component={motion.div}
        key={"leftNav" + activeItemIndex}
        variants={navVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ type: 'spring', bounce: 0.5}}
        whileHover="hover"
        onClick={() => swipeToItem(-1)}
        sx={{
          overflow: 'hidden',
          height: '100%', 
          width: '25px',
          background: `linear-gradient(to right, white, white) padding-box, ${GRADIENT_COLOR_1} border-box`, 
          border: '4px solid transparent',
          borderWidth: '2px 0 2px 1px',
          borderRadius: '25px 0 0 25px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          
        }}>
          <Typography  variant='h6' sx={{transform: 'rotate(-90deg)', fontWeight: 'bold'}}>
            {PAGES[wrap(0, PAGES.length, itemCount-1)].title}
          </Typography>
        </Box>
        <Box sx={{
          width: '95%', 
          height: '100%', 
          border: '4px solid transparent',
          borderWidth: '2px 2.5px 2px 2.5px',
          background: BORDER_COLOR,
          boxShadow: '0px 0px 5px 0px black',
          overflow: 'scroll',

        }}>
        {React.createElement(PAGES[activeItemIndex].component)}
        </Box>
        <Box 
        component={motion.div}
        key={"rightNav" + activeItemIndex}
        variants={navVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ type: 'spring', bounce: 0.5}}
        whileHover="hover"
        onClick={() => swipeToItem(1)}
        sx={{
          height: '100%', 
          border: '4px solid transparent',
          borderWidth: '2px 1px 2px 0px',
          borderRadius: '0 25px 25px 0',
          background: `linear-gradient(to right, white, white) padding-box, ${GRADIENT_COLOR_2} border-box`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          /* boxShadow: '0px 0 5px 0px black', */
        }}>
          <Typography variant='h6' sx={{transform: 'rotate(90deg)',  fontWeight: 'bold'}}>
            {PAGES[wrap(0, PAGES.length, itemCount+1)].title}
          </Typography>
          
        </Box>
      </Box>
    </AnimatePresence>
  );
}
