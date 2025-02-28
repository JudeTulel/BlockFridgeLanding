import Image from "next/image"
import Link from "next/link"
import { JSX } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck, Wallet, Smartphone, BarChart3 } from "lucide-react"
import BlockFridge from "../../public/BlockFridge.png"
import FeatureCard from "@/components/ui/Featured"
export default function Home() {
  return (
    <div className="bg-center p-4 shadow-lg h-screen bg-gradient-to-b from-[black] to-[green]">      

      <main className="flex-grow">
        <section className=" text-primary-foreground py-20 bg-opacity-70">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Secure Your Prepayments with BlockFridge</h1>
            <p className="text-xl mb-8">Revolutionize your shopping experience with blockchain-powered smart fridges</p>
            <Button size="lg" asChild>
              <Link href="#download">Get Started</Link>
            </Button>
          </div>
        </section>

        <section id="features" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" >
              <FeatureCard
                icon={<ShieldCheck className="h-12 w-12 text-primary" />}
                title="Protected Prepayments"
                description="Funds held in blockchain escrow until goods are collected"
              />
              <FeatureCard
                icon={<Wallet className="h-12 w-12 text-primary" />}
                title="Tokenized Goods"
                description="Purchase tokens tied to specific items for secure transactions"
              />
              <FeatureCard
                icon={<Smartphone className="h-12 w-12 text-primary" />}
                title="Easy to Use"
                description="Simple code entry for authorizing payments"
              />
              <FeatureCard
                icon={<BarChart3 className="h-12 w-12 text-primary" />}
                title="Budget Control"
                description="Prevent debt cycles with structured prepayment mechanisms"
              />
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <ol className="list-decimal list-inside space-y-4 text-lg max-w-2xl mx-auto">
              <li>Prepay for goods using the BlockFridge app</li>
              <li>Visit a BlockFridge-partnered retailer</li>
              <li>Select your goods and enter the retaile's  code</li>
              <li>Collect your items to release the funds securely</li>
              <li>Enjoy peace of mind knowing your prepayments are protected</li>
            </ol>
          </div>
        </section>

        <section id="download" className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Download BlockFridge Now</h2>
            <p className="text-xl mb-8">Get started with BlockFridge and take control of your prepayments</p>
            <Button size="lg" className="mb-4">
              <Link
                href="https://play.google.com/store/apps/details?id=com.blockfridge"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get it on Google Play
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground">Coming soon to the App Store</p>
          </div>
        </section>
      </main>

      
    </div>
  )
}

