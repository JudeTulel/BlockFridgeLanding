import Image from "next/image";
import Link from "next/link";
import { useState, JSX } from "react";
import BlockFridge from "../../../public/BlockFridge.webp";

const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image src={BlockFridge} alt="BlockFridge Logo" className="w-11 h-11 object-fill" />
            <span className="text-2xl font-bold">BlockFridge</span>
          </div>
          <nav className="hidden md:flex">
            <ul className="flex space-x-4">
              <li>
                <Link href="#features" className="hover:underline">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:underline">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#download" className="hover:underline">
                  Download
                </Link>
              </li>
            </ul>
          </nav>
          <div className="md:hidden">
            {/* Mobile menu button */}
            <button
              className="text-primary-foreground focus:outline-none"
              onClick={toggleMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="block hover:underline">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="block hover:underline">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#download" className="block hover:underline">
                  Download
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
