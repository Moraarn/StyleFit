import { ClipboardList, Search, ShoppingBag } from "lucide-react"

interface FeatureCardProps {
  number: string
  title: string
  description: string
  icon: string
}

export default function FeatureCard({ number, title, description, icon }: FeatureCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "clipboard-list":
        return <ClipboardList className="h-6 w-6" />
      case "search":
        return <Search className="h-6 w-6" />
      case "tshirt":
        return <ShoppingBag className="h-6 w-6" />
      default:
        return <ClipboardList className="h-6 w-6" />
    }
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-pink-100 dark:border-gray-700">
      <div className="flex items-center mb-4">
        <div className="bg-pink-50 dark:bg-gray-800 text-pink-400 dark:text-pink-300 h-10 w-10 rounded-full flex items-center justify-center mr-4">
          {getIcon()}
        </div>
        <div className="bg-pink-400 text-white h-8 w-8 rounded-full flex items-center justify-center font-bold">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  )
}

