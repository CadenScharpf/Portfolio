import { Education, Experience, Technologies } from "../Resume/Components";
import { Works } from "../Works";
import { CarouselItemProps } from "./Components/Carousel/CarouselItem";

export const ITEMS: CarouselItemProps[] = [
    {children: <Education/>},
    {children: <Technologies/>},
    {children: <Experience/>},
  ];