// import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/80 border-b border-red-600/20 shadow-lg shadow-red-600/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Left */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-white border-2 border-red-600 flex items-center justify-center overflow-hidden shadow-lg shadow-red-600/20">
            <img
              src="/SoftNova Logo.png"
              alt="SoftNova Logo"
              className="w-11 h-11 object-contain"
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-wide text-white">
              SoftNova
              <span className="text-red-500"> Academy</span>
            </h1>

            <p className="text-xs text-gray-400 tracking-wider uppercase">
              Learn • Build • Grow
            </p>
          </div>
        </div>

        {/* Center */}
        <div className="hidden lg:block">
          <h2 className="text-2xl font-semibold text-white tracking-wide">
            Student Registration
            <span className="text-red-500"> Portal</span>
          </h2>
        </div>

        {/* Right */}
  <div className="hidden md:flex items-center">
  <div className="group cursor-pointer flex items-center gap-2 px-5 py-2 rounded-full border border-red-600/40 bg-red-600/10 hover:bg-red-600 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-600/30">

    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse group-hover:bg-white"></span>

    <span className="text-red-400 group-hover:text-white text-sm font-semibold transition-colors duration-300">
      Admissions Open
    </span>

  </div>
</div>

      </div>
    </header>
  );
};

export default Navbar;