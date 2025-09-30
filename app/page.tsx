import React from "react";
import HeroPage from "./components/HeroPage";
import ShopByCategory from "./shop-by-category/page";
import ActivitiesPage from "./activities/page";
import ScrollPage from "./components/ScrollPage";

export default function Homepage() {
  return (
    <div>
      <HeroPage />
      <ShopByCategory />
      <ActivitiesPage />
      <ScrollPage />
    </div>
  );
}
