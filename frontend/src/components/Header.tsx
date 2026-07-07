import React from 'react';

function Header() {
  return (
    <header className="flex items-center justify-between w-full py-6 ">
      <h1 className="text-4xl font-bold text-white">
        My<span className="text-[#e5234b]">Flix</span>
      </h1>
    </header>
  );
}

export default Header;
