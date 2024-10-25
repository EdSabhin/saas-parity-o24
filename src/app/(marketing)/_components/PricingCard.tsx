import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { subscriptionTiersInOrder } from "@/data/subscriptionTiers";
import { formatCompactNumber } from "@/lib/formatters";
import { cn } from "@/lib/utils";
import { SignUpButton } from "@clerk/nextjs";
import { CheckIcon } from "lucide-react";
import { ReactNode } from "react";


function Feature({ children, className}: {children: ReactNode, className?:string}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
    <CheckIcon className="size-4 stroke-accent bg-accent/25 rounded-full p-0.5" />
    <span>{children}</span>
  </div>)
}

function PricingCard({ name, priceInCents, maxNumberOfVisits, maxNumberOfProducts, canRemoveBranding, canAccessAnalytics, canCustomizeBanner, }: typeof subscriptionTiersInOrder[number]) {
  const isMostPopular = name === "Standard";
  return (
    <Card className="pb-2">
    <CardHeader>
      <h3 className="text-accent font-semibold mb-6">{name}</h3>
      <CardTitle className="text-xl font-bold">
          ${priceInCents / 100} /mo
        </CardTitle>
        <CardDescription>
          {formatCompactNumber(maxNumberOfVisits)} pricing page visits/mo
        </CardDescription>
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

export default PricingCard