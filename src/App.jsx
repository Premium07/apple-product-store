import React, { useEffect, useState } from "react";
import Controls from "./components/Controls";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Iphone from "./components/Iphones";
import MacBooks from "./components/MacBooks";
import Watch from "./components/Watch";
import Imac from "./components/Imac";
import PageTransition from "./components/PageTransition";

const App = () => {
  const [frameZoom, setFrameZoom] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once on initial load
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleFrameZoom = () => {
    console.log("Toggle zoom clicked, current state:", frameZoom);
    // Force a re-render by using a callback function
    setFrameZoom((prevZoom) => {
      const newZoom = !prevZoom;
      console.log("Setting zoom to:", newZoom);
      return newZoom;
    });
  };

  const handleNavClick = (pageIndex) => {
    setActivePage(pageIndex);
    // Close navbar on mobile when navigating
    if (!isLargeScreen) {
      setIsNavbarOpen(false);
    }
  };

  const resetPage = () => {
    setActivePage(0);
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <main className="w-full h-screen grid place-items-center">
      <section
        className={`
          w-full h-full
          ${
            frameZoom
              ? "md:w-[98vw] md:h-[98vh] lg:w-[98vw] lg:h-[98vh] xl:w-[98vw] xl:h-[98vh]"
              : "md:w-[90vw] md:h-[90vh] lg:w-[80vw] lg:h-[85vh] xl:w-[70vw] xl:h-[85vh]"
          }
          md:border md:border-gray-300 md:rounded-2xl
          overflow-auto relative transition-all duration-500 flex
        `}
      >
        <Navbar
          activePage={activePage}
          handleNavClick={handleNavClick}
          toggleNavbar={toggleNavbar}
          isNavbarOpen={isNavbarOpen}
        />
        <Controls
          toggleZoom={toggleFrameZoom}
          frameZoom={frameZoom}
          resetPage={resetPage}
          activePage={activePage}
        />

        <section className="flex-grow">
          <PageTransition activePage={activePage}>
            <Home onNavigate={handleNavClick} />
            <Iphone />
            <MacBooks />
            <Watch />
            <Imac />
          </PageTransition>
        </section>
      </section>
    </main>
  );
};

export default App;
