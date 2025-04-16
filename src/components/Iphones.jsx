import React from "react";
import { iphoneModels } from "../constants/data";
import IphoneModels from "./IphoneModels";

const Iphones = () => {
  return (
    <section className="size-full flex flex-col items-center justify-around bg-white p-8">
      <h3 className="2xl:text-4xl xl:text-3xl md:text-2xl text-gray-800 font-semibold mb-8">
        Which iPhone is right for you?
      </h3>
      <div className="flex justify-between w-full">
        {iphoneModels.map((model, index) => (
          <IphoneModels key={index} model={model} />
        ))}
      </div>
    </section>
  );
};

export default Iphones;
