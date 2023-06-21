import { Box, Grid, IconButton, Stack } from "@mui/material";
import React, { useState } from "react";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import LensIcon from '@mui/icons-material/Lens';
import { wrap } from "@popmotion/popcorn"

import {ITEMS} from './Items'
import { PanInfo, Point, motion } from "framer-motion";
import { CarouselItem } from "./CarouselItem";

const sliderVariants = {
  incoming: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2
  })
}

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04]
}


interface ICarouselProps {
  style: React.CSSProperties;
}

export function Carousel(props: ICarouselProps) {
  const [[itemCount, direction], setItemCount] = useState([0, 0])
  const activeItemIndex = wrap(0, ITEMS.length, itemCount)

  const swipeToItem = (swipeDirection: number) => {
    setItemCount([itemCount + swipeDirection, swipeDirection])
  }

  const dragEndHandler = (dragInfo: PanInfo) => {
    const draggedDistance = dragInfo.offset.x
    const swipeThreshold = 50
    if (draggedDistance > swipeThreshold) {
      swipeToItem(-1)
    } else if (draggedDistance < -swipeThreshold) {
      swipeToItem(1)
    }
  }

  const skipToItem = (imageId: number) => {
    let changeDirection = 0
    if (imageId > activeItemIndex) {
      changeDirection = 1
    } else if (imageId < activeItemIndex) {
      changeDirection = -1
    }
    setItemCount([imageId, changeDirection])
  }

  return (
    <>
      <Box
        key={itemCount}
        component={motion.div}
        custom={direction}
        variants={sliderVariants}
        initial="incoming"
        animate="active"
        exit="exit"
        transition={sliderTransition}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
        className="item"
        sx={{
          ...props.style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "25px",
          border: "1px solid black",
        
        }}
      >
      <CarouselItem {...ITEMS[activeItemIndex]} />
      </Box>
      <Stack
        direction="row"
        sx={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <IconButton onClick={() => swipeToItem(-1)}><ArrowLeftIcon /></IconButton>

       { ITEMS.map((item, index) => {
          return (
            <IconButton>
              <LensIcon fontSize="small"/>
            </IconButton>
          );
        })}

        <IconButton onClick={() => swipeToItem(1)}><ArrowRightIcon /></IconButton>

      </Stack>
    </>
  );
}
