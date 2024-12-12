"use client";
// import Navbar from "./../components/Navbar";
// import TextMove from "@/components/TextMove";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import FAQ from "@/components/FQA";
import QuickPriceCheck from "@/components/QuickPriceCheck";
import OurSatisfiedClients from "@/components/OurSatisfiedClients";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <main className="">
          <HeroSection />
          <QuickPriceCheck />
          <OurSatisfiedClients />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
}
