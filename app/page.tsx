import React from "react";
import HeroPage from "./components/HeroPage";
import ShopByCategory from "./shop-by-category/page";
import ActivitiesPage from "./activities/page";

export default function Homepage() {
  return (
    <div>
      <HeroPage />
      <ShopByCategory />
      <ActivitiesPage />
    </div>
  );
}
