"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Share2, Download, Bookmark } from "lucide-react"
import Footer from "@/components/footer"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ClothingRecommendation from "@/components/clothing-recommendation"

export default function ResultsPage() {
  // In the component function, add:
  const router = useRouter()
  const [bodyType, setBodyType] = useState<string>("Hourglass")
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Retrieve quiz answers and body type from localStorage
    const storedAnswers = localStorage.getItem("quizAnswers")
    const storedBodyType = localStorage.getItem("bodyType")

    if (storedBodyType) {
      setBodyType(storedBodyType)
    }

    if (storedAnswers) {
      setAnswers(JSON.parse(storedAnswers))
    } else {
      // If no answers found, redirect back to quiz
      router.push("/quiz")
    }

    setLoading(false)
  }, [router])

  // Replace the hardcoded bodyType with the state variable
  // And add a loading state
  // Add this at the beginning of the return statement:
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-50 to-white">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-pink-400 border-r-transparent"></div>
          <p className="mt-4 text-gray-600">Loading your results...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow bg-gradient-to-r from-pink-50 to-white py-12">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-pink-400 to-pink-300 text-white p-6 md:p-8 text-center">
                <h1 className="text-3xl font-bold mb-2">Your Body Type Results</h1>
                <p>Based on your answers, we've identified your body type and prepared personalized recommendations.</p>
              </div>

              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <div className="bg-pink-50 rounded-xl p-6 text-center mb-6">
                      <h2 className="text-2xl font-bold text-pink-500 mb-2">You Have an {bodyType} Shape</h2>
                      <p className="text-gray-600 mb-4">
                        Your shoulders and hips are balanced with a defined waistline.
                      </p>
                      <div className="flex justify-center space-x-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-pink-200 text-pink-500 hover:bg-pink-50 rounded-full"
                        >
                          <Share2 className="mr-2 h-4 w-4" /> Share
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-pink-200 text-pink-500 hover:bg-pink-50 rounded-full"
                        >
                          <Download className="mr-2 h-4 w-4" /> Save
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-pink-200 text-pink-500 hover:bg-pink-50 rounded-full"
                        >
                          <Bookmark className="mr-2 h-4 w-4" /> Favorite
                        </Button>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Your Body Type Characteristics:</h3>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center mr-3 mt-0.5 text-xs">
                            ✓
                          </div>
                          <span>Balanced shoulders and hips</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center mr-3 mt-0.5 text-xs">
                            ✓
                          </div>
                          <span>Defined waistline</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center mr-3 mt-0.5 text-xs">
                            ✓
                          </div>
                          <span>Proportional bust and hips</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center mr-3 mt-0.5 text-xs">
                            ✓
                          </div>
                          <span>Curved silhouette</span>
                        </li>
                      </ul>

                      <h3 className="text-lg font-semibold mb-3">Style Goals:</h3>
                      <p className="text-gray-600 mb-4">
                        Enhance your natural curves while maintaining your balanced proportions.
                      </p>
                    </div>
                  </div>

                  <div className="relative h-[400px] rounded-xl overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=300&text=Hourglass"
                      alt="Hourglass body type illustration"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <Tabs defaultValue="clothing" className="mt-8">
                  <TabsList className="grid w-full grid-cols-4 bg-gray-100 text-gray-500">
                    <TabsTrigger value="clothing">Clothing</TabsTrigger>
                    <TabsTrigger value="outfits">Outfit Ideas</TabsTrigger>
                    <TabsTrigger value="avoid">What to Avoid</TabsTrigger>
                    <TabsTrigger value="celebrities">Celebrity Inspiration</TabsTrigger>
                  </TabsList>
                  <TabsContent value="clothing" className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <ClothingRecommendation
                        title="Tops"
                        recommendations={[
                          "Wrap tops that accentuate your waist",
                          "V-neck and scoop neck tops",
                          "Fitted button-down shirts",
                          "Peplum tops that highlight your waistline",
                        ]}
                        imageSrc="/placeholder.svg?height=200&width=200&text=Tops"
                      />
                      <ClothingRecommendation
                        title="Bottoms"
                        recommendations={[
                          "High-waisted pants and skirts",
                          "Straight or wide-leg pants",
                          "Pencil skirts that follow your curves",
                          "A-line skirts that aren't too full",
                        ]}
                        imageSrc="/placeholder.svg?height=200&width=200&text=Bottoms"
                      />
                      <ClothingRecommendation
                        title="Dresses"
                        recommendations={[
                          "Wrap dresses that define your waist",
                          "Fit and flare styles",
                          "Bodycon dresses that follow your curves",
                          "Belted dresses to highlight your waistline",
                        ]}
                        imageSrc="/placeholder.svg?height=200&width=200&text=Dresses"
                      />
                      <ClothingRecommendation
                        title="Outerwear"
                        recommendations={[
                          "Belted coats and jackets",
                          "Tailored blazers that nip in at the waist",
                          "Cropped jackets that hit at the waist",
                          "Wrap coats that define your silhouette",
                        ]}
                        imageSrc="/placeholder.svg?height=200&width=200&text=Outerwear"
                      />
                    </div>
                  </TabsContent>
                  <TabsContent value="outfits" className="pt-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      <div className="bg-gray-50 rounded-lg overflow-hidden">
                        <div className="relative h-[300px]">
                          <Image
                            src="/placeholder.svg?height=300&width=200&text=Outfit+1"
                            alt="Outfit idea for hourglass shape"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold mb-2">Casual Chic</h4>
                          <p className="text-sm text-gray-600">
                            High-waisted jeans, tucked-in wrap top, and ankle boots
                          </p>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg overflow-hidden">
                        <div className="relative h-[300px]">
                          <Image
                            src="/placeholder.svg?height=300&width=200&text=Outfit+2"
                            alt="Outfit idea for hourglass shape"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold mb-2">Office Ready</h4>
                          <p className="text-sm text-gray-600">Pencil skirt, fitted blouse, and a tailored blazer</p>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg overflow-hidden">
                        <div className="relative h-[300px]">
                          <Image
                            src="/placeholder.svg?height=300&width=200&text=Outfit+3"
                            alt="Outfit idea for hourglass shape"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold mb-2">Evening Elegance</h4>
                          <p className="text-sm text-gray-600">Wrap dress with statement belt and heels</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="avoid" className="pt-6">
                    <div className="bg-pink-50 rounded-lg p-6 mb-6">
                      <h3 className="text-lg font-semibold mb-3">What to Avoid for Your Body Type</h3>
                      <p className="text-gray-600 mb-4">
                        While you can wear anything you feel confident in, these styles may not highlight your natural
                        hourglass shape as effectively.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center mr-3 mt-0.5">
                          ✗
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Boxy, Shapeless Clothing</h4>
                          <p className="text-sm text-gray-600">
                            Oversized or shapeless garments hide your defined waist and natural curves.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center mr-3 mt-0.5">
                          ✗
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Stiff Fabrics with No Stretch</h4>
                          <p className="text-sm text-gray-600">
                            Rigid fabrics may not contour to your curves properly.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center mr-3 mt-0.5">
                          ✗
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Low-Rise Bottoms</h4>
                          <p className="text-sm text-gray-600">
                            These can disrupt your proportions and don't showcase your waistline.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center mr-3 mt-0.5">
                          ✗
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Excessive Ruffles or Volume</h4>
                          <p className="text-sm text-gray-600">
                            Too much fabric or detail can overwhelm your balanced proportions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="celebrities" className="pt-6">
                    <p className="text-gray-600 mb-6">
                      These celebrities share your body type and showcase great style inspiration for hourglass figures.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="relative h-[150px] w-[150px] mx-auto rounded-full overflow-hidden mb-3">
                          <Image
                            src="https://i.pinimg.com/736x/31/e3/80/31e380b114a505950064e21431f3c07d.jpg"
                            alt="Celebrity with hourglass figure"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h4 className="font-semibold">Scarlett Johansson</h4>
                      </div>
                      <div className="text-center">
                        <div className="relative h-[150px] w-[150px] mx-auto rounded-full overflow-hidden mb-3">
                          <Image
                            src="https://i.pinimg.com/736x/82/8d/fc/828dfcebba5e156b9d16587d9ed5c9fa.jpg"
                            alt="Celebrity with hourglass figure"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h4 className="font-semibold">Sofia Vergara</h4>
                      </div>
                      <div className="text-center">
                        <div className="relative h-[150px] w-[150px] mx-auto rounded-full overflow-hidden mb-3">
                          <Image
                            src="https://i.pinimg.com/736x/1e/4d/ee/1e4deeafab1a920330ea82018c5319b1.jpg"
                            alt="Celebrity with hourglass figure"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h4 className="font-semibold">Halle Berry</h4>
                      </div>
                      <div className="text-center">
                        <div className="relative h-[150px] w-[150px] mx-auto rounded-full overflow-hidden mb-3">
                          <Image
                            src="https://i.pinimg.com/736x/22/2e/d5/222ed54a5ff0e18d94b68086250beb0c.jpg"
                            alt="Celebrity with hourglass figure"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h4 className="font-semibold">Salma Hayek</h4>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-10 border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4">What's Next?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Link
                      href="/wardrobe-essentials"
                      className="bg-pink-50 hover:bg-pink-100 transition-colors p-4 rounded-lg flex flex-col items-center text-center"
                    >
                      <div className="text-pink-500 mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                      </div>
                      <h4 className="font-semibold mb-1">Wardrobe Essentials</h4>
                      <p className="text-sm text-gray-600">Build a capsule wardrobe for your body type</p>
                    </Link>
                    <Link
                      href="/style-guide"
                      className="bg-pink-50 hover:bg-pink-100 transition-colors p-4 rounded-lg flex flex-col items-center text-center"
                    >
                      <div className="text-pink-500 mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                      </div>
                      <h4 className="font-semibold mb-1">Complete Style Guide</h4>
                      <p className="text-sm text-gray-600">Download your personalized style guide</p>
                    </Link>
                    <Link
                      href="/shopping"
                      className="bg-pink-50 hover:bg-pink-100 transition-colors p-4 rounded-lg flex flex-col items-center text-center"
                    >
                      <div className="text-pink-500 mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="9" cy="21" r="1"></circle>
                          <circle cx="20" cy="21" r="1"></circle>
                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                      </div>
                      <h4 className="font-semibold mb-1">Shop Recommendations</h4>
                      <p className="text-sm text-gray-600">Browse clothing selected for your body type</p>
                    </Link>
                  </div>
                  <div className="mt-8 text-center">
                    <Button className="bg-pink-400 hover:bg-pink-500 text-white rounded-full" size="sm">
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

