import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Works from "@/components/Works";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-screen-1xl mx-auto flex flex-col gap-2">
        <Header />
        <main className="flex flex-col gap-2 items-center sm:items-start">
          {/* Aquí puedes agregar el contenido principal */}
          <Hero/>
          {/*<Slider/>*/}
          <Works/>
          <Services/>
          <About/>
          <Contact/>
        </main>
        <Footer />
      </div>
    </div>
  );
}
