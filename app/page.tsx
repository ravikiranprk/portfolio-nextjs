import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="lg:w-4/5 md:w-5/6 w-11/12 mx-auto">
      <Hero />
      <hr />
      <Projects />
      <hr />
      <Skills />
      <hr />
      <About />
      <hr />
      <Experience />
      <hr />
      <Contact />
      <hr />
      <Footer />
    </main>
  );
}