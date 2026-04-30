'use client';

import React, { Suspense, lazy } from 'react';
import MainLayout from '@/components/common/MainLayout';
import NotFoundPage from '@/components/common/NotFound';
import { getCourseBySlug } from '@/features/course/data/courses';
import CourseHero from '@/features/course/components/sections/CourseHero';
import CourseInfoBar from '@/features/course/components/sections/CourseInfoBar';
import CourseDescription from '@/features/course/components/sections/CourseDescription';

// Lazy-load below-the-fold sections
const CourseDetails = lazy(() => import('@/features/course/components/sections/CourseDetails'));
const WhyChoose = lazy(() => import('@/features/course/components/sections/WhyChoose'));
const HowWillHelp = lazy(() => import('@/features/course/components/sections/HowWillHelp'));
const WhoShouldJoin = lazy(() => import('@/features/course/components/sections/WhoShouldJoin'));
const JoinCTA = lazy(() => import('@/features/course/components/sections/JoinCTA'));

const sectionFallback = <div className="min-h-[300px]" aria-hidden="true" />;

interface CoursePageClientProps {
  slug: string;
}

const CoursePageClient: React.FC<CoursePageClientProps> = ({ slug }) => {
  const course = getCourseBySlug(slug);

  if (!course) {
    return <NotFoundPage />;
  }

  return (
    <MainLayout>
      {/* 1. Hero — 80vh full-width image */}
      <CourseHero course={course} />

      {/* 2. Info bar — date, mode, duration, fees, CTA buttons */}
      <CourseInfoBar course={course} />

      {/* Course Description */}
      <CourseDescription course={course} />

      {/* 3. Course Details — heading + key highlights */}
      <Suspense fallback={sectionFallback}>
        <CourseDetails course={course} />
      </Suspense>

      {/* 4. Why Choose */}
      <Suspense fallback={sectionFallback}>
        <WhyChoose course={course} />
      </Suspense>

      {/* 5. How Will It Help */}
      <Suspense fallback={sectionFallback}>
        <HowWillHelp course={course} />
      </Suspense>

      {/* 6. Who Should Join */}
      {/* <Suspense fallback={sectionFallback}>
        <WhoShouldJoin course={course} />
      </Suspense> */}

      {/* 7. Join CTA banner */}
      <Suspense fallback={sectionFallback}>
        <JoinCTA course={course} />
      </Suspense>
    </MainLayout>
  );
};

export default CoursePageClient;
