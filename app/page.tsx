import React from "react";
import HeroPage from "./components/HeroPage";
import ShopByCategory from "./shop-by-category/page";

export default function Homepage() {
  return (
    <div>
      <HeroPage />
      <ShopByCategory />
    </div>
  );
}
