import React from "react";
import { Home } from "./Home";
import { Works } from "./Works";
import { Resume } from "./Resume";

export interface Page {
  id: number;
  title: string;
  path: string;
  component: React.ComponentType;
}

export const PAGES: Page[] = [
  { id: 0, title: "Home", path: "/", component: Home },
  { id: 1, title: "Works", path: "/works", component: Works },
  { id: 2, title: "Resume", path: "/resume", component: Resume },
];
