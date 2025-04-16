import React from "react";

const Controls = ({ toggleZoom, frameZoom, resetPage, activePage }) => {
  return (
    <div className="absolute top-2 right-3 z-20 space-x-2">
      <button
        className="text-xl text-pink-400 cursor-pointer hidden lg:inline-block"
        onClick={toggleZoom}
      >
        <i className={frameZoom ? "bx bxs-zoom-out" : "bx bxs-zoom-in"}></i>
      </button>
      <button
        className={`text-xl ${
          activePage === 0
            ? "text-pink-200 cursor-not-allowed"
            : "text-pink-400 cursor-pointer"
        } md:inline-block`}
        onClick={resetPage}
        disabled={activePage === 0}
      >
        <i className="bx bx-x-circle"></i>
      </button>
    </div>
  );
};

export default Controls;
