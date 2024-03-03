import React, { useState } from 'react';

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleClick = (id: string) => {
    setActiveSection(id);
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-3xl font-bold">AkanWealth</h1>
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            )}
          </svg>
        </button>
        <nav className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="md:flex md:space-x-4">
            <li>
              <a
                href="#"
                onClick={() => handleClick("home")}
                className={`block px-4 py-2 md:p-0 hover:text-gray-300 ${
                  activeSection === "home" ? "text-gray-300" : ""
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleClick("projects")}
                className={`block px-4 py-2 md:p-0 hover:text-gray-300 ${
                  activeSection === "projects" ? "text-gray-300" : ""
                }`}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleClick("about")}
                className={`block px-4 py-2 md:p-0 hover:text-gray-300 ${
                  activeSection === "about" ? "text-gray-300" : ""
                }`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleClick("contact")}
                className={`block px-4 py-2 md:p-0 hover:text-gray-300 ${
                  activeSection === "contact" ? "text-gray-300" : ""
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;