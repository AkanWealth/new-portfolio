import React, { useState } from 'react';

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const [activeSection, setActiveSection] = useState<string>("");

  const handleClick = (id: string) => {
    setActiveSection(id);
    scrollToSection(id);
  };

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">AkanWealth</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" onClick={() => handleClick("home")} className={`hover:text-gray-300 ${activeSection === "home" ? "text-gray-300" : ""}`}>Home</a>
            </li>
            <li>
              <a href="#" onClick={() => handleClick("projects")} className={`hover:text-gray-300 ${activeSection === "projects" ? "text-gray-300" : ""}`}>Projects</a>
            </li>
            <li>
              <a href="#" onClick={() => handleClick("about")} className={`hover:text-gray-300 ${activeSection === "about" ? "text-gray-300" : ""}`}>About</a>
            </li>
            <li>
              <a href="#" onClick={() => handleClick("contact")} className={`hover:text-gray-300 ${activeSection === "contact" ? "text-gray-300" : ""}`}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
