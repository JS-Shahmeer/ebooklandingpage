import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import FeaturedProjects from "./components/FeaturedProjects";
import { ClientTestimonials } from "./components/ClientTestimonials";
import AmazonPublishingServices from "./components/AmazonPublishingServices";
import PublishSection from "./components/PublishSection";
import CTATwo from "./components/CTATwo";
import WhyChooseUs from "./components/WhyChooseUs";
import OurSteps from "./components/OurSteps";
import TopServices from "./components/TopServices";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeaturedProjects />
      <ClientTestimonials />
      <AmazonPublishingServices />
      <PublishSection />
      <TopServices />
      <CTATwo />
      <WhyChooseUs />
      <OurSteps />
      <GetStarted />
      <Footer />
    </main>
  );
}
