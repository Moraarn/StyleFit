import Image from "next/image"

interface TestimonialCardProps {
  quote: string
  name: string
  bodyType: string
  imageSrc: string
}

export default function TestimonialCard({ quote, name, bodyType, imageSrc }: TestimonialCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-pink-100 dark:border-gray-700">
      <div className="flex items-center mb-4">
        <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
          <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">{name}</h3>
          <p className="text-sm text-pink-500 dark:text-pink-300">{bodyType} Body Type</p>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 italic">"{quote}"</p>
    </div>
  )
}

