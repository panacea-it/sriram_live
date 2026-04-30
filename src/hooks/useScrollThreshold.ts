'use client';

import { startTransition, useEffect, useState } from 'react';

const useScrollThreshold = (threshold: number) => {
  // ✅ Always false on first render — matches server exactly
  const [isPastThreshold, setIsPastThreshold] = useState(false);

  useEffect(() => {
    let frameId = 0;
    let lastValue = window.scrollY > threshold;

    // Set correct value after hydration
    setIsPastThreshold(lastValue);

    const updateScrollState = () => {
      frameId = 0;
      const nextValue = window.scrollY > threshold;

      if (nextValue === lastValue) return;

      lastValue = nextValue;
      startTransition(() => {
        setIsPastThreshold(nextValue);
      });
    };

    const handleScroll = () => {
      if (frameId !== 0) return;
      frameId = window.requestAnimationFrame(updateScrollState);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameId !== 0) window.cancelAnimationFrame(frameId);
    };
  }, [threshold]);

  return isPastThreshold;
};

export default useScrollThreshold;