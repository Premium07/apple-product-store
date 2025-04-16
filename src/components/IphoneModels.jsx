import React from "react";

const IphoneModels = ({ model }) => {
  return (
    <article className="flex flex-col items-center justify-between gap-y-2">
      <img
        src={model.img}
        alt={model.name}
        className="2xl:w-72 lg:w-64 sm:w-48 md:h-64 sm:h-48 object-contain"
        draggable="false"
      />
      <a
        href="#"
        className="2xl:text-2xl xl:text-xl lg:text-base text-sm font-semibold text-gray-800 mt-4"
      >
        {model.name}
      </a>
      <p className="2xl:text-lg xl:text-base lg:text-sm text-xs text-gray-700 mt-2 ">
        {model.description}
      </p>
      <span className="2xl:text-base xl:text-sm lg:text-xs text-blue-400 mt-2">
        {model.price}
      </span>
      <button className="text-sm mt-4 px-6 py-2 cursor-pointer bg-blue-400 text-white rounded-full">
        Buy
      </button>
    </article>
  );
};

export default IphoneModels;
