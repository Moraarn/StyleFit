import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface BodyTypeCardProps {
  type: string
  description: string
  imageSrc: string
}

export default function BodyTypeCard({ type, description, imageSrc }: BodyTypeCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-pink-100 dark:border-gray-700">
      <div className="relative h-[300px]">
        <Image src={imageSrc || "/placeholder.svg"} alt={`${type} body type`} fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{type}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <Link
          href={`/body-types/${type.toLowerCase()}`}
          className="text-pink-500 dark:text-pink-300 font-medium hover:text-pink-600 dark:hover:text-pink-200 flex items-center"
        >
          Learn more <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

