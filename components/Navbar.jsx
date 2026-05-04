"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 right-0 z-50 bg-[#121212] border-b border-[#33353F]">
      <div className="flex items-center justify-between mx-auto px-4 py-2 lg:py-4 max-w-7xl">
        <Link href="/" className="text-2xl md:text-5xl text-white font-semibold">
          SOUNAK
        </Link>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:block">
          <ul className="flex md:flex-row md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile menu */}
      {navbarOpen && (
        <div onClick={() => setNavbarOpen(false)}>
          <MenuOverlay links={navLinks} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;