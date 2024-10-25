import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { ArrowRightIcon} from "lucide-react";
import { subscriptionTiersInOrder } from "@/data/subscriptionTiers";

import ClientIcons  from "./_components/ClientIcons";
import Footer from "./_components/Footer";
import PricingCard from "./_components/PricingCard";

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
        <ClientIcons />
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
    <Footer />
  </>;
}


