"use client";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import About from "@/components/About";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";

function Home() {
  useEffect(() => {
    AOS.init({
      delay: 10,
      duration: 2000,
    });
  }, []);
  return (
    <main>
      <Header />
      <section className="l-main">
        <CTA />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </section>
      <Footer />
    </main>
  )
}

export default Home;