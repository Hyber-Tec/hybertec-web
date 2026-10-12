import { Contact } from "@/components/sections/contact";
import { Engagement } from "@/components/sections/engagement";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Shipped } from "@/components/sections/shipped";
import { Stack } from "@/components/sections/stack";
import { Studio } from "@/components/sections/studio";
import { Work } from "@/components/sections/work";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Shipped />
      <Work />
      <Services />
      <Studio />
      <Process />
      <Engagement />
      <Stack />
      <Faq />
      <Contact index="08" />
    </>
  );
}
