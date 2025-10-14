import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const useGSAP = (
  animationFn: (element: HTMLElement) => void,
  dependencies: any[] = []
) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      animationFn(elementRef.current);
    }
  }, dependencies);

  return elementRef;
};

export const useFadeIn = (delay = 0) => {
  return useGSAP((element) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay,
        ease: 'power2.out',
      }
    );
  });
};

export const useSlideIn = (direction: 'left' | 'right' = 'left', delay = 0) => {
  return useGSAP((element) => {
    const x = direction === 'left' ? -50 : 50;
    gsap.fromTo(
      element,
      { x, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        delay,
        ease: 'power2.out',
      }
    );
  });
};

export const useScaleIn = (delay = 0) => {
  return useGSAP((element) => {
    gsap.fromTo(
      element,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        delay,
        ease: 'back.out(1.7)',
      }
    );
  });
};

export const useStaggerChildren = (delay = 0) => {
  return useGSAP((element) => {
    const children = element.children;
    gsap.fromTo(
      children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        delay,
        ease: 'power2.out',
      }
    );
  });
};
