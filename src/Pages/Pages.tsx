import React from "react";
import { Home } from "./Home";
import { Works } from "./Works";
import { Resume } from "./Resume";
import LandingSection1 from "./Home/Components/Section1/Section1";

export interface Page {
  id: number;
  title: string;
  path: string;
  component: React.ComponentType;
}

export const PAGES: Page[] = [
  { id: 0, title: "Home", path: "/", component: LandingSection1 },
  { id: 1, title: "Works", path: "/works", component: Works },
  { id: 2, title: "Resume", path: "/resume", component: Resume },
];
