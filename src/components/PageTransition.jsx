import React, { useEffect, useState } from "react";

const PageTransition = ({ activePage, children }) => {
  const [currentPage, setCurrentPage] = useState(activePage);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (activePage !== currentPage) {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentPage(activePage);
        setTransitioning(false);
      }, 500);
    }
  }, [activePage, currentPage]);

  return (
    <div className="w-full h-full overflow-hidden relative">
      <div
        className={`absolute w-full h-full transition-transform duration-500 ${
          transitioning ? "-translate-y-full" : "translate-y-0"
        } `}
      >
        {children[currentPage]}
      </div>
    </div>
  );
};

export default PageTransition;
