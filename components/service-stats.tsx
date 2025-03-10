interface ServiceStatsProps {
  number: string
  title: string
  description: string
}

export default function ServiceStats({ number, title, description }: ServiceStatsProps) {
  return (
    <div className="flex items-start">
      <div className="mr-4 bg-red-600 text-white rounded-full h-16 w-16 flex items-center justify-center font-bold">
        {number}
      </div>
      <div>
        <h3 className="font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}

