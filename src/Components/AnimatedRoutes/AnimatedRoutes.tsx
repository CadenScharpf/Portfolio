import { Route, Routes, useLocation } from 'react-router-dom';
import { Home, PAGES, Resume, Works } from '../../Pages';
import { AnimatePresence, motion, PanInfo, Variant, Variants } from 'framer-motion';
import { WebApplications } from '../../Pages/Works/Components';
import { BackendApps } from '../../Pages/Works/Components/BackendApps';
import { TestPage } from '../../Pages/TestPage/TestPage';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ContentWindow } from '../ContentWindow';
import { Box, Container, Typography } from '@mui/material';
import { wrap } from '@popmotion/popcorn';
import { Nav } from '../Nav';
import { LayoutContext } from '../../Context';

const GRADIENT_COLOR_1 = 'blue'
const GRADIENT_COLOR_2 = 'red'
const BORDER_COLOR = `linear-gradient(white, white) padding-box, linear-gradient(to right, ${GRADIENT_COLOR_1}, ${GRADIENT_COLOR_2}) border-box`



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
      <Nav/>
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
          margin: '1rem',
          position: 'absolute',
          top: LayoutContext.navHeight,
          bottom: 0,
          width: '90%',
          px: 0,
          
        }}
      >
        
        <Box 
        className="content-window"
        sx={{
          width: '95%', 
          height: '100%', 
          border: '4px solid transparent',
          borderWidth: '5px',
          borderRadius: '25px',
          background: BORDER_COLOR,
          boxShadow: '0px 0px 5px 0px black',
          overflow: 'scroll',
          maxWidth: '1700px'
        }}>
        {React.createElement(PAGES[activeItemIndex].component)}
        </Box>
        
      </Box>
    </AnimatePresence>
  );
}
