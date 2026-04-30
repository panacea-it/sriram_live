'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const coursesData = {
  'GS Foundation': [
    { id: 1, title: '1 Year General Studies Foundation Course', image: '/assets/course_image.png', rating: 4.8 },
    { id: 2, title: '1 Year General Studies Foundation Course', image: '/assets/course_image.png', rating: 4.8 },
    { id: 3, title: '1 Year General Studies Foundation Course', image: '/assets/course_image.png', rating: 4.8 },
    { id: 4, title: '1 Year General Studies Foundation Course', image: '/assets/course_image.png', rating: 4.8 },
    { id: 5, title: '1 Year General Studies Foundation Course', image: '/assets/course_image.png', rating: 4.8 },
    { id: 6, title: '1 Year General Studies Foundation Course', image: '/assets/course_image.png', rating: 4.8 },
  ],
  'Mentorship': [
    { id: 7, title: 'Mentorship Program 2025', image: '/assets/course_image.png', rating: 4.9 },
  ],
  'Optional Foundation': [],
  'Test Series': [],
  'CSAT': [],
  'Enrichment Courses': [],
};

const ExploreCourses: React.FC = () => {
  const [activeTab, setActiveTab] = useState('GS Foundation');
  const tabs = Object.keys(coursesData);

  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(() => {
    if (prefersReducedMotion) return;

    gsap.from(headerRef.current, {
      y: 100,
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.3,
      force3D: true,
      scrollTrigger: { trigger: headerRef.current, start: 'top 85%', once: true }
    });

    gsap.from(tabsRef.current, {
      y: 50,
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.5,
      force3D: true,
      scrollTrigger: { trigger: tabsRef.current, start: 'top 90%', once: true }
    });
  }, { dependencies: [prefersReducedMotion], scope: sectionRef });

  useGSAP(() => {
    if (prefersReducedMotion) return;

    if (gridRef.current && gridRef.current.children.length > 0) {
      gsap.fromTo(
        gridRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          stagger: 0.15,
          ease: 'power3.out',
          force3D: true,
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
            once: true,
          }
        }
      );
    }
  }, { scope: sectionRef, dependencies: [activeTab, prefersReducedMotion] });

  useEffect(() => {
    const activeIndex = tabs.findIndex((tab) => tab === activeTab);
    const activeButton = buttonRefs.current[activeIndex];
    const indicator = indicatorRef.current;

    if (activeButton && indicator) {
      gsap.set(indicator, {
        x: activeButton.offsetLeft,
        width: activeButton.offsetWidth,
      });
    }
  }, [activeTab, tabs]);

  const handleTabClick = (tab: string, idx: number) => {
    setActiveTab(tab);

    const activeButton = buttonRefs.current[idx];
    const indicator = indicatorRef.current;

    if (activeButton && indicator) {
      gsap.killTweensOf(indicator);

      gsap.to(indicator, {
        x: activeButton.offsetLeft,
        width: activeButton.offsetWidth,
        duration: prefersReducedMotion ? 0 : 0.35,
        ease: 'power3.out',
        overwrite: true,
      });
    }
  };

  return (
    <section ref={sectionRef} className="relative py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        <div ref={headerRef} className="text-center">
          <h2 className="global-section-heading">
            EXPLORE OUR COURSES
          </h2>
        </div>

        <div ref={tabsRef} className="w-full bg-[#F5F5F5] rounded-full p-2 flex relative overflow-x-auto scrollbar-hide">
          <div
            ref={indicatorRef}
            className="absolute top-2 bottom-2 left-0 btn-gradient rounded-full shadow-md z-0 will-change-transform"
            style={{ width: '0px' }}
          />
          {tabs.map((tab, idx) => (
            <button
              key={tab}
              ref={(el) => { buttonRefs.current[idx] = el; }}
              onClick={() => handleTabClick(tab, idx)}
              className={`relative px-8 py-3 rounded-full font-medium text-sm md:text-base transition-colors duration-300 whitespace-nowrap flex-1 text-center z-10 ${activeTab === tab ? 'text-white' : 'text-gray-500 hover:text-gray-800'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="min-h-[400px]">
          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coursesData[activeTab as keyof typeof coursesData]?.length > 0 ? (
              coursesData[activeTab as keyof typeof coursesData].map((course) => (
                <div
                  key={`${activeTab}-${course.id}`}
                  className="group relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-shadow duration-500 bg-white rounded-lg cursor-pointer w-full"
                >
                  <div className="aspect-[16/9] overflow-hidden w-full bg-gray-100 relative">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 p-5 flex flex-col justify-end transition-opacity duration-300 group-hover:opacity-0 z-10">
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 to-transparent" />
                      <h3 className="relative text-[#FFE81C] font-bold text-base leading-tight drop-shadow-md">
                        {course.title}
                      </h3>
                    </div>

                    <div
                      className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20 flex flex-col justify-between p-5"
                      style={{ background: 'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.95) 100%)' }}
                    >
                      <div
                        className="absolute -top-10 -left-10 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 pointer-events-none"
                        style={{
                          background: 'linear-gradient(181.87deg, #FFDFA8 -157.44%, rgba(255, 226, 176, 0.96) -157.4%, rgba(255, 234, 198, 0.67) 216.94%, rgba(250, 211, 144, 0.8) 216.94%)',
                          filter: 'blur(60px)'
                        }}
                      />
                      <div
                        className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 pointer-events-none"
                        style={{
                          background: 'linear-gradient(181.87deg, #FFDFA8 -157.44%, rgba(255, 226, 176, 0.96) -157.4%, rgba(255, 234, 198, 0.67) 216.94%, rgba(250, 211, 144, 0.8) 216.94%)',
                          filter: 'blur(60px)'
                        }}
                      />

                      <div className="relative z-30 space-y-3">
                        <div className="border-b border-white/20 pb-4 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-[transform,opacity] duration-500 delay-100">
                          <div className="flex items-start gap-2">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="#FFE81C"
                              className="shrink-0 mt-0.5"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                            </svg>
                            <span className="text-[#FFE81C] text-[15px] md:text-base font-bold leading-snug">
                              1 Year General Studies Foundation Course
                            </span>
                          </div>
                        </div>

                        <div className="transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-[transform,opacity] duration-500 delay-200">
                          <div className="flex flex-wrap items-center gap-4 text-white text-sm md:text-base font-medium">
                            <div className="flex items-center gap-1.5">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" />
                              </svg>
                              <span>Delhi</span>
                            </div>

                            <div className="flex items-center gap-1.5">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" />
                              </svg>
                              <span>Hyd</span>
                            </div>

                            <div className="flex items-center gap-1.5">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" />
                              </svg>
                              <span>Pune</span>
                            </div>
                          </div>
                        </div>

                        <div className="transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-[transform,opacity] duration-500 delay-250">
                          <p className="text-[#FFE81C] text-1xl md:text-1xl ">
                            Rs. 50,000 /-
                          </p>
                        </div>
                      </div>

                      <div className="relative z-30 mt-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-[transform,opacity] duration-500 delay-400">
                        <button className="bg-white text-black px-9 py-1 rounded-xl text-base shadow-lg hover:bg-gray-100 active:scale-95 transition-all">
                          Explore
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center text-gray-400">
                No courses available in this category.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreCourses;