import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { House } from "lucide-react";
import { PanelsTopLeft } from "lucide-react";
import { Layers } from "lucide-react";
import { SearchSlash } from "lucide-react";
import { About } from "@/components/about";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            {  link: "/", icon: <House /> },
            {  link: "#about", icon: <SearchSlash /> },
            {  link: "#projects", icon: <PanelsTopLeft /> },
            {  link: "#techstack", icon: <Layers /> },
          ]}
        />
        <Hero />
        <About />
        <Grid />
        <TechStack />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
