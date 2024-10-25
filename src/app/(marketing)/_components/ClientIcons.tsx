import Link from "next/link";
import { NeonIcon } from "../_icons/Neon";
import { ClerkIcon } from "../_icons/Clerk";

function ClientIcons() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-16">
        <Link href="https://neon.tech">
          <NeonIcon />
          </Link>
          <Link href="https://clerk.com">
            <ClerkIcon />
          </Link>
          <Link href="https://neon.tech">
            <NeonIcon />
          </Link>
          <Link href="https://clerk.com">
            <ClerkIcon />
          </Link>
          <Link href="https://neon.tech">
            <NeonIcon />
          </Link>
          <Link href="https://clerk.com">
            <ClerkIcon />
          </Link>
          <Link href="https://neon.tech">
            <NeonIcon />
          </Link>
          <Link href="https://clerk.com">
            <ClerkIcon />
          </Link>
          <Link href="https://neon.tech">
            <NeonIcon />
          </Link>
          <Link href="https://clerk.com" className="md:max-xl:hidden">
            <ClerkIcon />
          </Link>
    </div>
  )
}

export default ClientIcons
