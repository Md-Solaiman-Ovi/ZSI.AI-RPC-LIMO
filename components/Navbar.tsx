"use client";
import Link from "next/link";
import Image from "next/image";
import Img1 from "../public/logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="mulish bg-[rgba(218,145,0,1)] text-black">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center justify-between gap-10 text-[13px] font-bold">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src={Img1} alt="" width={190} height={376} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden space-x-6 lg:flex">
            <Link href="/" className="hover:text-white">
              HOME
            </Link>
            <Link href="/about" className="hover:text-white">
              ABOUT
            </Link>
            <div className="group relative">
              <button className="hover:text-white">SERVICES</button>
              <div className="absolute left-0 mt-2 hidden space-y-1 bg-white text-black shadow group-hover:block">
                <Link
                  href="/services/service1"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Service 1
                </Link>
                <Link
                  href="/services/service2"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Service 2
                </Link>
              </div>
            </div>
            <Link href="/fleet" className="hover:text-white">
              FLEET
            </Link>
            <Link href="/quote" className="hover:text-white">
              GET A QUOTE
            </Link>
            <Link href="/contact" className="hover:text-white">
              CONTACT
            </Link>
            <div className="group relative">
              <button className="hover:text-white">RATE</button>
              <div className="absolute left-0 mt-2 hidden space-y-1 bg-white text-black shadow group-hover:block">
                <Link
                  href="/rate/rate1"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Rate 1
                </Link>
                <Link
                  href="/rate/rate2"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Rate 2
                </Link>
              </div>
            </div>
            <Link href="/driver-login" className="hover:text-white">
              DRIVER LOGIN
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="text-black focus:outline-none"
            >
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Contact Info and Buttons */}
        <div className="hidden items-center space-x-4 text-[12px] font-bold md:flex">
          <div className="flex items-center space-x-1">
            <div className="group flex items-center rounded-full border-2 border-black p-2 hover:bg-black">
              <span className="material-icons">
                <FaPhoneAlt className="group-hover:text-white" />
              </span>
            </div>
            <p className="font-bold">1-833 711 4606</p>
          </div>
          <Link
            href="/book-now"
            className="rounded border-2 border-black bg-transparent px-4 py-2 text-center transition hover:bg-black hover:text-white"
          >
            BOOK NOW <br /> PAY LATER
          </Link>
          <Link
            href="/login"
            className="rounded border-2 border-black bg-transparent px-4 py-2 text-center transition hover:bg-black hover:text-white"
          >
            ACCOUNT <br /> LOGIN
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="bg-[rgba(218,145,0,1)] text-black lg:hidden">
          <nav className="flex flex-col items-start space-y-2 px-6 py-4">
            <Link href="/" className="hover:text-white">
              HOME
            </Link>
            <Link href="/about" className="hover:text-white">
              ABOUT
            </Link>
            <div className="group relative">
              <button className="hover:text-white">SERVICES</button>
              <div className="mt-2 space-y-1 bg-white text-black shadow">
                <Link
                  href="/services/service1"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Service 1
                </Link>
                <Link
                  href="/services/service2"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Service 2
                </Link>
              </div>
            </div>
            <Link href="/fleet" className="hover:text-white">
              FLEET
            </Link>
            <Link href="/quote" className="hover:text-white">
              GET A QUOTE
            </Link>
            <Link href="/contact" className="hover:text-white">
              CONTACT
            </Link>
            <div className="group relative">
              <button className="hover:text-white">RATE</button>
              <div className="mt-2 space-y-1 bg-white text-black shadow">
                <Link
                  href="/rate/rate1"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Rate 1
                </Link>
                <Link
                  href="/rate/rate2"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Rate 2
                </Link>
              </div>
            </div>
            <Link href="/driver-login" className="hover:text-white">
              DRIVER LOGIN
            </Link>
            <Link
              href="/book-now"
              className="block rounded border-2 border-black bg-transparent px-4 py-2 text-center transition hover:bg-black hover:text-white"
            >
              BOOK NOW <br /> PAY LATER
            </Link>
            <Link
              href="/login"
              className="block rounded border-2 border-black bg-transparent px-4 py-2 text-center transition hover:bg-black hover:text-white"
            >
              ACCOUNT <br /> LOGIN
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
