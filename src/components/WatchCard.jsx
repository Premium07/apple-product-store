import React from "react";

const WatchCard = ({ model }) => {
  return (
    <article className="w-54 h-[430px] flex flex-col justify-around ">
      <div className="w-full h-64 mb-4 overflow-hidden relative group">
        <img
          src={model.imgs[0]}
          alt={model.name}
          className="absolute size-full object-contain opacity-100 group-hover:opacity-0 transition-opacity duration-300"
        />
        <img
          src={model.imgs[1]}
          alt={model.name}
          className="absolute size-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
      <h3 className="2xl:text-xl xl:text-lg text-sm font-semibold">
        {model.name}
      </h3>
      <a href="#" className="my-2 text-base text-blue-400">
        {model.price}
      </a>
      <div className="md:text-sm text-xs text-gray-700 my-2">
        {model.desc.map((line, i) => (
          <span className="block" key={i}>
            {line}
          </span>
        ))}
      </div>
      <button className="w-min mt-4 py-1 px-2 text-sm bg-blue-400 rounded-full text-white cursor-pointer">
        Shop
      </button>
    </article>
  );
};

export default WatchCard;
