import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import EconomyPackagesSection from "@/components/sections/EconomyPackagesSection";
import PackagesSection from "@/components/sections/PackagesSection";
import QueryFormSection from "@/components/sections/QueryFormSection";
import React from "react";

export default function Page() {
  return (
    <>
      <Navbar />
      <PackagesSection />
      <QueryFormSection />
      <EconomyPackagesSection />
      <Footer />
    </>
  );
}
