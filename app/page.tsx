import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { House } from 'lucide-react';
import { PanelsTopLeft } from 'lucide-react';
import { Layers } from 'lucide-react';
import { SearchSlash } from 'lucide-react';
import { About } from "@/components/about";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";



const App = () => {
  return (
    <House />
  );
};

export { App };


export default function Home() {
  return (
    <main className="realtive bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {name: "Home", link: "/", icon: <House />},
          {name: "about", link: "#about", icon: <SearchSlash />},
          {name: "projects", link: "#projects", icon: <PanelsTopLeft />},
          {name: "techstack", link: "#techstack", icon: <Layers />},
        
        ]} />
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
