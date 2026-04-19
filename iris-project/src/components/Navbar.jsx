'use client';
import Link from "next/link";
import { LuPhone } from "react-icons/lu";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  return (
    <>
    <nav className="bg-white border-b-2 border-blue-900 py-4 px-4 shadow-sm w-full">
      <div className="flex items-center w-full relative">
        <Link className="text-blue-900 font-bold text-xl hover:text-blue-500 transition-colors min-w-max " href="/">Auto École Les Iris</Link>
        <button
          type="button"
          className="text-blue-900 text-2xl ml-auto sm:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Ouvrir le menu"
          aria-expanded={isMenuOpen}
        >
          <FiMenu />
        </button>
        <ul className=" md:flex hidden gap-8 justify-center m-0 p-0 list-none absolute left-1/2 -translate-x-1/2">
          <li><Link className="text-blue-900 font-bold text-lg hover:text-blue-500 transition-colors hover:cursor-pointer" href="/">Accueil</Link></li>
          <li><Link className="text-blue-900 font-bold text-lg hover:text-blue-500 transition-colors hover:cursor-pointer" href="/about">À propos</Link></li>
          <li><Link className="text-blue-900 font-bold text-lg hover:text-blue-500 transition-colors hover:cursor-pointer" href="/contact">Contact</Link></li>
          <li><Link className="text-blue-900 font-bold text-lg hover:text-blue-500 transition-colors hover:cursor-pointer" href="/horaires">Horaires</Link></li>
        </ul>
        <div className=" items-center absolute right-1 sm:flex hidden"  >
    <LuPhone className="text-blue-900 text-xl  " />
    <span className="ml-2 text-blue-900 font-bold text-lg">05 28 23 70 01 </span>
        </div>
      </div>
    </nav>

    <div
      className={`fixed inset-0 z-50 sm:hidden transition-opacity duration-300 ${
        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        type="button"
        aria-label="Fermer le menu"
        onClick={closeMenu}
        className="absolute inset-0 bg-black/40"
      />

      <div
        className={`absolute right-0 top-0 h-full w-72 bg-white shadow-xl p-6 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6 m-0 p-0 list-none">
          <li><Link className="text-blue-900 font-bold text-lg hover:text-blue-500 transition-colors hover:cursor-pointer" onClick={closeMenu} href="/">Accueil</Link></li>
          <li><Link className="text-blue-900 font-bold text-lg hover:text-blue-500 transition-colors hover:cursor-pointer" onClick={closeMenu} href="/about">À propos</Link></li>
          <li><Link className="text-blue-900 font-bold text-lg hover:text-blue-500 transition-colors hover:cursor-pointer" onClick={closeMenu} href="/contact">Contact</Link></li>
          <li><Link className="text-blue-900 font-bold text-lg hover:text-blue-500 transition-colors hover:cursor-pointer" onClick={closeMenu} href="/horaires">Horaires</Link></li>
        </ul>
      </div>
    </div>
    </>
  );
}