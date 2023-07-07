import { Education, Experience, Technologies } from "../Resume/Components";
import { MainContent } from "../Resume/Components/Sections";
import { Works } from "../Works";
import { CarouselItemProps } from "./Components/Carousel/CarouselItem";

export const ITEMS: CarouselItemProps[] = [
  {
    children: (
      <MainContent title="Technologies">
        <Technologies />
      </MainContent>
    ),
  },
  {
    children: (
      <MainContent title="Experience">
        <Experience />
      </MainContent>
    ),
  },
  {
    children: (
      <MainContent title="Education">
        <Education />
      </MainContent>
    ),
  },
];
