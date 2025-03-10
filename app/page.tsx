"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import BodyTypeCard from "@/components/body-type-card"
import TestimonialCard from "@/components/testimonial-card"
import FeatureCard from "@/components/feature-card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Full Screen Background */}
      <section className="relative min-h-screen flex flex-col">
        <Image
          src="https://i.pinimg.com/736x/b8/e6/47/b8e647767a8c36cf25030d11240f4960.jpg"
          alt="Stylish woman"
          fill
          className="object-cover z-0"
          priority
        />

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/40 to-purple-500/30 z-10"></div>

        {/* Navbar */}
        <Navbar scrolled={scrolled} />

        {/* Hero Content */}
        <div className="container mx-auto px-4 flex-1 flex items-center justify-center relative z-20 pt-20">
          <div className="max-w-2xl text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Discover Your Perfect Style</h1>
            <p className="text-xl text-white/90 mb-8">
              Take our interactive quiz to find your body type and get personalized clothing recommendations that
              enhance your natural silhouette.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-pink-500 hover:bg-white/90 border-0">
                Take the Quiz <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">How StyleFit Works</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              Our simple 3-step process helps you discover your body type and find clothing that enhances your natural
              beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              number="1"
              title="Take the Quiz"
              description="Answer a few simple questions about your body measurements and proportions."
              icon="clipboard-list"
            />
            <FeatureCard
              number="2"
              title="Discover Your Type"
              description="Get your personalized body type analysis with detailed insights."
              icon="search"
            />
            <FeatureCard
              number="3"
              title="Get Recommendations"
              description="Receive tailored clothing suggestions that flatter your unique shape."
              icon="tshirt"
            />
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" className="bg-pink-400 hover:bg-pink-500 text-white">
              Start Your Style Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Body Types Overview */}
      <section className="py-20 bg-pink-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Understand Your Body Type
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              Every body is unique, but understanding your general shape can help you choose clothes that enhance your
              natural silhouette.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <BodyTypeCard
              type="Hourglass"
              description="Balanced bust and hips with a defined waist"
              imageSrc="https://i.pinimg.com/736x/ed/df/a3/eddfa39a50cae2502c51bb8b1b88096c.jpg"
            />
            <BodyTypeCard
              type="Pear"
              description="Hips wider than shoulders with a defined waist"
              imageSrc="https://i.pinimg.com/736x/aa/5e/4c/aa5e4c6ed23450966fc9f4ce6ae9d144.jpg"
            />
            <BodyTypeCard
              type="Rectangle"
              description="Shoulders, waist and hips of similar width"
              imageSrc="https://i.pinimg.com/736x/d8/e4/11/d8e411e4cbe4f994d5c3b63cbf0efd37.jpg"
            />
            <BodyTypeCard
              type="Inverted Triangle"
              description="Shoulders wider than hips with less defined waist"
              imageSrc="https://i.pinimg.com/736x/c8/4a/61/c84a6154eeb45b31803984b321f07654.jpg"
            />
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/body-types"
              className="text-pink-500 dark:text-pink-300 font-medium hover:text-pink-600 dark:hover:text-pink-200 flex items-center justify-center"
            >
              Learn more about all body types <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quiz Preview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Take Our Body Type Quiz</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Our comprehensive quiz analyzes your unique proportions to determine your body type and provide
                personalized style recommendations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-pink-100 dark:bg-pink-900 text-pink-500 dark:text-pink-300 flex items-center justify-center mr-3 mt-0.5">
                    ✓
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Simple measurements you can take at home</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-pink-100 dark:bg-pink-900 text-pink-500 dark:text-pink-300 flex items-center justify-center mr-3 mt-0.5">
                    ✓
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Visual guides to help identify your shape</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-pink-100 dark:bg-pink-900 text-pink-500 dark:text-pink-300 flex items-center justify-center mr-3 mt-0.5">
                    ✓
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Personalized results in under 3 minutes</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-pink-100 dark:bg-pink-900 text-pink-500 dark:text-pink-300 flex items-center justify-center mr-3 mt-0.5">
                    ✓
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Detailed style recommendations for your shape
                  </span>
                </li>
              </ul>
              <div className="pt-4">
                <Button size="lg" className="bg-pink-400 hover:bg-pink-500 text-white">
                  Start the Quiz
                </Button>
              </div>
            </div>
            <div className="bg-pink-50 dark:bg-gray-800 p-6 rounded-lg">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-pink-100 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Body Type Quiz</h3>
                <div className="space-y-6">
                  <div>
                    <p className="font-medium mb-2 text-gray-900 dark:text-white">
                      1. Where do you typically carry weight?
                    </p>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex items-center border dark:border-gray-700 rounded-lg p-3 hover:bg-pink-50 dark:hover:bg-gray-800 cursor-pointer">
                        <input type="radio" id="weight-1" name="weight" className="h-4 w-4 text-pink-500" />
                        <label
                          htmlFor="weight-1"
                          className="ml-2 cursor-pointer w-full text-gray-700 dark:text-gray-300"
                        >
                          Evenly throughout my body
                        </label>
                      </div>
                      <div className="flex items-center border dark:border-gray-700 rounded-lg p-3 hover:bg-pink-50 dark:hover:bg-gray-800 cursor-pointer">
                        <input type="radio" id="weight-2" name="weight" className="h-4 w-4 text-pink-500" />
                        <label
                          htmlFor="weight-2"
                          className="ml-2 cursor-pointer w-full text-gray-700 dark:text-gray-300"
                        >
                          Mostly in my hips and thighs
                        </label>
                      </div>
                      <div className="flex items-center border dark:border-gray-700 rounded-lg p-3 hover:bg-pink-50 dark:hover:bg-gray-800 cursor-pointer">
                        <input type="radio" id="weight-3" name="weight" className="h-4 w-4 text-pink-500" />
                        <label
                          htmlFor="weight-3"
                          className="ml-2 cursor-pointer w-full text-gray-700 dark:text-gray-300"
                        >
                          Mostly in my midsection
                        </label>
                      </div>
                      <div className="flex items-center border dark:border-gray-700 rounded-lg p-3 hover:bg-pink-50 dark:hover:bg-gray-800 cursor-pointer">
                        <input type="radio" id="weight-4" name="weight" className="h-4 w-4 text-pink-500" />
                        <label
                          htmlFor="weight-4"
                          className="ml-2 cursor-pointer w-full text-gray-700 dark:text-gray-300"
                        >
                          Mostly in my upper body
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline" disabled>
                      Previous
                    </Button>
                    <Button className="bg-pink-400 hover:bg-pink-500 text-white">Next</Button>
                  </div>
                  <div className="flex justify-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Question 1 of 8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-pink-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">What Our Users Say</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              Discover how StyleFit has helped women of all shapes and sizes find their perfect style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="StyleFit helped me understand why certain clothes never looked right on me. Now I shop with confidence!"
              name="Sophia J."
              bodyType="Hourglass"
              imageSrc="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              quote="I always struggled with finding pants that fit well. The recommendations for my pear shape have been game-changing!"
              name="Mia T."
              bodyType="Pear"
              imageSrc="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              quote="As a rectangle shape, I never knew how to create curves with my clothing. Now I have so many flattering outfits!"
              name="Emma L."
              bodyType="Rectangle"
              imageSrc="/placeholder.svg?height=100&width=100"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-pink-400 to-pink-500 dark:from-pink-500 dark:to-pink-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Discover Your Perfect Style?</h2>
            <p className="text-white/90 max-w-2xl mb-8">
              Take our quick quiz to find your body type and get personalized clothing recommendations that will
              transform your wardrobe.
            </p>
            <Button size="lg" className="bg-white text-pink-500 hover:bg-white/90">
              Take the Quiz Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

