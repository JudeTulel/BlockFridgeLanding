import Image from "next/image"
import Link from "next/link"
import { JSX } from "react"
import BlockFridge from "../../../public/BlockFridge.webp"
const Header = ():JSX.Element => {
  return (
    <div>
        <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image src={BlockFridge} alt="BlockFridge Logo" className=" w-11 h-11 object-fill"/>
            <span className="text-2xl font-bold">BlockFridge</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="#features" className="hover:underline">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:underline">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#download" className="hover:underline">
                  Download
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header