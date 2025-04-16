import React, { useState } from "react";
import { imacModels } from "../constants/data";

const Imac = () => {
  const [selectedColor, setSelectedColor] = useState("green");
  const [visibleLabel, setVisibleLabel] = useState("Green");

  const getCurrentModel = () =>
    imacModels.find((model) => model.label.toLowerCase() === selectedColor);

  return (
    <section className="relative h-full grid grid-cols-2 grid-rows-2 md:gap-4 gap-1 bg-white">
      <div className="h-full col-span-1 row-span-2 flex flex-col items-center md:justify-center justify-start pt-8 bg-gray-50">
        <img
          src={getCurrentModel().images.side}
          alt="imac"
          className="2xl:max-w-40 xl:max-36 max-w-24"
        />
      </div>
      <div className="bg-gray-50 col-span-1 row-span-1 flex p-2 items-center justify-center">
        <img
          src={getCurrentModel().images.front}
          alt="imacfront"
          className="2xl:max-w-64 xl:max-w-52 lg:max-w-48"
        />
      </div>
      <div className="bg-gray-50 col-span-1 row-span-1 flex p-2 items-center justify-center">
        <img
          src={getCurrentModel().images.back}
          alt="imacback"
          className="2xl:max-w-64 xl:max-w-52 lg:max-w-48"
        />
      </div>
      <div className="absolute md:top-1/2 top-3/4 md:left-4 left-12 transform -translate-y-1/2 flex flex-col space-y-1 lg:space-y-2 bg-gray-50">
        {imacModels.map((model, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 transition-all duration-200"
          >
            <button
              onClick={() => {
                setSelectedColor(model.label.toLowerCase());
                setVisibleLabel(model.label);
              }}
              className={`2xl:size-8 md:size-5 size-4 cursor-pointer rounded-full flex items-center justify-center ${
                selectedColor === model.label.toLowerCase() &&
                "border-2 border-blue-500"
              }`}
              style={{ backgroundColor: model.bg }}
            />
            {model.label === visibleLabel && (
              <span className="text-sm">{model.label}</span>
            )}
          </div>
        ))}
        <button className="text-sm mt-4 w-min py-1 px-4 bg-blue-400 rounded-full text-white cursor-pointer">
          Shop
        </button>
      </div>
    </section>
  );
};

export default Imac;
