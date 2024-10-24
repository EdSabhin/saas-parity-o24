import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { ArrowRightIcon, CheckIcon } from "lucide-react";
import Link from "next/link";
import { NeonIcon } from "./_icons/Neon";
import { ClerkIcon } from "./_icons/Clerk";
import { subscriptionTiersInOrder } from "@/data/subscriptionTiers";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCompactNumber } from "@/lib/formatters";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return <>
    <section className="min-h-screen bg-[radial-gradient(hsl(0,72%,65%,40%),hsl(24,62%,73%,40%),hsl(var(--background))_60%)] flex flex-col items-center justify-center gap-8 px-4 text-center text-balance">
      <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight m-4">Price Smarter, Sell Bigger!</h1>
      <p className="text-lg lg:text-3xl max-w-screen-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, delectus eaque repellendus nobis quidem adipisci eum pariatur nisi eligendi maxime, doloribus quod neque velit, aspernatur officia soluta quasi eveniet minima?</p>
      <SignUpButton>
        <Button className="flex gap-2 p-6 text-lg rounded-xl">
          Get started for free <ArrowRightIcon className="size-5" />
        </Button>
      </SignUpButton>
    </section>
    <section className="bg-primary text-primary-foreground">
      <div className="container flex flex-col gap-16 py-16 px-8 md:px-16 ">
        <h2 className="text-3xl text-center text-balance">Trusted by the top modern companies</h2>
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
      </div>
    </section>
    <section id="pricing" className="py-16 px-8 bg-accent/5">
      <h2 className="text-4xl text-center text-balance font-semibold mb-8">Pricing Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-lg mx-auto">
        {subscriptionTiersInOrder.map(tier => (
            <PricingCard key={tier.name} {...tier} />
        ))}
      </div>
    </section>
  </>;
}

function PricingCard({ name, priceInCents, maxNumberOfVisits, maxNumberOfProducts, canRemoveBranding, canAccessAnalytics, canCustomizeBanner, }: typeof subscriptionTiersInOrder[number]) {
  const isMostPopular = name === "Standard";
  return (
    <Card>
    <CardHeader>
      <h3 className="text-accent font-semibold mb-8">{name}</h3>
      <CardTitle className="text-xl font-bold">
        ${priceInCents / 100} /mo
      </CardTitle>
      <CardDescription>{formatCompactNumber(maxNumberOfVisits)} pricing page visits/mo</CardDescription>
    </CardHeader>
    <CardContent>
      <SignUpButton>
        <Button className="w-full text-lg rounded-lg" variant={isMostPopular ? "accent" : "default"}>Get Started</Button>
      </SignUpButton>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4 ">
        <Feature className="font-bold">{maxNumberOfProducts} {maxNumberOfProducts === 1 ? "Product" : "Products"}</Feature>
        <Feature>Cool Feat!</Feature>
           {canAccessAnalytics && <Feature>Advanced Analytics</Feature>}
        {canCustomizeBanner && <Feature>Banner Customization</Feature>}
        {canRemoveBranding && <Feature>Easy Branding Removal</Feature>}
     
        
      </CardFooter>
  </Card>
  )
}

function Feature({ children, className}: {children: ReactNode, className?:string}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
    <CheckIcon className="size-4 stroke-accent bg-accent/25 rounded-full p-0.5" />
    <span>{children}</span>
  </div>)
  
}