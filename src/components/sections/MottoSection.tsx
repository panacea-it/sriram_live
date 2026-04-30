'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import useInViewport from '@/hooks/useInViewport';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const MottoSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const isInViewport = useInViewport(sectionRef, { threshold: 0.2 });

  const gradientStyle = {
    backgroundImage: 'linear-gradient(90deg, rgba(225, 97, 101, 0.8) 0%, #20A0E0 100%)'
  };

  const reverseGradientStyle = {
    backgroundImage: 'linear-gradient(90deg, #20A0E0 0%, rgba(225, 97, 101, 0.8) 100%)'
  };

  useGSAP(() => {
    if (!sectionRef.current || prefersReducedMotion) return;

    // Text slides from left smoothly
    gsap.from('.motto-text-line', {
      x: -100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power3.out',
      force3D: true,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
        once: true,
      }
    });

    // Image slides from right smoothly after scroll
    gsap.fromTo('.motto-wall',
      { x: '100%', opacity: 0 },
      {
        x: '0%',
        opacity: 1,
        duration: 1.8,
        ease: 'power3.out',
        force3D: true,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          once: true,
        }
      }
    );
  }, { dependencies: [prefersReducedMotion], scope: sectionRef });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    if (prefersReducedMotion || !isInViewport) {
      video.pause();
      return;
    }

    void video.play().catch(() => {
      // Ignore autoplay rejections so this stays a non-blocking enhancement.
    });
  }, [isInViewport, prefersReducedMotion]);

  return (
    <section ref={sectionRef} className="relative w-full bg-white overflow-hidden min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-center py-8 sm:py-12 md:py-16">

      <div className="motto-wall absolute top-0 right-[-0%] sm:right-[-10%] md:right-[-12%] w-[25%] sm:w-[38%] md:w-[60%] lg:w-[60%] h-full z-0 pointer-events-none">
        <div className="relative w-full h-full">
          <div className="absolute inset-y-0 left-0 w-full md:w-[60%] bg-gradient-to-r from-white via-white/0 to-transparent z-10" />
          <Image
            src="/assets/wall_text.png"
            alt="Motto Wall"
            fill
            sizes="(max-width: 640px) 25vw, (max-width: 768px) 38vw, 60vw"
            className="object-cover object-right"
          />
        </div>
      </div>

      {/* Background Video specifically for text area */}
      {/* <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none translate-x-[-10%] md:translate-x-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute left-0 top-0 h-full w-full md:w-[50%] object-cover opacity-[0.5] mix-blend-multiply transition-opacity duration-1500"
          style={{ 
            maskImage: 'linear-gradient(to right, black 50%, transparent 80%)',
            WebkitMaskImage: 'linear-gradient(to right, black 50%, transparent 80%)'
          }}
        >
          <source src="/assets/dropdown-video.mp4" type="video/mp4" />
        </video>
      </div> */}

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="w-[75%] sm:w-[62%] md:w-[50%] lg:w-[85%]">

          <div className="font-['Montserrat'] font-bold text-[20px] sm:text-[28px] md:text-[40px] lg:text-[60px] leading-[1.2] lg:leading-[90px] tracking-[0%]">

            {/* Block 1: Logo & Years of */}
            <div className="motto-text-line flex items-center gap-2 sm:gap-3 md:gap-4 mb-2 lg:mb-0">
              <Image
                src="/assets/40_years_experience.png"
                alt="40 Years"
                width={240}
                height={64}
                className="h-7 sm:h-9 md:h-12 lg:h-16 w-auto object-contain"
              />
              <span className="text-[#00000099]">
                Years of
              </span>
            </div>

            {/* Block 2: Excellence in Shaping */}
            <div className="motto-text-line">
              <span className="bg-clip-text text-transparent" style={gradientStyle}>
                Excellence
              </span>
              <span className="text-[#00000099]"> in </span>
              <span className="bg-clip-text text-transparent" style={reverseGradientStyle}>
                Shaping
              </span>
            </div>

            {/* Block 3: Officers */}
            <div className="motto-text-line">
              <span className="bg-clip-text text-transparent" style={gradientStyle}>
                Officers
              </span>
            </div>

            {/* Block 4: Now it's your */}
            <div className="motto-text-line">
              <span className="text-[#00000099]">
                Now it&apos;s your
              </span>
            </div>

            {/* Block 5: turn to serve the */}
            <div className="motto-text-line">
              <span className="text-[#00000099]">turn to </span>
              <span className="bg-clip-text text-transparent" style={gradientStyle}>
                serve
              </span>
              <span className="text-[#00000099]"> the</span>
            </div>

            {/* Block 6: nation */}
            <div className="motto-text-line">
              <span className="bg-clip-text text-transparent" style={gradientStyle}>
                nation
              </span>
            </div>

          </div>

          <div className="motto-text-line mt-6 sm:mt-8 md:mt-10">
            <button
              className="text-white font-['Montserrat'] font-medium text-sm sm:text-base md:text-lg flex items-center justify-center gap-[14px] rounded-[12px] w-full max-w-[436px] h-[44px] sm:h-[52px] md:h-[59px] px-[16px] py-[10px] hover:scale-[1.02] hover:brightness-110 transition-all duration-300"
              style={{
                background: 'linear-gradient(90deg, #00679C 0%, #002436 100%)',
                boxShadow: '0px 4px 32px 0px #0000001A',
                opacity: 1
              }}
            >
              Start Your UPSC CSE Journey
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MottoSection;
