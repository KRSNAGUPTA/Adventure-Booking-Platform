import React from 'react';

function Header() {
  return (
    <header className="bg-transparent text-white py-6 px-8 fixed w-full z-20">
      <div className="flex justify-between items-center">
        {/* Logo / Title */}
        <div className="text-3xl font-extrabold tracking-wide">
          <span className="text-yellow-400">Thrill</span>Scape
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
            </li>
            <li>
              <a href="#adventures" className="hover:text-yellow-400 transition-colors">Adventures</a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-400 transition-colors">About</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Book Now Button */}
        <div>
          <button className="bg-yellow-400 text-black py-2 px-6 rounded-lg hover:bg-yellow-500 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
