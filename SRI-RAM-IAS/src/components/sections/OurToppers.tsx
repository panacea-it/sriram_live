'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import useInViewport from '@/hooks/useInViewport';

gsap.registerPlugin(ScrollTrigger);

const OurToppers: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const isInViewport = useInViewport(containerRef, { threshold: 0.1 });

  useGSAP(() => {
    if (prefersReducedMotion) return;

    gsap.from('.our-toppers-heading', {
      y: 70,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      force3D: true,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 60%',
        once: true,
      }
    });

    gsap.from('.our-toppers-card', {
      y: 50,
      opacity: 0,
      scale: 0.95,
      duration: 0.6,
      stagger: {
        each: 0.03,
        from: "center"
      },
      ease: 'back.out(1.2)',
      force3D: true,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 95%',
        once: true,
      }
    });
  }, { dependencies: [prefersReducedMotion], scope: containerRef });

  const toppers = [
    { name: 'AAKASH GARG', rank: 'AIR 05', course: 'GS Foundation Course', img: 'AAKASH GARG (AIR - 5).png' },
    { name: 'ABHI JAIN', rank: 'AIR 34', course: 'GS Foundation Course', img: 'ABHI JAIN (AIR - 34).png' },
    { name: 'ABHISHEK SHARMA', rank: 'AIR 38', course: 'GS Foundation Course', img: 'ABHISHEK-SHARMA-AIR-38.png' },
    { name: 'AKSHIT BHARDWAJ', rank: 'AIR 12', course: 'GS Foundation Course', img: 'AKSHIT-BHARDWAJ (AIR-12).png' },
    { name: 'ANIKET RANJAN', rank: 'AIR 48', course: 'GS Foundation Course', img: 'ANIKET-RANJAN(AIR-48).png' },
    { name: 'ANUJ AGNIHOTRI', rank: 'AIR 01', course: 'GS Foundation Course', img: 'ANUJ-AGNIHOTRI (AIR-1).png' },
    { name: 'Aditya Vikram Agarwal', rank: 'AIR 09', course: 'GS Foundation Course', img: 'Aditya Vikram Agarwal (AIR - 9).png' },
    { name: 'CHITWAN JAIN', rank: 'AIR 17', course: 'GS Foundation Course', img: 'CHITWAN-JAIN (AIR-17).png' },
    { name: 'DIKSHA RAI', rank: 'AIR 40', course: 'GS Foundation Course', img: 'DIKSHA-RAI(AIR-40).png' },
    { name: 'ETTABOYINA SAI SHIVANI', rank: 'AIR 11', course: 'GS Foundation Course', img: 'ETTABOYINA SAI SHIVANI (AIR - 11).png' },
    { name: 'ISHITWA ANAND', rank: 'AIR 50', course: 'GS Foundation Course', img: 'ISHITWA-ANAND(AIR-50).png' },
    { name: 'MUSKAN', rank: 'AIR 36', course: 'GS Foundation Course', img: 'MUSKAN-AIR-36.png' },
    { name: 'NABIYA PARVEZ', rank: 'AIR 29', course: 'GS Foundation Course', img: 'NABIYA-PARVEZ(AIR-29).png' },
    { name: 'NISAR DISHANT AMRUTLAL', rank: 'AIR 19', course: 'GS Foundation Course', img: 'NISAR-DISHANT-AMRUTLAL (AIR-19).png' },
    { name: 'PAKSHAL SECRETRY', rank: 'AIR 08', course: 'GS Foundation Course', img: 'PAKSHAL-SECRETRY (AIR-8).png' },
    { name: 'PRACHI HONEY', rank: 'AIR 28', course: 'GS Foundation Course', img: 'PRACHI-HONEY(AIR-28).png' },
    { name: 'PRIYA SINGH CHAUHAN', rank: 'AIR 45', course: 'GS Foundation Course', img: 'PRIYA-SINGH-CHAUHAN(AIR-45).png' },
    { name: 'R RANGAMANJU', rank: 'AIR 24', course: 'GS Foundation Course', img: 'R RANGAMANJU (AIR - 24 ).png' },
    { name: 'RAGHAV JHUNJHUNWALA', rank: 'AIR 04', course: 'GS Foundation Course', img: 'RAGHAV-JHUNJHUNWALA (Air-4).png' },
    { name: 'RISHABH CHOUDHARY', rank: 'AIR 28', course: 'GS Foundation Course', img: 'RISHABH CHOUDHARY (AIR - 28).png' },
    { name: 'ROHIN KUMAR', rank: 'AIR 39', course: 'GS Foundation Course', img: 'ROHIN-KUMAR(AIR-39).png' },
    { name: 'Raj Krishna Jha', rank: 'AIR 08', course: 'GS Foundation Course', img: 'Raj Krishna Jha (AIR - 8).png' },
    { name: 'SIVACHANDRAN B', rank: 'AIR 23', course: 'GS Foundation Course', img: 'SIVACHANDRAN B (AIR - 23).png' },
    { name: 'Shah Margi Chirag', rank: 'AIR 04', course: 'GS Foundation Course', img: 'Shah Margi Chirag (AIR - 4).png' },
    { name: 'Shambhavi Tiwari', rank: 'AIR 46', course: 'GS Foundation Course', img: 'Shambhavi-Tiwari(AIR-46).png' },
    { name: 'UTKARSH YADAV', rank: 'AIR 32', course: 'GS Foundation Course', img: 'UTKARSH YADAV (AIR - 32).png' },
    { name: 'VAIBHAVI AGRAWAL', rank: 'AIR 35', course: 'GS Foundation Course', img: 'VAIBHAVI-AGRAWAL (AIR-35).png' },
    { name: 'Vibhor Bharadwaj', rank: 'AIR 19', course: 'GS Foundation Course', img: 'Vibhor Bharadwaj (AIR - 19).png' },
  ];
  const numSets = 5;
  const displayToppers = Array(numSets).fill(toppers).flat();

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Center the scroll position on mount
    const timeoutId = setTimeout(() => {
      const oneSetWidth = scrollContainer.scrollWidth / numSets;
      if (oneSetWidth > 0 && scrollContainer.scrollLeft === 0) {
        scrollContainer.scrollLeft = oneSetWidth * 2; // Start at the 3rd set
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const shouldAutoScroll = isInViewport && !isPaused && !prefersReducedMotion;

    if (!scrollContainer || !shouldAutoScroll) return;

    let animationFrameId: number;
    let lastTime = performance.now();
    let currentScroll = scrollContainer.scrollLeft;
    const speed = 50; // Pixels per second

    const normalizeScrollPosition = () => {
      const oneSetWidth = scrollContainer.scrollWidth / numSets;
      if (oneSetWidth <= 0) return;

      // Jump back to middle when we've moved too far right
      if (currentScroll >= oneSetWidth * 3) {
        currentScroll -= oneSetWidth;
        scrollContainer.scrollLeft = currentScroll;
      }
      // Jump forward to middle when we've moved too far left
      else if (currentScroll <= oneSetWidth * 1) {
        currentScroll += oneSetWidth;
        scrollContainer.scrollLeft = currentScroll;
      }
    };

    const scroll = (time: number) => {
      const deltaTime = (time - lastTime) / 1000;
      lastTime = time;

      const cappedDelta = Math.min(deltaTime, 0.1);
      currentScroll += speed * cappedDelta;
      scrollContainer.scrollLeft = currentScroll;

      normalizeScrollPosition();
      animationFrameId = requestAnimationFrame(scroll);
    };

    const handleManualScroll = () => {
      currentScroll = scrollContainer.scrollLeft;
    };

    scrollContainer.addEventListener('scroll', handleManualScroll, { passive: true });
    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener('scroll', handleManualScroll);
    };
  }, [isInViewport, isPaused, prefersReducedMotion]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[600px] flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="absolute top-1/4 right-[-80px] -translate-y-1/2 w-[140px] h-[140px] bg-white rounded-l-full z-10 pointer-events-none"
        style={{
          boxShadow: '0px 0px 120px 20px rgba(91, 178, 229, 0.7)'
        }}
      ></div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/our-centers/centers-bg.png"
          alt="Background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] flex flex-col items-center">
        {/* Header */}
        <div className="our-toppers-heading text-center mb-4">
          <h2 className="global-section-heading">
            OUR TOPPERS
          </h2>
        </div>

        <p className="our-toppers-heading text-center text-[#2A3742] font-medium max-w-[800px] mx-auto text-[14px] md:text-[16px] leading-relaxed mb-12 font-['Montserrat']">
          Driven by a commitment to success, we stand behind our toppers with constant support, expert mentorship, and personalized attention to help them lead the way in every phase of the UPSC process.
        </p>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="w-full overflow-x-auto no-scrollbar flex gap-8 pb-8 cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {displayToppers.map((topper, idx) => (
            <div key={idx} className="our-toppers-card shrink-0">
              <div
                className="group flex flex-col items-center min-w-[240px] rounded-[16px] px-5 py-6 transition-all duration-300 cursor-pointer"
              >
              {/* Photo frame */}
              <div className="w-[220px] h-[220px] relative mb-6 flex items-center justify-center drop-shadow-xl transition-transform duration-300">
                <svg viewBox="-20 -20 240 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
                  <defs>
                    <clipPath id={`blobClip-main-${idx}`}>
                      <path d="M 100 0 C 120 0 125 25 143.3 35 C 161.6 45 186.6 40 195 58.3 C 203.4 76.6 185 91.6 185 110 C 185 128.4 203.4 143.4 195 161.7 C 186.6 180 161.6 175 143.3 185 C 125 195 120 220 100 220 C 80 220 75 195 56.7 185 C 38.4 175 13.4 180 5 161.7 C -3.4 143.4 15 128.4 15 110 C 15 91.6 -3.4 76.6 5 58.3 C 13.4 40 38.4 45 56.7 35 C 75 25 80 0 100 0 Z" />
                    </clipPath>
                  </defs>

                  <path fill="#FFFFFF" d="M 100 0 C 120 0 125 25 143.3 35 C 161.6 45 186.6 40 195 58.3 C 203.4 76.6 185 91.6 185 110 C 185 128.4 203.4 143.4 195 161.7 C 186.6 180 161.6 175 143.3 185 C 125 195 120 220 100 220 C 80 220 75 195 56.7 185 C 38.4 175 13.4 180 5 161.7 C -3.4 143.4 15 128.4 15 110 C 15 91.6 -3.4 76.6 5 58.3 C 13.4 40 38.4 45 56.7 35 C 75 25 80 0 100 0 Z" />

                  <image
                    href={`/assets/ourtoppers/${topper.img}`}
                    clipPath={`url(#blobClip-main-${idx})`}
                    x="-15"
                    y="0"
                    width="230"
                    height="230"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </svg>
              </div>

              <h3 className="text-white text-[18px] font-bold font-['Montserrat'] mb-2 drop-shadow-sm">{topper.name}</h3>

              <span className="bg-[#FF9800] text-white text-[16px] md:text-[18px] font-semibold py-2 px-8 md:py-2.5 md:px-10 rounded-full mb-2 shadow-md font-['Montserrat']">
                {topper.rank}
              </span>

              <span className="text-white text-[14px] opacity-90 font-medium font-['Montserrat'] text-center px-2">{topper.course}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurToppers;