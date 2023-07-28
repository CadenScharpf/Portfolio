import Overview from "./Categories/Overview";
import Iridium from "./Categories/Iridium";
import Home from "./Categories/Education";
import Lgs from "./Categories/Lgs";
import Productivity from "./Categories/Productivity";
import Section1Technologies from "./Categories/Section1Technologies";

import officeImageLrg from "./assets/dba/digital-home-wallpaper-calendar.jpg";
import libImageLrg from "./assets/dba/digital-signage-meeting-room-01.jpg";
import Satellite from "./assets/satellite.jpg";
import coffee from "./assets/pexels-pixabay-414628.jpg";
import mac from "./assets/dba/personal-dashboard-for-production.jpg";
import meeting from "./assets/dba/presentboard-mobile-app.jpg";
import lgs from "./assets/lgs.jpeg";
import asu from "./assets/asu.jpg";
import tool from "./assets/tool.jpg";




export interface ICategory {
  type: string;
  name: string;
  image: string;
  component: React.FC;
}

export const Categories: ICategory[] = [
  {
    type: "General",
    name: "Overview",
    image: `url(${coffee})`,
    component: Overview,
  },
  {
    type: "General",
    name: "Technologies",
    image: `url(${tool})`,
    component: Section1Technologies,
  },
  {
    type: "Experience",
    name: "Iridium",
    image: `url(${Satellite})`,
    component: Iridium,
  },
  {
    type: "Experience",
    name: "LGS",
    image: `url(${lgs})`,
    component: Lgs,
  },
  {
    type: "Experience",
    name: "Education",
    image: `url(${asu})`,
    component: Home,
  }
];
