import React from "react";
import { items } from "../constants/data";
import ProductCard from "./ProductCard";

const Home = ({ onNavigate }) => {
  return (
    <section className="w-full h-full grid grid-cols-2 grid-rows-2 gap-4 bg-gray-50">
      {items.map((item, index) => (
        <ProductCard
          key={index}
          item={item}
          onClick={() => onNavigate(item.pageIndex)}
        />
      ))}
    </section>
  );
};

export default Home;
