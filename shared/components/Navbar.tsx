"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="w-full bg-light-100 border-b border-light-300" role="navigation" aria-label="Main navigation">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="Nike Home">
              <div className="text-2xl font-bold text-dark-900">NIKE</div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/new-releases"
              className="text-base-medium text-dark-900 hover:text-dark-700 transition-colors duration-200"
            >
              New Releases
            </Link>
            <Link
              href="/men"
              className="text-base-medium text-dark-900 hover:text-dark-700 transition-colors duration-200"
            >
              Men
            </Link>
            <Link
              href="/women"
              className="text-base-medium text-dark-900 hover:text-dark-700 transition-colors duration-200"
            >
              Women
            </Link>
            <Link
              href="/kids"
              className="text-base-medium text-dark-900 hover:text-dark-700 transition-colors duration-200"
            >
              Kids
            </Link>
            <Link
              href="/sale"
              className="text-base-medium text-dark-900 hover:text-dark-700 transition-colors duration-200"
            >
              Sale
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Icon - Desktop */}
            <button
              className="hidden md:flex items-center justify-center p-2 rounded-full hover:bg-light-200 transition-colors duration-200"
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-dark-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Favorites Icon */}
            <button
              className="hidden md:flex items-center justify-center p-2 rounded-full hover:bg-light-200 transition-colors duration-200"
              aria-label="Favorites"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-dark-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>

            {/* Cart Icon */}
            <button
              className="flex items-center justify-center p-2 rounded-full hover:bg-light-200 transition-colors duration-200"
              aria-label="Shopping Cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-dark-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex items-center justify-center p-2 rounded-md text-dark-900 hover:bg-light-200 transition-colors duration-200"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-light-300 bg-light-100">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              href="/new-releases"
              className="block px-3 py-2 rounded-md text-base-medium text-dark-900 hover:bg-light-200 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              New Releases
            </Link>
            <Link
              href="/men"
              className="block px-3 py-2 rounded-md text-base-medium text-dark-900 hover:bg-light-200 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Men
            </Link>
            <Link
              href="/women"
              className="block px-3 py-2 rounded-md text-base-medium text-dark-900 hover:bg-light-200 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Women
            </Link>
            <Link
              href="/kids"
              className="block px-3 py-2 rounded-md text-base-medium text-dark-900 hover:bg-light-200 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Kids
            </Link>
            <Link
              href="/sale"
              className="block px-3 py-2 rounded-md text-base-medium text-dark-900 hover:bg-light-200 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Sale
            </Link>
            {/* Mobile Search */}
            <button
              className="w-full text-left px-3 py-2 rounded-md text-base-medium text-dark-900 hover:bg-light-200 transition-colors duration-200 flex items-center"
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </button>
            {/* Mobile Favorites */}
            <button
              className="w-full text-left px-3 py-2 rounded-md text-base-medium text-dark-900 hover:bg-light-200 transition-colors duration-200 flex items-center"
              aria-label="Favorites"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Favorites
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
