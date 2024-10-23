import { BrandLogo } from "@/components/BrandLogo";
import Link from "next/link";

export function Navbar() {
  return <header className="w-full flex fixed top-0 z-10 bg-background/95 shadow-xl">
    <nav className="container flex items-center gap-10 font-semibold">
      <Link href="/" className="mr-auto">
        <BrandLogo />
      </ Link>
      <Link href="#" className="text-lg">Features</Link>
      <Link href="/#pricing" className="text-lg">Pricing</Link>
      <Link href="#" className="text-lg">About</Link>
      <span className="text-lg">

      </span>
    </nav>
  </header>
}