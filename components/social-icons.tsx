import Link from "next/link"
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react"

export default function SocialIcons() {
  return (
    <>
      <Link href="#" className="bg-gray-900 text-white p-2 rounded-sm hover:bg-red-600 transition-colors">
        <Twitter className="h-4 w-4" />
      </Link>
      <Link href="#" className="bg-gray-900 text-white p-2 rounded-sm hover:bg-red-600 transition-colors">
        <Facebook className="h-4 w-4" />
      </Link>
      <Link href="#" className="bg-gray-900 text-white p-2 rounded-sm hover:bg-red-600 transition-colors">
        <Instagram className="h-4 w-4" />
      </Link>
      <Link href="#" className="bg-gray-900 text-white p-2 rounded-sm hover:bg-red-600 transition-colors">
        <Linkedin className="h-4 w-4" />
      </Link>
    </>
  )
}

