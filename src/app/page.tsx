import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

import Service from "@/components/Service";
import Team from "@/components/Team";

export default function Home() {
  return (
    <div className="min-h-screen p-2">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <Header />
        <main className="flex flex-col gap-8 items-center sm:items-start">
          {/* Aquí puedes agregar el contenido principal */}
          <Hero/>
          <Service/>
          <Team />
        </main>
        <Footer />
      </div>
    </div>
  );
}
