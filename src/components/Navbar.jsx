import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-around bg-white pt-10 h-15
">
      
      {/* Left side links */}
      <div className="flex gap-8 text-gray-700 font-medium">
        <h4 className="text-xl"><i class="ri-service-fill"></i></h4>
        <h4 className="cursor-pointer hover:text-black">About Me</h4>
        <h4 className="cursor-pointer hover:text-black">Portfolio</h4>
        <h4 className="cursor-pointer hover:text-black">Services</h4>
        <h4 className="cursor-pointer hover:text-black">Blog</h4>
      </div>

      {/* Right side button */}
      <a
        href="#"
        className="px-5 py-2 rounded-full text-black"
      >
        Book A Call<i class="ri-arrow-right-up-line"></i>
      </a>
    </nav>
  );
};

export default Navbar;
