import type { RouteLocationRaw } from "vue-router";

export type Menu = {
  name: string;
  key: string;
  to: RouteLocationRaw;
};

export const Menus: Menu[] = [
  {
    name: "Articles",
    key: "blogs",
    to: "/blogs",
  },
  {
    name: "Cartes",
    key: "cartes",
    to: "/cartes",
  },
  {
    name: "Personnages",
    key: "personnages",
    to: "/personnages",
  },
  {
    name: "Saison 1",
    key: "saison-1",
    to: "/saison-1",
  },
];
