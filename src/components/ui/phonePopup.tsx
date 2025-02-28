"use client"

import Image from "next/image"

interface AndroidPhoneCardProps {
  imageUrl: string
  altText: string
  show: boolean
}

export default function AndroidPhoneCard({ imageUrl, altText, show }: AndroidPhoneCardProps) {
  return (
    <div
      className={`w-64 h-[500px] bg-gray-800 rounded-3xl p-3 shadow-lg absolute -right-32 -top-80 z-10 transition-all duration-300 ease-in-out ${
        show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20 pointer-events-none"
      }`}
    >
      <div className="relative w-full h-full bg-gray-200 rounded-2xl overflow-hidden">
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full z-20"></div>
        <Image
          src={imageUrl || "/placeholder.svg?height=500&width=300"}
          alt={altText}
          fill
          className="rounded-2xl object-cover"
        />
      </div>
    </div>
  )
}

