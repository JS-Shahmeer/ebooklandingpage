"use client";

import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
// import FeaturedProjects from "./components/FeaturedProjects";
import FeaturedProjectsSlider from "./components/FeaturedProjectsSlider";
import { ClientTestimonials } from "./components/ClientTestimonials";
import AmazonPublishingServices from "./components/AmazonPublishingServices";
import PublishSection from "./components/PublishSection";
import CTATwo from "./components/CTATwo";
import CTAThree from "./components/CTAThree";
import WhyChooseUs from "./components/WhyChooseUs";
import OurSteps from "./components/OurSteps";
import TopServices from "./components/TopServices";
import GetStarted from "./components/GetStarted";
import ContactModal from "./components/ContactModal";
import Footer from "./components/Footer";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <Header onQuoteClick={() => setIsModalOpen(true)} />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={(e) => e.preventDefault()} />
      <Hero onPublishClick={() => setIsModalOpen(true)} />
      <FeaturedProjectsSlider />
      <ClientTestimonials />
      <AmazonPublishingServices />
      <PublishSection onPublishClick={() => setIsModalOpen(true)} />
      <TopServices />
      <CTATwo onPublishClick={() => setIsModalOpen(true)} />
      <CTAThree onPublishClick={() => setIsModalOpen(true)} />
      <WhyChooseUs />
      <OurSteps onOpenModal={() => setIsModalOpen(true)} />
      <GetStarted />
      <Footer />
    </main>
  );
}
