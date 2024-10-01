import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

import Service from "@/components/Service";
import Team from "@/components/Team";
import About from "@/components/About";
import Slider from "@/components/Slider";
import Contact from "@/components/Contact";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="min-h-screen p-2">
      <div className="max-w-screen-2xl mx-auto flex flex-col gap-4">
        <Header />
        <main className="flex flex-col gap-8 items-center sm:items-start">
          {/* Aquí puedes agregar el contenido principal */}
          <Hero/>
          <Slider/>
          <Services/>
          <Team />
          <About/>
          <Contact/>
        </main>
        <Footer />
      </div>
    </div>
  );
}
