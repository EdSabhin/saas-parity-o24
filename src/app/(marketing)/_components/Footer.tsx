import { BrandLogo } from "@/components/BrandLogo"
import Link from "next/link"

function FooterLinkGroup({ title, links }: { title: string, links:{label:string, href:string}[]
}) {
  return (
    <div className="flex flex-col gap-4">
    <h3 className="font-semibold">{title}</h3>
    <ul className="flex flex-col gap-2 text-sm">
      {links.map(link => (
        <li key={link.href}>
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  </div>
  ) 
}

function Footer () {
  return (
    <footer className="container flex flex-col sm:flex-row justify-between items-start gap-8 sm:gap-4 pt-16 pb-8">
      <Link href="/">
        <BrandLogo />
      </Link>
      <div className="flex flex-col sm:flex-row gap-8">
        <div className="flex flex-col gap-8">
          <FooterLinkGroup
            title="Help"
            links={[
               { label: "PPP Discounts", href: "#" },
               { label: "Discount API", href: "#" },
             ]}
          />
          <FooterLinkGroup
            title="Solutions"
            links={[
              { label: "Newsletter", href: "#" },
              { label: "SaaS Business", href: "#" },
              { label: "Online Courses", href: "#" },
              ]}
            />
          </div>
        <div className="flex flex-col gap-8">
          <FooterLinkGroup
            title="Features"
            links={[{ label: "PPP Discounts", href: "#" }]}
            />
         <FooterLinkGroup
            title="Tools"
            links={[
                { label: "Salary Converter", href: "#" },
                { label: "Coupon Generator", href: "#" },
                { label: "Stripe App", href: "#" },
              ]}
            />
          <FooterLinkGroup
            title="Company"
            links={[
                { label: "Affiliate", href: "#" },
                { label: "Twitter", href: "#" },
                { label: "Terms of Service", href: "#" },
              ]}
            />
          </div>
        <div className="flex flex-col gap-8">
          <FooterLinkGroup
            title="Integrations"
            links={[
                { label: "Lemon Squeezy", href: "#" },
                { label: "Gumroad", href: "#" },
                { label: "Stripe", href: "#" },
                { label: "Chargebee", href: "#" },
                { label: "Paddle", href: "#" },
              ]}
            />
            <FooterLinkGroup
              title="Tutorials"
              links={[
                { label: "Any Website", href: "#" },
                { label: "Lemon Squeezy", href: "#" },
                { label: "Gumroad", href: "#" },
                { label: "Stripe", href: "#" },
                { label: "Chargebee", href: "#" },
                { label: "Paddle", href: "#" },
             ]}
            />
        </div>
      </div>
    </footer>
  )
}

export default Footer