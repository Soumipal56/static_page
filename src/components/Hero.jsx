import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen bg-white px-12 pt-10">

      {/* Top stats */}
      <div className="absolute top-[80px] left-[140px] flex gap-24">
        <div>
          <p className="text-3xl font-medium text-gray-700">+200</p>
          <p className="text-sm text-gray-500">Project completed</p>
        </div>

        <div>
          <p className="text-3xl font-medium text-gray-700">+50</p>
          <p className="text-sm text-gray-500">Startup raised</p>
        </div>
      </div>

      {/* Main text */}
      <div className="absolute left-[120px] top-1/2 -translate-y-1/2">
        <h1 className="text-[120px] md:text-[160px] font-bold leading-none text-gray-900">
          Hello
        </h1>

        <p className="mt-4 text-base text-gray-600">
          — It’s D.Nova a design wizard
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-[70px] left-[120px] flex items-center gap-2 text-sm text-gray-500">
        <span>Scroll down</span>
        <i className="ri-arrow-down-line text-base"></i>
      </div>

      {/* Right image */}
      <div className="absolute right-24 top-1/2 -translate-y-1/2">
        <img
          src="/images/img.jpeg"
          alt="Hero"
          className="w-[530px] h-auto object-contain rounded-3xl"
        />
      </div>

    </section>
  );
};

export default Hero;
