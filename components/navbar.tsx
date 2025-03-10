"use client"

import Link from "next/link"
import { Search, ShoppingBag, User, Menu } from "lucide-react"
import { useState } from "react"
import ThemeToggle from "./theme-toggle"

interface NavbarProps {
  scrolled: boolean
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm" : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold">StyleFit</span>
          </Link>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
              <Menu className="h-6 w-6" />
            </button>
          </div>

          <nav className={`hidden md:flex items-center space-x-8`}>
            <Link href="/quiz" className={`font-medium hover:opacity-80`}>
              Take the Quiz
            </Link>
            <Link href="/body-types" className={`font-medium hover:opacity-80`}>
              Body Types
            </Link>
            <Link href="/style-guides" className={`font-medium hover:opacity-80`}>
              Style Guides
            </Link>
            <Link href="/blog" className={`font-medium hover:opacity-80`}>
              Blog
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-5">
            <ThemeToggle className={scrolled ? "text-gray-900 dark:text-white" : "text-white"} />
            <button className={`hover:opacity-80 transition-opacity`}>
              <Search className="h-5 w-5" />
            </button>
            <button className={`hover:opacity-80 transition-opacity`}>
              <User className="h-5 w-5" />
            </button>
            <button
              className={`p-2 rounded-full ${
                scrolled ? "bg-pink-400 dark:bg-pink-300 text-white dark:text-gray-900" : "bg-white text-pink-500"
              }`}
            >
              <ShoppingBag className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/quiz" className="font-medium py-2">
                Take the Quiz
              </Link>
              <Link href="/body-types" className="font-medium py-2">
                Body Types
              </Link>
              <Link href="/style-guides" className="font-medium py-2">
                Style Guides
              </Link>
              <Link href="/blog" className="font-medium py-2">
                Blog
              </Link>
              <div className="flex items-center space-x-5 py-2">
                <ThemeToggle />
                <button>
                  <Search className="h-5 w-5" />
                </button>
                <button>
                  <User className="h-5 w-5" />
                </button>
                <button>
                  <ShoppingBag className="h-5 w-5" />
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

