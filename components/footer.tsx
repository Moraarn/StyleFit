import Link from "next/link"
import { Instagram, Facebook, Twitter, Linkedin, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-pink-50 dark:bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand and About */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-pink-500 dark:text-pink-300">StyleFit</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Helping women discover their body type and find clothing that enhances their natural beauty.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="bg-white dark:bg-gray-800 text-pink-400 p-2 rounded-full hover:bg-pink-100 dark:hover:bg-gray-700 transition-colors"
              >
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="bg-white dark:bg-gray-800 text-pink-400 p-2 rounded-full hover:bg-pink-100 dark:hover:bg-gray-700 transition-colors"
              >
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="bg-white dark:bg-gray-800 text-pink-400 p-2 rounded-full hover:bg-pink-100 dark:hover:bg-gray-700 transition-colors"
              >
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="bg-white dark:bg-gray-800 text-pink-400 p-2 rounded-full hover:bg-pink-100 dark:hover:bg-gray-700 transition-colors"
              >
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/quiz"
                  className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-300 transition-colors"
                >
                  Body Type Quiz
                </Link>
              </li>
              <li>
                <Link
                  href="/body-types"
                  className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-300 transition-colors"
                >
                  Body Types
                </Link>
              </li>
              <li>
                <Link
                  href="/style-guides"
                  className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-300 transition-colors"
                >
                  Style Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-300 transition-colors"
                >
                  Fashion Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/wardrobe-essentials"
                  className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-300 transition-colors"
                >
                  Wardrobe Essentials
                </Link>
              </li>
              <li>
                <Link
                  href="/seasonal-trends"
                  className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-300 transition-colors"
                >
                  Seasonal Trends
                </Link>
              </li>
              <li>
                <Link
                  href="/color-analysis"
                  className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-300 transition-colors"
                >
                  Color Analysis
                </Link>
              </li>
              <li>
                <Link
                  href="/shopping-guides"
                  className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-300 transition-colors"
                >
                  Shopping Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/faq"
                  className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-300 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-300 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-300 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-300 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">Stay Updated</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Subscribe to our newsletter for style tips and updates.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white dark:bg-gray-800 border-pink-200 dark:border-gray-700 focus:border-pink-400"
              />
              <Button className="w-full rounded-full" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-pink-200 dark:border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} StyleFit. All rights reserved.
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center">
              Made with <Heart size={14} className="mx-1 text-pink-400" /> for women everywhere
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

