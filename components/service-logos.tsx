import Image from "next/image"

export default function ServiceLogos() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
      <div className="bg-white p-4 flex items-center justify-center">
        <Image src="/placeholder.svg?height=80&width=120" alt="Retro Car" width={120} height={80} />
      </div>
      <div className="bg-white p-4 flex items-center justify-center">
        <Image src="/placeholder.svg?height=80&width=120" alt="Car Repair" width={120} height={80} />
      </div>
      <div className="bg-white p-4 flex items-center justify-center">
        <Image src="/placeholder.svg?height=80&width=120" alt="Sports Cars" width={120} height={80} />
      </div>
      <div className="bg-white p-4 flex items-center justify-center">
        <Image src="/placeholder.svg?height=80&width=120" alt="Grand Prix Racing" width={120} height={80} />
      </div>
      <div className="bg-white p-4 flex items-center justify-center">
        <Image src="/placeholder.svg?height=80&width=120" alt="Car Repair" width={120} height={80} />
      </div>
      <div className="bg-white p-4 flex items-center justify-center">
        <Image src="/placeholder.svg?height=80&width=120" alt="Garage" width={120} height={80} />
      </div>
    </div>
  )
}

