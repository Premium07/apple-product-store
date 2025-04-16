import React from "react";

const ProductCard = ({ item, onClick }) => {
  return (
    <article
      onClick={onClick}
      className="flex flex-col flex-grow items-center justify-center bg-white cursor-pointer"
    >
      <span className="text-xl font-bold bg-gradient-to-b from-red-500 to-yellow-300 bg-clip-text text-transparent tracking-wide mb-12">
        {item.label}
      </span>
      <img
        src={item.img}
        alt={item.label}
        className="max-w-[65%] max-h-[65%] object-contain mix-blend-darken"
        draggable="false"
      />
    </article>
  );
};

export default ProductCard;
