import { Check } from "lucide-react"

export default function WhyChooseUs() {
  return (
    <div className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-red-600 text-white p-8 max-w-md">
      <h2 className="text-2xl font-bold mb-4">Why we are best?</h2>
      <p className="mb-6 text-sm">
        Lorem ipsum dolor sit amet, consecte rbtur adipiscing elit, sed do einsmopd tempor incididntao consec tetur
        adipiscing elit.Lorem ipsum dolor sit amet.
      </p>

      <div className="grid grid-cols-2 gap-x-8 gap-y-2">
        <div className="flex items-center">
          <Check className="h-4 w-4 mr-2" />
          <span className="text-sm">Wiper Blade Installation</span>
        </div>
        <div className="flex items-center">
          <Check className="h-4 w-4 mr-2" />
          <span className="text-sm">Wiper Blade Installation</span>
        </div>
        <div className="flex items-center">
          <Check className="h-4 w-4 mr-2" />
          <span className="text-sm">Check Engine Light</span>
        </div>
        <div className="flex items-center">
          <Check className="h-4 w-4 mr-2" />
          <span className="text-sm">Check Engine Light</span>
        </div>
        <div className="flex items-center">
          <Check className="h-4 w-4 mr-2" />
          <span className="text-sm">Air Filter Replacement</span>
        </div>
        <div className="flex items-center">
          <Check className="h-4 w-4 mr-2" />
          <span className="text-sm">Air Filter Replacement</span>
        </div>
        <div className="flex items-center">
          <Check className="h-4 w-4 mr-2" />
          <span className="text-sm">Starting and Charging</span>
        </div>
        <div className="flex items-center">
          <Check className="h-4 w-4 mr-2" />
          <span className="text-sm">Starting and Charging</span>
        </div>
        <div className="flex items-center">
          <Check className="h-4 w-4 mr-2" />
          <span className="text-sm">Engine Flush Service</span>
        </div>
        <div className="flex items-center">
          <Check className="h-4 w-4 mr-2" />
          <span className="text-sm">Engine Flush Service</span>
        </div>
        <div className="flex items-center">
          <Check className="h-4 w-4 mr-2" />
          <span className="text-sm">Transmission Fluid Service</span>
        </div>
        <div className="flex items-center">
          <Check className="h-4 w-4 mr-2" />
          <span className="text-sm">Transmission Fluid Service</span>
        </div>
      </div>
    </div>
  )
}

