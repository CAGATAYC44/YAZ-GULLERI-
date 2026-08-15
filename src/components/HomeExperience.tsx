"use client";

import { useState } from "react";
import { heroVideos } from "@/data/content";
import VideoBackground from "./VideoBackground";
import Navbar from "./Navbar";
import Hero from "./Hero";
import BookShowcase from "./BookShowcase";
import About from "./About";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";

export default function HomeExperience() {
  const [activeId, setActiveId] = useState(heroVideos[0].id);

  return (
    <main className="relative w-full bg-dark">
      <Navbar />
      <section className="relative h-screen w-full overflow-hidden">
        <VideoBackground videos={heroVideos} activeId={activeId} />
        <Hero activeId={activeId} onSelect={setActiveId} />
      </section>
      <BookShowcase />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
