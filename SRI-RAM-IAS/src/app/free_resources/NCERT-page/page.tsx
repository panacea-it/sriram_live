"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Courses from "@/components/common/Courses";
import CustomDropdown from "@/components/common/CustomDropdown";
import FloatingActions from "@/components/common/FloatingActions";

import {
  useResourceCategories,
  useResourceFiles,
  useResourceFilters,
  findCategoryByKey,
} from "@/features/resources/hooks/useResources";

gsap.registerPlugin(ScrollTrigger);

export default function NcertBooksPage() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const { data: categories } = useResourceCategories();
  const ncertCategory = useMemo(
    () => findCategoryByKey(categories, "NCERT"),
    [categories],
  );
  const categoryId = ncertCategory?._id;

  const { data: subjects = [] } = useResourceFilters(
    { type: "SUBJECT", categoryId, moduleType: "NCERT" },
    !!categoryId,
  );
  const { data: classes = [] } = useResourceFilters(
    { type: "CLASS", categoryId, moduleType: "NCERT" },
    !!categoryId,
  );

  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [appliedFilters, setAppliedFilters] = useState<{
    subjectId?: string;
    classId?: string;
  }>({});

  const subjectId = useMemo(
    () => subjects.find((s) => s.value === selectedSubject)?._id,
    [subjects, selectedSubject],
  );
  const classId = useMemo(
    () => classes.find((c) => c.value === selectedClass)?._id,
    [classes, selectedClass],
  );

  const { data: files = [], isFetching } = useResourceFiles(
    {
      categoryId,
      subjectId: appliedFilters.subjectId,
      classId: appliedFilters.classId,
    },
    !!categoryId && (!!appliedFilters.subjectId || !!appliedFilters.classId),
  );

  const showResults =
    !!appliedFilters.subjectId || !!appliedFilters.classId;

  useGSAP(
    () => {
      if (prefersReducedMotion) return;
      gsap.fromTo(
        ".animate-heading",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      );
      gsap.fromTo(
        ".animate-tabs",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 },
      );
      gsap.fromTo(
        ".animate-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ".animate-cards-container", start: "top 85%" },
        },
      );
      gsap.fromTo(
        ".animate-sidebar",
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      );
    },
    { scope: containerRef, dependencies: [prefersReducedMotion, showResults] },
  );

  const handleSearch = () => {
    setAppliedFilters({ subjectId, classId });
  };

  return (
    <>
      <Header />

      <main
        ref={containerRef}
        className="min-h-screen bg-[#f7f7f7] font-['Montserrat',sans-serif]"
      >
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

        <section className="relative overflow-hidden bg-[#f7f7f7] px-5 py-12 md:px-8 lg:px-12 xl:px-16">
          <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[url('/assets/free-resources/free-resource-bg-1.png')] bg-cover bg-center bg-no-repeat opacity-50" />

          <div className="relative mx-auto max-w-[1500px]">
            <div className="grid grid-cols-1 gap-10 xl:grid-cols-[minmax(0,1fr)_320px]">
              <div>
                <h1 className="animate-heading mb-10 text-center text-[36px] font-extrabold uppercase leading-none md:text-[48px] lg:text-[56px]">
                  <span className="bg-[linear-gradient(90deg,#D57E89_0%,#9A8FB6_42%,#3E9CDB_100%)] bg-clip-text text-transparent">
                    NCERT BOOKS
                  </span>
                </h1>

                <div className="animate-tabs relative z-[60] mb-12">
                  <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                    <CustomDropdown
                      options={subjects.map((s) => s.value)}
                      value={selectedSubject}
                      onChange={setSelectedSubject}
                      placeholder="Subject"
                    />
                    <CustomDropdown
                      options={classes.map((c) => c.value)}
                      value={selectedClass}
                      onChange={setSelectedClass}
                      placeholder="Class"
                    />
                  </div>

                  <div className="mt-12 flex justify-center">
                    <button
                      onClick={handleSearch}
                      disabled={!subjectId && !classId}
                      className="rounded-full bg-[linear-gradient(90deg,#167fbd_0%,#03283b_100%)] px-14 py-3 text-[18px] font-bold text-white shadow-[0_8px_20px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      Search
                    </button>
                  </div>
                </div>

                {showResults && (
                  <div className="animate-cards-container grid grid-cols-1 gap-5 md:grid-cols-2">
                    {isFetching && (
                      <p className="col-span-full text-center text-[16px] text-[#555]">
                        Loading...
                      </p>
                    )}
                    {!isFetching && files.length === 0 && (
                      <p className="col-span-full text-center text-[16px] text-[#555]">
                        No books found for the selected filters.
                      </p>
                    )}
                    {files.map((book) => (
                      <div
                        key={book._id}
                        className="animate-card group origin-bottom-left rounded-[18px] bg-[#FAF8F3] px-4 py-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:bg-[#FEF2E5] hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
                      >
                        <h3 className="mb-6 text-center font-bold text-[#000000] text-[18px] leading-[100%]">
                          {book.title}
                        </h3>

                        <div className="flex items-center justify-center gap-3">
                          <Link
                            href={book.fileUrl ?? "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-w-[88px] items-center justify-center rounded-[10px] border border-[#58b7ea] bg-white px-5 py-2.5 text-[16px] font-bold text-[#2a9cda] transition-all duration-300 hover:bg-[linear-gradient(90deg,#2aa7df_0%,#03283b_100%)] hover:text-white"
                          >
                            View
                          </Link>
                          <a
                            href={book.fileUrl ?? "#"}
                            download
                            className="inline-flex min-w-[160px] items-center justify-center rounded-[10px] border border-[#58b7ea] bg-white px-5 py-2.5 text-[16px] font-bold text-[#2a9cda] transition-all duration-300 hover:bg-[linear-gradient(90deg,#2aa7df_0%,#03283b_100%)] hover:text-white"
                          >
                            Download PDF
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <aside className="animate-sidebar mx-auto w-full max-w-[330px] space-y-8 xl:ml-auto xl:mt-[110px]">
                <Courses />

                <div className="rounded-[22px] bg-[#dfe9f8] px-4 py-8 shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
                  <h2 className="mb-6 text-center text-[34px] font-extrabold leading-none">
                    <span className="bg-[linear-gradient(90deg,#4D90D2_0%,#B57B95_100%)] bg-clip-text text-transparent">
                      Our Toppers
                    </span>
                  </h2>

                  <div className="flex flex-col items-center">
                    <div className="our-toppers-card flex min-w-[240px] shrink-0 flex-col items-center">
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
                          <path
                            fill="url(#blobGrad)"
                            d="M 100 0 C 120 0 125 25 143.3 35 C 161.6 45 186.6 40 195 58.3 C 203.4 76.6 185 91.6 185 110 C 185 128.4 203.4 143.4 195 161.7 C 186.6 180 161.6 175 143.3 185 C 125 195 120 220 100 220 C 80 220 75 195 56.7 185 C 38.4 175 13.4 180 5 161.7 C -3.4 143.4 15 128.4 15 110 C 15 91.6 -3.4 76.6 5 58.3 C 13.4 40 38.4 45 56.7 35 C 75 25 80 0 100 0 Z"
                          />
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
