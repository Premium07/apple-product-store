import React from "react";
import { watchModels } from "../constants/data";
import WatchCard from "./WatchCard";

const Watch = () => {
  return (
    <section className="flex flex-col items-center justify-around bg-white h-full py-8 px-4">
      <h2 className="2xl:text-3xl xl:text-2xl md:text-2xl font-semibold text-gray-800 mb-4">
        Which Apple Watch is right for you?
      </h2>
      <div className="w-full flex justify-around">
        {watchModels.map((model, index) => (
          <WatchCard key={index} model={model} />
        ))}
      </div>
    </section>
  );
};

export default Watch;
