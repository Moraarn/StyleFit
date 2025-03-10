import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Footer from "@/components/footer"

export default function StyleGuidesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-gradient-to-r from-pink-400 to-pink-500 text-white py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Style Guides</h1>
              <p className="text-xl opacity-90 mb-8">
                Comprehensive guides to help you dress for your body type and create a wardrobe you love.
              </p>
              <Link href="/quiz">
                <Button size="lg" className="bg-white text-pink-500 hover:bg-white/90">
                  Find Your Body Type
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Style Guides Overview */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="hourglass" className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="hourglass">Hourglass</TabsTrigger>
                  <TabsTrigger value="pear">Pear</TabsTrigger>
                  <TabsTrigger value="rectangle">Rectangle</TabsTrigger>
                  <TabsTrigger value="inverted">Inverted Triangle</TabsTrigger>
                  <TabsTrigger value="apple">Apple</TabsTrigger>
                </TabsList>

                {/* Hourglass Content */}
                <TabsContent value="hourglass" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="md:col-span-1">
                      <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-4">
                        <Image
                          src="/placeholder.svg?height=400&width=300&text=Hourglass"
                          alt="Hourglass body type"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="bg-pink-50 dark:bg-gray-800 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2 text-pink-500 dark:text-pink-300">Hourglass Features</h3>
                        <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                          <li>• Balanced shoulders and hips</li>
                          <li>• Defined waistline</li>
                          <li>• Proportional bust and hips</li>
                          <li>• Curved silhouette</li>
                        </ul>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                        Hourglass Body Type Style Guide
                      </h2>
                      <p className="text-gray-700 dark:text-gray-300 mb-6">
                        The hourglass figure is characterized by a well-defined waistline with balanced bust and hip
                        measurements. Your style goal is to enhance your natural curves while maintaining your balanced
                        proportions.
                      </p>

                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Best Tops</h3>
                          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                            <li>Wrap tops that accentuate your waist</li>
                            <li>V-neck and scoop neck tops to highlight your balanced proportions</li>
                            <li>Fitted button-down shirts that follow your curves</li>
                            <li>Peplum tops that highlight your waistline</li>
                            <li>Tops that end at the waist or hip bone</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Best Bottoms</h3>
                          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                            <li>High-waisted pants and skirts to showcase your defined waist</li>
                            <li>Straight or wide-leg pants that balance your proportions</li>
                            <li>Pencil skirts that follow your curves</li>
                            <li>A-line skirts that aren't too full</li>
                            <li>Jeans with a mid or high rise</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Best Dresses</h3>
                          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                            <li>Wrap dresses that define your waist</li>
                            <li>Fit and flare styles that highlight your curves</li>
                            <li>Bodycon dresses that follow your natural shape</li>
                            <li>Belted dresses to emphasize your waistline</li>
                            <li>Sheath dresses with waist definition</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">What to Avoid</h3>
                          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                            <li>Boxy, shapeless clothing that hides your waist</li>
                            <li>Stiff fabrics with no stretch that don't contour to your curves</li>
                            <li>Low-rise bottoms that disrupt your proportions</li>
                            <li>Excessive ruffles or volume that overwhelm your balanced shape</li>
                            <li>Unstructured, oversized garments</li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8">
                        <Link href="/quiz">
                          <Button className="bg-pink-400 hover:bg-pink-500 text-white">
                            Take the Quiz to Confirm Your Body Type <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Pear Content */}
                <TabsContent value="pear" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="md:col-span-1">
                      <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-4">
                        <Image
                          src="/placeholder.svg?height=400&width=300&text=Pear"
                          alt="Pear body type"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="bg-pink-50 dark:bg-gray-800 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2 text-pink-500 dark:text-pink-300">Pear Features</h3>
                        <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                          <li>• Hips wider than shoulders</li>
                          <li>• Defined waistline</li>
                          <li>• Weight carried in lower body</li>
                          <li>• Slimmer upper body</li>
                        </ul>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                        Pear Body Type Style Guide
                      </h2>
                      <p className="text-gray-700 dark:text-gray-300 mb-6">
                        The pear body shape is characterized by hips that are wider than the shoulders. Your style goal
                        is to balance your proportions by adding volume to your upper body while minimizing focus on
                        your lower body.
                      </p>

                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Best Tops</h3>
                          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                            <li>Boat necks and wide necklines to broaden shoulders</li>
                            <li>Structured shoulders and puff sleeves to add volume</li>
                            <li>Tops with details or embellishments above the waist</li>
                            <li>Fitted tops that highlight your smaller waist</li>
                            <li>Padded shoulders or cap sleeves</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Best Bottoms</h3>
                          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                            <li>A-line skirts that skim over hips</li>
                            <li>Dark-colored bottoms with minimal details</li>
                            <li>Straight-leg or boot-cut pants to balance proportions</li>
                            <li>High-waisted styles that define your waist</li>
                            <li>Pants with stretch for comfort around hips and thighs</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Best Dresses</h3>
                          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                            <li>Fit and flare dresses with detailed bodices</li>
                            <li>A-line dresses that don't cling to hips</li>
                            <li>Empire waist dresses that draw attention upward</li>
                            <li>Dresses with statement necklines or sleeves</li>
                            <li>Wrap dresses that define the waist</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">What to Avoid</h3>
                          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                            <li>Bottoms with large pockets or details that add volume to hips</li>
                            <li>Clingy fabrics on your lower half</li>
                            <li>Pencil skirts that emphasize hip width</li>
                            <li>Low-rise pants that can create a muffin top</li>
                            <li>Tapered pants that make hips look wider</li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8">
                        <Link href="/quiz">
                          <Button className="bg-pink-400 hover:bg-pink-500 text-white">
                            Take the Quiz to Confirm Your Body Type <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Rectangle Content */}
                <TabsContent value="rectangle" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="md:col-span-1">
                      <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-4">
                        <Image
                          src="/placeholder.svg?height=400&width=300&text=Rectangle"
                          alt="Rectangle body type"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="bg-pink-50 dark:bg-gray-800 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2 text-pink-500 dark:text-pink-300">Rectangle Features</h3>
                        <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                          <li>• Shoulders, waist and hips of similar width</li>
                          <li>• Less defined waistline</li>
                          <li>• Athletic or straight figure</li>
                          <li>• Even weight distribution</li>
                        </ul>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                        Rectangle Body Type Style Guide
                      </h2>
                      <p className="text-gray-700 dark:text-gray-300 mb-6">
                        The rectangle body shape is characterized by shoulders, waist, and hips of similar width. Your
                        style goal is to create the illusion of curves and definition at the waist while showcasing your
                        likely toned arms and legs.
                      </p>

                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Best Tops</h3>
                          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                            <li>Tops with ruffles, embellishments, or details to create volume</li>
                            <li>Peplum tops to create the illusion of curves</li>
                            <li>Wrap tops that cinch at the waist</li>
                            <li>Tops with interesting necklines to draw attention upward</li>
                            <li>Layered tops to add dimension</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Best Bottoms</h3>
                          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                            <li>Bottoms with details that add curves (pleats, gathers, pockets)</li>
                            <li>Full or A-line skirts to create volume at the hips</li>
                            <li>Wide-leg pants to add curves to your lower half</li>
                            <li>Pants with back pocket details to add dimension</li>
                            <li>Belted styles to define your waist</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Best Dresses</h3>
                          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                            <li>Fit and flare dresses to create curves</li>
                            <li>Wrap dresses that cinch at the waist</li>
                            <li>Dresses with ruching or gathering at the waist</li>
                            <li>Dresses with belts to define your middle</li>
                            <li>Dresses with peplums or tiered details</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">What to Avoid</h3>
                          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                            <li>Shapeless, boxy silhouettes that don't define your waist</li>
                            <li>Straight shift dresses without waist definition</li>
                            <li>Overly baggy clothing that hides your frame</li>
                            <li>Tops and bottoms in the same color (breaks up your silhouette)</li>
                            <li>Styles that are too clingy without creating shape</li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8">
                        <Link href="/quiz">
                          <Button className="bg-pink-400 hover:bg-pink-500 text-white">
                            Take the Quiz to Confirm Your Body Type <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Inverted Triangle Content */}
                <TabsContent value="inverted" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="md:col-span-1">
                      <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-4">
                        <Image
                          src="/placeholder.svg?height=400&width=300&text=Inverted+Triangle"
                          alt="Inverted Triangle body type"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="bg-pink-50 dark:bg-gray-800 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2 text-pink-500 dark:text-pink-300">
                          Inverted Triangle Features
                        </h3>
                        <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                          <li>• Shoulders wider than hips</li>
                          <li>• Athletic upper body</li>
                          <li>• Narrower hips and thighs</li>
                          <li>• Less defined waistline</li>
                        </ul>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                        Inverted Triangle Body Type Style Guide
                      </h2>
                      <p className="text-gray-700 dark:text-gray-300 mb-6">
                        The inverted triangle body shape is characterized by shoulders that are wider than the hips.
                        Your style goal is to balance your broader upper body by adding volume to your lower half.
                      </p>

                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Best Tops</h3>
                          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                            <li>V-necks and scoop necks to soften broad shoulders</li>
                            <li>Tops with minimal shoulder details</li>
                            <li>Fitted tops that highlight your waist</li>
                            <li>Asymmetrical or cowl necklines</li>
                            <li>Tops with vertical details to elongate the torso</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Best Bottoms</h3>
                          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                            <li>Full skirts to add volume to hips</li>
                            <li>Wide-leg pants to balance broad shoulders</li>
                            <li>Pants with details at the hips and thighs</li>
                            <li>Bright colors and patterns on the bottom half</li>
                            <li>Cargo pants or pants with pocket details</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Best Dresses</h3>
                          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                            <li>A-line dresses that flare from the waist</li>
                            <li>Dresses with details at the hips</li>
                            <li>Fit and flare styles to balance proportions</li>
                            <li>Dresses with darker colors on top, lighter on bottom</li>
                            <li>Wrap dresses that define the waist</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">What to Avoid</h3>
                          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                            <li>Boat necks and off-shoulder tops that emphasize shoulder width</li>
                            <li>Tops with shoulder pads or puffed sleeves</li>
                            <li>Skinny jeans or tapered pants that make hips look narrower</li>
                            <li>Halter tops and racerback styles</li>
                            <li>Heavy embellishments or details on the shoulder area</li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8">
                        <Link href="/quiz">
                          <Button className="bg-pink-400 hover:bg-pink-500 text-white">
                            Take the Quiz to Confirm Your Body Type <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Apple Content */}
                <TabsContent value="apple" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="md:col-span-1">
                      <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-4">
                        <Image
                          src="/placeholder.svg?height=400&width=300&text=Apple"
                          alt="Apple body type"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="bg-pink-50 dark:bg-gray-800 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2 text-pink-500 dark:text-pink-300">Apple Features</h3>
                        <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                          <li>• Fuller midsection</li>
                          <li>• Weight carried around the waist</li>
                          <li>• Slimmer legs and arms</li>
                          <li>• Less defined waistline</li>
                        </ul>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                        Apple Body Type Style Guide
                      </h2>
                      <p className="text-gray-700 dark:text-gray-300 mb-6">
                        The apple body shape is characterized by a fuller midsection with weight carried around the
                        waist. Your style goal is to elongate your torso and create definition while showcasing your
                        likely slim legs.
                      </p>

                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Best Tops</h3>
                          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                            <li>V-necks and deep scoop necks to create a longer line</li>
                            <li>Empire waist tops that flow from under the bust</li>
                            <li>Tops with vertical details or patterns</li>
                            <li>Structured tops with some shape but not too fitted</li>
                            <li>Tops that end at the hip bone or longer</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Best Bottoms</h3>
                          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                            <li>Straight or boot-cut pants to balance proportions</li>
                            <li>A-line skirts that flow from the waist</li>
                            <li>Mid-rise pants that don't cut into your midsection</li>
                            <li>Pants with a bit of stretch for comfort</li>
                            <li>Flared or wide-leg pants to balance your upper body</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Best Dresses</h3>
                          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                            <li>Empire waist dresses that flow from under the bust</li>
                            <li>Wrap dresses with a higher waistline</li>
                            <li>A-line dresses that don't cling to the midsection</li>
                            <li>Dresses with ruching or draping at the waist</li>
                            <li>Shift dresses with structure</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">What to Avoid</h3>
                          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                            <li>Clingy fabrics around the midsection</li>
                            <li>Belts that sit at the widest part of your torso</li>
                            <li>Tops that end at your waistline</li>
                            <li>Pleated pants that add volume to your midsection</li>
                            <li>Dresses with defined waistlines at your natural waist</li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8">
                        <Link href="/quiz">
                          <Button className="bg-pink-400 hover:bg-pink-500 text-white">
                            Take the Quiz to Confirm Your Body Type <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-pink-400 to-pink-500 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Not Sure About Your Body Type?</h2>
              <p className="text-xl opacity-90 mb-8">
                Take our quick quiz to discover your body type and get personalized style recommendations tailored just
                for you.
              </p>
              <Link href="/quiz">
                <Button size="lg" className="bg-white text-pink-500 hover:bg-white/90">
                  Take the Body Type Quiz Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

