"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Courses from "@/components/common/Courses";
import CustomDropdown from "@/components/common/CustomDropdown";
import FloatingActions from "@/components/common/FloatingActions";

gsap.registerPlugin(ScrollTrigger);

const subjectOptions = ["History", "Polity", "Geography", "Economy", "Science"];
const classOptions = ["6", "7", "8", "9", "10", "11", "12"];

const historyBooks = [
  { id: 1, title: "History - NCERT Book", viewLink: "#", downloadLink: "#" },
  { id: 2, title: "History - NCERT Book", viewLink: "#", downloadLink: "#" },
  { id: 3, title: "History - NCERT Book", viewLink: "#", downloadLink: "#" },
  { id: 4, title: "History - NCERT Book", viewLink: "#", downloadLink: "#" },
  { id: 5, title: "History - NCERT Book", viewLink: "#", downloadLink: "#" },
];

export default function NcertBooksPage() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(() => {
    if (prefersReducedMotion) return;

    gsap.fromTo(".animate-heading",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".animate-heading", start: "top 85%" } }
    );

    gsap.fromTo(".animate-tabs",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2, scrollTrigger: { trigger: ".animate-tabs", start: "top 85%" } }
    );

    gsap.fromTo(".animate-card",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".animate-cards-container", start: "top 85%" } }
    );

    gsap.fromTo(".animate-sidebar",
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".animate-sidebar", start: "top 85%" } }
    );
  }, { scope: containerRef, dependencies: [prefersReducedMotion] });

  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    setShowResults(true);
  };

  return (
    <>
      <Header />

      <main ref={containerRef} className="min-h-screen bg-[#f7f7f7] font-['Montserrat',sans-serif]">
        {/* Banner */}
        <section className="relative h-[300px] w-full overflow-hidden md:h-[380px] lg:h-[400px]">
          <Image
            src="/assets/free-resources/NCERT-BOOKS/NCERT-book.png"
            alt="NCERT Books Banner"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#000000_15.33%,rgba(0,0,0,0.1)_50.97%)]" />
        </section>

        {/* Content */}
        <section className="relative overflow-hidden bg-[#f7f7f7] px-5 py-12 md:px-8 lg:px-12 xl:px-16">
          <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[url('/assets/free-resources/free-resource-bg-1.png')] bg-cover bg-center bg-no-repeat opacity-50">
            {/* <div className="absolute left-[-160px] top-[20px] h-[480px] w-[480px] rounded-full bg-[#edf4fb] blur-3xl" />
          <div className="absolute bottom-[-140px] left-[10%] h-[420px] w-[520px] rotate-[-18deg] rounded-[45%] border border-[#dfeaf5] bg-[#f9fcff]" />
          <div className="absolute bottom-[-120px] left-[25%] h-[360px] w-[420px] rotate-[18deg] rounded-[45%] border border-[#e5eef8] bg-[#fbfdff]" /> */}
          </div>

          <div className="relative mx-auto max-w-[1500px]">
            <div className="grid grid-cols-1 gap-10 xl:grid-cols-[minmax(0,1fr)_320px]">
              {/* Left side */}
              <div>
                {/* Heading (Moved here to center relative to dropdowns) */}
                <h1 className="animate-heading mb-10 text-center text-[36px] font-extrabold uppercase leading-none md:text-[48px] lg:text-[56px]">
                  <span className="bg-[linear-gradient(90deg,#D57E89_0%,#9A8FB6_42%,#3E9CDB_100%)] bg-clip-text text-transparent">
                    NCERT BOOKS
                  </span>
                </h1>

                {/* Search controls */}
                <div className="animate-tabs relative z-[60] mb-12">
                  <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                    <CustomDropdown
                      options={subjectOptions}
                      value={selectedSubject}
                      onChange={setSelectedSubject}
                      placeholder="Subject"
                    />

                    <CustomDropdown
                      options={classOptions}
                      value={selectedClass}
                      onChange={setSelectedClass}
                      placeholder="Class"
                    />
                  </div>

                  <div className="mt-12 flex justify-center">
                    <button
                      onClick={handleSearch}
                      className="rounded-full bg-[linear-gradient(90deg,#167fbd_0%,#03283b_100%)] px-14 py-3 text-[18px] font-bold text-white shadow-[0_8px_20px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-[1.03]"
                    >
                      Search
                    </button>
                  </div>
                </div>

                {/* Results */}
                {showResults && (
                  // <div className="animate-cards-container grid grid-cols-1 gap-5 md:grid-cols-2">
                  //   {historyBooks.map((book) => (
                  //     <div
                  //       key={book.id}
                  //       className="animate-card group rounded-[18px] bg-[#FAF8F3] px-8 py-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 
                  //       /* PIN THE CORNER */
                  //       origin-bottom-left 
                  //       /* EXPAND UP AND RIGHT */
                  //       hover:-translate-y-2 hover:scale-[1.02] 
                  //       hover:bg-[#FEF2E5] hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
                  //     >
                  //       <h3 className="mb-6 text-center text-[20px] font-extrabold text-[#111] md:text-[21px]">
                  //         {book.title}
                  //       </h3>

                  //       <div className="flex items-center justify-center gap-3">
                  //         <Link
                  //           href={book.viewLink}
                  //           className="inline-flex min-w-[88px] items-center justify-center rounded-[10px] border border-[#58b7ea] bg-white px-5 py-2.5 text-[16px] font-bold text-[#2a9cda] transition-all duration-300 hover:bg-[linear-gradient(90deg,#2aa7df_0%,#03283b_100%)] hover:text-white"
                  //         >
                  //           View
                  //         </Link>

                  //         <Link
                  //           href={book.downloadLink}
                  //           className="inline-flex min-w-[160px] items-center justify-center rounded-[10px] border border-[#58b7ea] bg-white px-5 py-2.5 text-[16px] font-bold text-[#2a9cda] transition-all duration-300 hover:bg-[linear-gradient(90deg,#2aa7df_0%,#03283b_100%)] hover:text-white"
                  //         >
                  //           Download PDF
                  //         </Link>
                  //       </div>
                  //     </div>
                  //   ))}
                  // </div>

                  <div className="animate-cards-container grid grid-cols-1 gap-5 md:grid-cols-2">
                    {historyBooks.map((book) => (
                      <div
                        key={book.id}
                        className="animate-card group rounded-[18px] bg-[#FAF8F3] px-4 py-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 
                        /* PIN THE CORNER */
                        origin-bottom-left 
                        /* EXPAND UP AND RIGHT */
                        hover:-translate-y-2 hover:scale-[1.02] 
                        hover:bg-[#FEF2E5] hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
                      >
                        {/* Updated Typography to match Figma: Bold 700, 18px, 100% line-height */}
                        <h3 className="mb-6 text-center font-bold text-[#000000] text-[18px] leading-[100%]">
                          {book.title}
                        </h3>

                        <div className="flex items-center justify-center gap-3">
                          <Link
                            href={book.viewLink}
                            className="inline-flex min-w-[88px] items-center justify-center rounded-[10px] border border-[#58b7ea] bg-white px-5 py-2.5 text-[16px] font-bold text-[#2a9cda] transition-all duration-300 hover:bg-[linear-gradient(90deg,#2aa7df_0%,#03283b_100%)] hover:text-white"
                          >
                            View
                          </Link>

                          <Link
                            href={book.downloadLink}
                            className="inline-flex min-w-[160px] items-center justify-center rounded-[10px] border border-[#58b7ea] bg-white px-5 py-2.5 text-[16px] font-bold text-[#2a9cda] transition-all duration-300 hover:bg-[linear-gradient(90deg,#2aa7df_0%,#03283b_100%)] hover:text-white"
                          >
                            Download PDF
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right side - added xl:mt-[110px] to align with dropdowns */}
              <aside className="animate-sidebar space-y-8 xl:ml-auto w-full max-w-[330px] mx-auto xl:mt-[110px]">
                {/* Courses */}

                <Courses />

                {/* Our Toppers */}
                <div className="rounded-[22px] bg-[#dfe9f8] px-4 py-8 shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
                  <h2 className="mb-6 text-center text-[34px] font-extrabold leading-none">
                    <span className="bg-[linear-gradient(90deg,#4D90D2_0%,#B57B95_100%)] bg-clip-text text-transparent">
                      Our Toppers
                    </span>
                  </h2>

                  <div className="flex flex-col items-center">
                    <div className="our-toppers-card flex min-w-[240px] shrink-0 flex-col items-center">
                      {/* Photo frame */}
                      <div className="relative mb-6 flex h-[180px] w-[220px] items-center justify-center transition-transform duration-300 hover:scale-105">
                        <svg
                          viewBox="-20 -20 240 240"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-full w-full drop-shadow-xl"
                        >
                          <defs>
                            <clipPath id="blobClip-main">
                              <path d="M 100 0 C 120 0 125 25 143.3 35 C 161.6 45 186.6 40 195 58.3 C 203.4 76.6 185 91.6 185 110 C 185 128.4 203.4 143.4 195 161.7 C 186.6 180 161.6 175 143.3 185 C 125 195 120 220 100 220 C 80 220 75 195 56.7 185 C 38.4 175 13.4 180 5 161.7 C -3.4 143.4 15 128.4 15 110 C 15 91.6 -3.4 76.6 5 58.3 C 13.4 40 38.4 45 56.7 35 C 75 25 80 0 100 0 Z" />
                              <rect x="-50" y="-100" width="300" height="200" />
                            </clipPath>
                            <linearGradient
                              id="blobGrad"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop offset="0%" stopColor="rgba(225, 97, 101, 0.8)" />
                              <stop offset="100%" stopColor="#20A0E0" />
                            </linearGradient>
                          </defs>

                          {/* Blob Background using the provided gradient */}
                          <path
                            fill="url(#blobGrad)"
                            d="M 100 0 C 120 0 125 25 143.3 35 C 161.6 45 186.6 40 195 58.3 C 203.4 76.6 185 91.6 185 110 C 185 128.4 203.4 143.4 195 161.7 C 186.6 180 161.6 175 143.3 185 C 125 195 120 220 100 220 C 80 220 75 195 56.7 185 C 38.4 175 13.4 180 5 161.7 C -3.4 143.4 15 128.4 15 110 C 15 91.6 -3.4 76.6 5 58.3 C 13.4 40 38.4 45 56.7 35 C 75 25 80 0 100 0 Z"
                          />

                          {/* Image placed over the blob */}
                          <image
                            href="/assets/our-centers/centers-person.png"
                            clipPath="url(#blobClip-main)"
                            x="-45px"
                            y="-65px"
                            width="290"
                            height="290"
                            preserveAspectRatio="xMidYMid slice"
                          />
                        </svg>
                      </div>

                      <h3 className="mb-2 font-['Montserrat'] text-[18px] font-bold text-[#333]">
                        Kotla Darshan
                      </h3>

                      <span className="mb-2 rounded-full bg-[#FF9800] px-4 py-1 font-['Montserrat'] text-[12px] font-bold text-white shadow-sm">
                        AIR 08
                      </span>

                      <span className="px-2 text-center font-['Montserrat'] text-[14px] font-medium text-[#555]">
                        GS Foundation Course
                      </span>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}