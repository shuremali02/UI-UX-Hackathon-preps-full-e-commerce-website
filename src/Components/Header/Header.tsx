"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Input } from "../ui/input";
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { Menu, X, User } from "lucide-react";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="w-full bg-text mx-auto md:px-12">
      <div className="flex justify-between items-center md:px-4 p-6">
        {/* Logo */}
        <div className="font-bold text-2xl">Exclusive</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          {/* Navigation Links */}
          <Link href={"#"} className="hover:underline">
            Home
          </Link>
          <Link href={"/ContactUs"} className="hover:underline">
            Contact
          </Link>
          <Link href={"/About"} className="hover:underline">
            About
          </Link>
          <Link href={"/SignUp"} className="hover:underline">
            Sign Up
          </Link>

          {/* Search Bar */}
          <div className="relative flex items-center">
            <Input
              type="text"
              placeholder="What are you looking for?"
              className="w-[243px]"
            />
            <IoSearchOutline className="absolute top-2 right-2 p-1" size={22} />
          </div>

          {/* Icons */}
          <div className="flex gap-3 relative">
            <CiHeart size={28} />
            <BsCart size={28} />
            <div className="relative">
              {/* User Icon */}
              <div className="cursor-pointer" onClick={toggleDropdown}>
                <User size={28} />
              </div>

              {/* Dropdown Menu */}
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <ul className="py-1">
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Manage My Account
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        My Orders
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        My Cancellations
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        My Reviews
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-xl">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden h-screen  flex flex-col items-center justify-center gap-4 p-4 bg-white">
          <Link href={"#"} className="hover:underline">
            Home
          </Link>
          <Link href={"/ContactUs"} className="hover:underline">
            Contact
          </Link>
          <Link href={"/About"} className="hover:underline">
            About
          </Link>
          <Link href={"/SignUp"} className="hover:underline">
            Sign Up
          </Link>

          {/* Search Bar */}
      
          {/* Icons */}
          <div className="flex gap-3 mt-4">
            <CiHeart size={28} />
            <BsCart size={28} />
            <div className="relative">
              {/* User Icon */}
              <div className="cursor-pointer" onClick={toggleDropdown}>
                <User size={28} />
              </div>
              {/* Dropdown Menu */}
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <ul className="py-1">
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Manage My Account
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        My Orders
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        My Cancellations
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        My Reviews
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
