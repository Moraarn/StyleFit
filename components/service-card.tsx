import Image from "next/image"

interface ServiceCardProps {
  icon: string
  title: string
}

export default function ServiceCard({ icon, title }: ServiceCardProps) {
  return (
    <div className="border border-gray-200 p-8 hover:shadow-lg transition-shadow">
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <Image src={icon || "/placeholder.svg"} alt={title} width={60} height={60} />
        </div>
        <h3 className="text-xl font-semibold text-red-600 mb-4">{title}</h3>
        <p className="text-gray-600 text-sm text-center">
          Cunsultur sit arcu sce ce vensmafis faouset. Ut lnbioftis, lencis et slitjces, ligula aqte beneirent velit
        </p>
      </div>
    </div>
  )
}

