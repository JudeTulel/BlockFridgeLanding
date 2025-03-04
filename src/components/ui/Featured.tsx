"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import AndroidPhoneCard from "./phonePopup"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  phoneImage: string
}

export default function FeatureCard({
  icon,
  title,
  description,
  phoneImage
}: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary">
        <CardHeader className="pb-2">
          <div className="mb-2">{icon}</div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
        </CardContent>
      </Card>

      <AndroidPhoneCard imageUrl={phoneImage} altText={`${title} feature on mobile`} show={isHovered} />
    </div>
  )
}

