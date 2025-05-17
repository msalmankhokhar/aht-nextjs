import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Queryform from "@/components/Queryform";
import EconomyPackagesSection from "@/components/sections/EconomyPackagesSection";
import React from "react";

export default function Page() {
  return (
    <>
      <Navbar />
      <EconomyPackagesSection />
      <section className="w-full flex items-center flex-col">
        <Queryform />
      </section>
      <Footer />
    </>
  );
}
