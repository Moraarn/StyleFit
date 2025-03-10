import Image from "next/image"

interface ClothingRecommendationProps {
  title: string
  recommendations: string[]
  imageSrc: string
}

export default function ClothingRecommendation({ title, recommendations, imageSrc }: ClothingRecommendationProps) {
  return (
    <div className="flex items-start">
      <div className="relative h-[100px] w-[100px] rounded-lg overflow-hidden mr-4 flex-shrink-0">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <ul className="space-y-1">
          {recommendations.map((item, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0 h-4 w-4 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center mr-2 mt-1 text-[10px]">
                ✓
              </div>
              <span className="text-sm text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

