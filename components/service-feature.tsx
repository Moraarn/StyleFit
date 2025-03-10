import Image from "next/image"

interface ServiceFeatureProps {
  icon: string
  title: string
  description: string
}

export default function ServiceFeature({ icon, title, description }: ServiceFeatureProps) {
  return (
    <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
      <div className="flex flex-col items-center">
        <div className="mb-4 text-red-600">
          <Image src={icon || "/placeholder.svg"} alt={title} width={60} height={60} />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  )
}

