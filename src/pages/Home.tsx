import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Wallet, Smartphone, BarChart3 } from "lucide-react";
import FeatureCard from "@/components/ui/Featured";

export default function Home() {
  const homeimg = '/BlockFridge Home Screen.png';
  const cartimg = '/Cart Screen.png';
  const stock = '/Food Stock Overview.png';
  const redeem = '/Redeem Tokens.png';

  return (
    <div className="bg-center p-4 shadow-lg bg-gradient-to-b from-[black] to-[green] flex-grow">
      <main>
        <section className="text-primary-foreground py-20 bg-opacity-70">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<ShieldCheck className="h-12 w-12 text-primary" />}
                title="Protected Prepayments"
                phoneImage={cartimg}
                description="Funds held in blockchain escrow until goods are collected"
              />
              <FeatureCard
                icon={<Wallet className="h-12 w-12 text-primary" />}
                title="Tokenized Goods"
                phoneImage={homeimg}
                description="Purchase tokens tied to specific items for secure transactions"
              />
              <FeatureCard
                icon={<Smartphone className="h-12 w-12 text-primary" />}
                title="Easy to Use"
                phoneImage={redeem}
                description="Simple code entry for authorizing payments"
              />
              <FeatureCard
                icon={<BarChart3 className="h-12 w-12 text-primary" />}
                title="Budget Control"
                phoneImage={stock}
                description="Prevent debt cycles with structured prepayment mechanisms"
              />
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-16 bg-muted bg-center p-4 shadow-lg bg-gradient-to-b from-[black] to-[red] flex-grow">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[white]">How It Works</h2>
            <ol className="list-decimal list-inside space-y-4 text-lg max-w-2xl mx-auto text-[white]">
              <li>Prepay for goods using the BlockFridge app</li>
              <li>Visit a BlockFridge partnered retailer</li>
              <li>Select your goods and enter the retailer code</li>
              <li>Collect your items to release the funds securely</li>
              <li>Enjoy peace of mind knowing your prepayments are protected</li>
            </ol>
          </div>
        </section>

        <section id="why-blockfridge" className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Why BlockFridge</h2>
            <p className="text-xl mb-8">Have you ever planned a budget then found that you did not stick to it? Now you find yourself in a spiral of debt. BlockFridge can solve this for you by letting you budget with actions, not words. Secure your funds and ensure your spending stays on track with the power of blockchain technology.</p>
          </div>
        </section>

        <section id="download" className="py-16 bg-center p-4 shadow-lg bg-gradient-to-b from-[black] to-[green] flex-grow">
          <div className="container mx-auto px-4 text-center text-[white]">
            <h2 className="text-3xl font-bold mb-8 text-[white]">Join the BlockFridge Waitlist</h2>
            <p className="text-xl mb-8">Be the first to experience BlockFridge. Sign up for early access.</p>
            <Button size="lg" className="mb-4">
              <Link
                href="https://forms.gle/Uu26TqdyUPVyuhDR6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join the Waitlist
              </Link>
            </Button>
            <p className="text-sm text-[white]">Coming soon to major platforms</p>
          </div>
        </section>
      </main>
    </div>
  );
}
