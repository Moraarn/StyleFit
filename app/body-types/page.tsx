import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import BodyTypeCard from "@/components/body-type-card"
import ClothingRecommendation from "@/components/clothing-recommendation"
import Footer from "@/components/footer"

export default function BodyTypesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-gradient-to-r from-pink-400 to-pink-500 text-white py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Understanding Body Types</h1>
              <p className="text-xl opacity-90 mb-8">
                Learn about different body shapes and discover the best styles to enhance your natural silhouette.
              </p>
              <Link href="/quiz">
                <Button size="lg" className="bg-white text-pink-500 hover:bg-white/90">
                  Take the Body Type Quiz
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Body Types Overview */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">The Five Main Body Types</h2>
              <p className="text-gray-600 dark:text-gray-300">
                While every body is unique, most women fall into one of these five general categories. Understanding
                your body type can help you choose clothing that enhances your natural shape.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <BodyTypeCard
                type="Hourglass"
                description="Balanced bust and hips with a defined waist. Your shoulders and hips are similar in width."
                imageSrc="https://i.pinimg.com/736x/ed/df/a3/eddfa39a50cae2502c51bb8b1b88096c.jpg"
              />
              <BodyTypeCard
                type="Pear"
                description="Hips wider than shoulders with a defined waist. You carry weight in your lower body."
                imageSrc="https://i.pinimg.com/736x/a7/e8/b4/a7e8b4981a24c2987aeb4322e838f852.jpg"
              />
              <BodyTypeCard
                type="Rectangle"
                description="Shoulders, waist and hips of similar width. Your figure is athletic with less defined curves."
                imageSrc="https://i.pinimg.com/736x/34/e7/b3/34e7b3795da304a81726d87b268f9dd3.jpg"
              />
              <BodyTypeCard
                type="Inverted Triangle"
                description="Shoulders wider than hips with less defined waist. Your upper body is broader than your lower body."
                imageSrc="https://i.pinimg.com/736x/0d/f8/bf/0df8bfb2de4632ac35d2ab53f074e4f0.jpg"
              />
              <BodyTypeCard
                type="Apple"
                description="Fuller midsection with slimmer legs and arms. You carry weight around your waist and upper body."
                imageSrc="https://i.pinimg.com/736x/0c/01/e7/0c01e70dd65c1ba1eef1d13b128ae342.jpg"
              />
            </div>

            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Not sure which body type you have? Our quick quiz will help you find out!
              </p>
              <Link href="/quiz">
                <Button className="bg-pink-400 hover:bg-pink-500 text-white">
                  Take the Quiz <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Detailed Body Type Information */}
        <section className="py-16 bg-pink-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
                Dressing for Your Body Type
              </h2>

              {/* Hourglass Section */}
              <div className="mb-16">
                <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                  <div className="md:w-1/3">
                    <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                      <Image
                        src="https://i.pinimg.com/474x/79/e3/f6/79e3f685a459357cf7f10b1546cfb8eb.jpg"
                        alt="Hourglass body type"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold mb-4 text-pink-500 dark:text-pink-300">Hourglass Body Type</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      The hourglass figure is characterized by a well-defined waistline with balanced bust and hip
                      measurements. Your shoulders and hips are approximately the same width.
                    </p>
                    <h4 className="font-semibold mb-2">Characteristics:</h4>
                    <ul className="list-disc pl-5 mb-4 text-gray-700 dark:text-gray-300 space-y-1">
                      <li>Balanced shoulders and hips</li>
                      <li>Defined waistline</li>
                      <li>Proportional bust and hips</li>
                      <li>Curved silhouette</li>
                    </ul>
                    <h4 className="font-semibold mb-2">Style Goal:</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Enhance your natural curves while maintaining your balanced proportions.
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    Clothing Recommendations for Hourglass Shapes
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ClothingRecommendation
                      title="Tops"
                      recommendations={[
                        "Wrap tops that accentuate your waist",
                        "V-neck and scoop neck tops",
                        "Fitted button-down shirts",
                        "Peplum tops that highlight your waistline",
                      ]}
                      imageSrc="https://i.pinimg.com/736x/db/2b/3f/db2b3f03bb9a991be4803e60fa30819e.jpg"
                    />
                    <ClothingRecommendation
                      title="Bottoms"
                      recommendations={[
                        "High-waisted pants and skirts",
                        "Straight or wide-leg pants",
                        "Pencil skirts that follow your curves",
                        "A-line skirts that aren't too full",
                      ]}
                      imageSrc="https://i.pinimg.com/736x/cd/46/6b/cd466b5ed940fe1ddef40d0fc3e5543c.jpg"
                    />
                  </div>
                </div>
              </div>

              {/* Pear Section */}
              <div className="mb-16">
                <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                  <div className="md:w-1/3 md:order-last">
                    <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                      <Image
                        src="https://i.pinimg.com/736x/79/3b/b3/793bb3f2e9e89989e0270fae60d9ad58.jpg"
                        alt="Pear body type"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold mb-4 text-pink-500 dark:text-pink-300">Pear Body Type</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      The pear body shape is characterized by hips that are wider than the shoulders. You likely have a
                      defined waist and carry weight in your lower body.
                    </p>
                    <h4 className="font-semibold mb-2">Characteristics:</h4>
                    <ul className="list-disc pl-5 mb-4 text-gray-700 dark:text-gray-300 space-y-1">
                      <li>Hips wider than shoulders</li>
                      <li>Defined waistline</li>
                      <li>Weight carried in lower body</li>
                      <li>Slimmer upper body</li>
                    </ul>
                    <h4 className="font-semibold mb-2">Style Goal:</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Balance your proportions by adding volume to your upper body while minimizing focus on your lower
                      body.
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    Clothing Recommendations for Pear Shapes
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ClothingRecommendation
                      title="Tops"
                      recommendations={[
                        "Boat necks and wide necklines",
                        "Structured shoulders and puff sleeves",
                        "Tops with details or volume above the waist",
                        "Fitted tops that highlight your waist",
                      ]}
                      imageSrc="https://i.pinimg.com/736x/f2/a3/9d/f2a39d4f3ff87c492a7ee63fbabea449.jpg"
                    />
                    <ClothingRecommendation
                      title="Bottoms"
                      recommendations={[
                        "A-line skirts that skim over hips",
                        "Dark-colored bottoms with minimal details",
                        "Straight-leg or boot-cut pants",
                        "High-waisted styles that define your waist",
                      ]}
                      imageSrc="https://i.pinimg.com/736x/46/d4/c1/46d4c1393f982fb43863e08a526c3608.jpg"
                    />
                  </div>
                </div>
              </div>

              {/* Call to action */}
              <div className="text-center mt-12">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Want Personalized Style Recommendations?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Take our quick quiz to discover your body type and get tailored clothing suggestions that will enhance
                  your natural shape.
                </p>
                <Link href="/quiz">
                  <Button size="lg" className="bg-pink-400 hover:bg-pink-500 text-white">
                    Take the Body Type Quiz
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

