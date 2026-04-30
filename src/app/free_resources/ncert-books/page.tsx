"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import QuickLinks from "@/components/common/QuickLinks";
import OurBooks from "@/components/common/OurBooks";
import HoverCard from "@/components/common/HoverCard";

gsap.registerPlugin(ScrollTrigger);

const resourceCards = [
  {
    title: "NCERT Books",
    image: "/assets/free-resources/NCERT/NCERT-books_cleanup.png",
    href: "/free_resources/NCERT-page",
  },
  {
    title: "Study Material",
    image: "/assets/free-resources/NCERT/studymaterial_cleanup.png",
    href: "/free_resources/study-materials",
  },
  {
    title: "Previous Year Question Papers",
    image: "/assets/free-resources/NCERT/previous-paper_cleanup.png",
    href: "/free_resources/previous-year",
  },
  {
    title: "Free Mock Tests",
    image: "/assets/free-resources/NCERT/free-mocktest_cleanup.png",
    href: "/free_resources/free-mocktests",
  },
];

export default function NcertBooksPage() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (prefersReducedMotion) return;

      gsap.from(".animate-heading", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".animate-card", {
        y: 28,
        opacity: 0,
        stagger: 0.08,
        duration: 0.75,
        ease: "power3.out",
      });

      gsap.from(".animate-sidebar", {
        x: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    },
    { scope: containerRef, dependencies: [prefersReducedMotion] }
  );

  return (
    <>
      <Header />

      <main ref={containerRef} className="min-h-screen bg-[#F6F6F6]">
        {/* Banner */}
        <section className="relative h-[400px] w-full overflow-hidden">
          <Image
            src="/assets/free-resources/NCERT/free-resources.png"
            alt="Free Resources Banner"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#000000_15.33%,rgba(0,0,0,0.1)_50.97%)]" />
        </section>

        {/* Content */}
        <section className="bg-[url('/assets/image-91.png')] bg-[position:center_35%] bg-cover bg-no-repeat px-6 py-12 md:px-10 lg:px-14">
          {/* <section className="bg-[url('/assets/image-91.png')] bg-[position:center_bottom] bg-cover bg-no-repeat px-6 py-12 md:px-10 lg:px-14"> */}
          <div className="mx-auto max-w-[1600px]">
            <h1 className="animate-heading mb-10 text-[36px] font-extrabold uppercase leading-none md:text-[58px] lg:text-[56px]">
              <span className="bg-[linear-gradient(90deg,#459BE4_0%,#8D7DBA_45%,#E37B8A_100%)] bg-clip-text text-transparent">
                FREE RESOURCES
              </span>
            </h1>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_340px] items-start">
              {/* Left side */}
              <div>
                {/* Desktop: 2 x 2 grid */}
                <div className="hidden xl:grid xl:grid-cols-2 gap-5">
                  {resourceCards.map((card) => (
                    <HoverCard
                      key={card.title}
                      {...card}
                      className="h-[260px]"
                    />
                  ))}
                </div>

                {/* Mobile / tablet */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:hidden">
                  {resourceCards.map((card) => (
                    <HoverCard
                      key={card.title}
                      {...card}
                      className="h-[200px]"
                    />
                  ))}
                </div>
              </div>

              {/* Right side */}
              <aside className="animate-sidebar space-y-5 lg:pt-[2px] lg:ml-auto">
                <QuickLinks />
                <OurBooks />
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
