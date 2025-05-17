import Image from "next/image";
import React from "react";

export default function MonthHeroSection() {
  return (
    <section className="flex flex-col my-10 items-center justify-center">
      <h2 className="px-5 text-4xl max-w-2xl font-bold text-center mb-16 text-brand-secondary">
        Umrah Packages For December 2025 with Al{" "}
        <span className="border-brand-primary border-b-4">Habib Travel</span>
      </h2>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-baseline">
        <Image
          alt="logo"
          src={`/images/month-hero/first.png`}
          width={280}
          height={280}
          className="rounded-3xl h-72"
        />
        <Image
          alt="logo"
          src={`/images/month-hero/second.png`}
          width={280}
          height={280}
          className="rounded-3xl h-80 md:72"
        />
        <Image
          alt="logo"
          src={`/images/month-hero/third.png`}
          width={280}
          height={280}
          className="rounded-3xl h-72"
        />
      </div>
    </section>
  );
}
