import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "How to Dress for Your Body Type: A Comprehensive Guide",
      excerpt:
        "Learn the fundamentals of dressing for your unique body shape and how to enhance your natural features.",
      category: "Style Tips",
      date: "June 15, 2023",
      imageSrc: "/placeholder.svg?height=300&width=500&text=Body+Type+Guide",
      slug: "how-to-dress-for-your-body-type",
    },
    {
      id: 2,
      title: "10 Wardrobe Essentials Every Woman Should Own",
      excerpt: "Build a versatile capsule wardrobe with these timeless pieces that work for every body type.",
      category: "Wardrobe Essentials",
      date: "May 28, 2023",
      imageSrc: "/placeholder.svg?height=300&width=500&text=Wardrobe+Essentials",
      slug: "wardrobe-essentials-every-woman-should-own",
    },
    {
      id: 3,
      title: "The Psychology of Clothing: How What You Wear Affects Confidence",
      excerpt: "Discover how the right clothing choices can boost your confidence and impact how others perceive you.",
      category: "Fashion Psychology",
      date: "May 12, 2023",
      imageSrc: "/placeholder.svg?height=300&width=500&text=Psychology+of+Clothing",
      slug: "psychology-of-clothing-confidence",
    },
    {
      id: 4,
      title: "Summer Style Guide for Every Body Type",
      excerpt: "Stay cool and stylish this summer with flattering options for your specific body shape.",
      category: "Seasonal Style",
      date: "April 30, 2023",
      imageSrc: "/placeholder.svg?height=300&width=500&text=Summer+Style",
      slug: "summer-style-guide-body-types",
    },
    {
      id: 5,
      title: "How to Take Your Measurements Accurately",
      excerpt:
        "Learn the proper technique for taking your body measurements to determine your body type and clothing size.",
      category: "Body Measurements",
      date: "April 15, 2023",
      imageSrc: "/placeholder.svg?height=300&width=500&text=Body+Measurements",
      slug: "how-to-take-measurements-accurately",
    },
    {
      id: 6,
      title: "Celebrity Style Inspiration for Each Body Type",
      excerpt: "Get inspired by celebrities who share your body type and learn how to recreate their best looks.",
      category: "Celebrity Style",
      date: "March 28, 2023",
      imageSrc: "/placeholder.svg?height=300&width=500&text=Celebrity+Style",
      slug: "celebrity-style-inspiration-body-types",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-gradient-to-r from-pink-400 to-pink-500 text-white py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">StyleFit Blog</h1>
              <p className="text-xl opacity-90 mb-8">
                Fashion tips, style advice, and body-positive content to help you look and feel your best.
              </p>
              <Link href="/quiz">
                <Button size="lg" className="bg-white text-pink-500 hover:bg-white/90">
                  Take the Body Type Quiz
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Featured+Post"
                    alt="Featured blog post"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="inline-block bg-pink-100 dark:bg-pink-900 text-pink-500 dark:text-pink-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Featured Post
                  </span>
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                    Understanding Your Body Type: The Key to Effortless Style
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Discover why knowing your body type is the foundation of a flattering wardrobe. This comprehensive
                    guide will help you identify your shape and learn how to dress in a way that enhances your natural
                    features.
                  </p>
                  <Link href="/blog/understanding-your-body-type">
                    <Button className="bg-pink-400 hover:bg-pink-500 text-white">
                      Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 bg-pink-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Latest Articles</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="relative h-[200px]">
                      <Image src={post.imageSrc || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-pink-500 dark:text-pink-300">{post.category}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{post.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{post.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{post.excerpt}</p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-pink-500 dark:text-pink-300 font-medium hover:text-pink-600 dark:hover:text-pink-200 flex items-center text-sm"
                      >
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Button variant="outline" className="border-pink-200 text-pink-500 hover:bg-pink-50">
                  Load More Articles
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Get the latest style tips, body type advice, and exclusive content delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button className="bg-pink-400 hover:bg-pink-500 text-white whitespace-nowrap">Subscribe</Button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-pink-400 to-pink-500 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Style?</h2>
              <p className="text-xl opacity-90 mb-8">
                Take our body type quiz and get personalized style recommendations tailored just for you.
              </p>
              <Link href="/quiz">
                <Button size="lg" className="bg-white text-pink-500 hover:bg-white/90">
                  Take the Quiz Now
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

