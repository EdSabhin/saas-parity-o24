import { BrandLogo } from "@/components/BrandLogo";
import Link from "next/link";

export function Navbar() {
  return <header>
    <nav className="container flex items-center gap-10 font-semibold">
      <Link href="/" className="mr-auto">
        <BrandLogo />
      </ Link>
    </nav>
  </header>
}