
import Headers from "../components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import MomsFeature from "@/components/MomsFeature";

export default function Home() {
  return (
    <div className="">
       <Headers />
       <main>
        <Hero />
        <MomsFeature/>
       <AboutSection />
        </main>
        <Footer />
    </div>
  );
}
