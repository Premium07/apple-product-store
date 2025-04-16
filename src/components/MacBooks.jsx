import React, { useState } from "react";
import { macbookModels } from "../constants/data";

const MacBooks = () => {
  const [selectedChip, setSelectedChip] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);

  const currentMacBook = macbookModels[selectedChip];
  const currentMacBookColor = currentMacBook.colors[selectedColor];

  return (
    <section className="flex flex-col items-center justify-center bg-white p-4 h-full overflow-hidden w-full gap-4 md:gap-0">
      <h2 className="xl:text-2xl md:text-xl text-lg font-semibold text-gray-800 my-2">
        Choose your new MacBook Air.
      </h2>
      <div className="flex items-center justify-center my-2">
        {macbookModels.map((model, index) => (
          <button
            key={index}
            className={`2xl:w-36 md:w-26 w-28 2xl:h-16 md:h-12 h-10 flex flex-col justify-evenly items-center border transition-all duration-200 ${
              index === 0 ? "rounded-l-xl" : "rounded-r-xl"
            } cursor-pointer ${
              selectedChip === index
                ? "bg-gray-100 border-blue-400"
                : "bg-white border-gray-200"
            }`}
            onClick={() => {
              setSelectedChip(index);
              setSelectedColor(0);
            }}
          >
            <span className="2xl:text-lg xl:text-base text-xs font-bold text-gray-800">
              With {model.chip} chip
            </span>
            <span className="2xl:text-base xl:text-sm text-xs text-gray-600">
              {model.price}
            </span>
          </button>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-4 md:gap-0">
        <div className="flex items-center justify-center">
          <div className="w-full h-48 flex items-center justify-center">
            <img
              src={currentMacBookColor.img}
              alt={`MacBook air with ${currentMacBook.chip} `}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col items-start">
          <span className="xl:text-lg text-base font-medium text-gray-800 mb-1 text-center md:text-left">
            {currentMacBookColor.label}
          </span>
          <div className="flex space-x-2 mb-2 justify-center md:justify-start">
            {currentMacBook.colors.map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor(index)}
                style={{ backgroundColor: color.bg }}
                className={`2xl:size-6 sm:size-5 size-4 rounded-full border hover:border-blue-500 cursor-pointer ${
                  selectedColor === index
                    ? "border-2 border-blue-400"
                    : "border-transparent"
                }}`}
              ></button>
            ))}
          </div>
          <div className="flex items-start flex-col justify-start md:gap-3 mb-2">
            <img
              src={currentMacBook.icon}
              alt={`MacBook air with ${currentMacBook.chip} icon `}
              className="size-10 my-2"
            />
            <div className="text-left">
              {currentMacBook.specs.map((spec, index) => (
                <p
                  key={index}
                  className="text-sm font-semibold mb-0.5 text-gray-800"
                >
                  {spec}
                </p>
              ))}
            </div>
          </div>
          <button className="w-min text-sm py-1 px-3 bg-blue-400 rounded-full text-white mt-1">
            Buy
          </button>
        </div>
      </div>
    </section>
  );
};

export default MacBooks;
