import { gsap } from 'gsap';

// Smooth page transition animations
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

// Fade in animation
export const fadeIn = (element: HTMLElement | null, delay = 0) => {
  if (!element) return;
  
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
};

// Stagger animation for lists
export const staggerFadeIn = (elements: HTMLElement[] | NodeListOf<Element>, delay = 0) => {
  gsap.fromTo(
    elements,
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
};

// Scale in animation
export const scaleIn = (element: HTMLElement | null, delay = 0) => {
  if (!element) return;
  
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
};

// Slide in from left
export const slideInLeft = (element: HTMLElement | null, delay = 0) => {
  if (!element) return;
  
  gsap.fromTo(
    element,
    { x: -50, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 0.6,
      delay,
      ease: 'power2.out',
    }
  );
};

// Slide in from right
export const slideInRight = (element: HTMLElement | null, delay = 0) => {
  if (!element) return;
  
  gsap.fromTo(
    element,
    { x: 50, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 0.6,
      delay,
      ease: 'power2.out',
    }
  );
};

// Counter animation
export const animateCounter = (
  element: HTMLElement | null,
  endValue: number,
  duration = 1,
  prefix = '',
  suffix = ''
) => {
  if (!element) return;
  
  const obj = { value: 0 };
  gsap.to(obj, {
    value: endValue,
    duration,
    ease: 'power1.out',
    onUpdate: () => {
      element.textContent = prefix + Math.round(obj.value).toLocaleString() + suffix;
    },
  });
};

// Hover scale effect
export const hoverScale = (element: HTMLElement | null) => {
  if (!element) return;
  
  element.addEventListener('mouseenter', () => {
    gsap.to(element, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out',
    });
  });
  
  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  });
};

// Rotate animation
export const rotate = (element: HTMLElement | null, degrees = 360, duration = 1) => {
  if (!element) return;
  
  gsap.to(element, {
    rotation: degrees,
    duration,
    ease: 'power2.inOut',
  });
};

// Pulse animation
export const pulse = (element: HTMLElement | null) => {
  if (!element) return;
  
  gsap.to(element, {
    scale: 1.1,
    duration: 0.5,
    yoyo: true,
    repeat: -1,
    ease: 'power1.inOut',
  });
};

// Progress bar animation
export const animateProgress = (element: HTMLElement | null, percentage: number, duration = 1) => {
  if (!element) return;
  
  gsap.fromTo(
    element,
    { width: '0%' },
    {
      width: `${percentage}%`,
      duration,
      ease: 'power2.out',
    }
  );
};

// Card flip animation
export const flipCard = (element: HTMLElement | null) => {
  if (!element) return;
  
  gsap.to(element, {
    rotationY: 180,
    duration: 0.6,
    ease: 'power2.inOut',
  });
};

// Smooth scroll to element
export const scrollToElement = (element: HTMLElement | null, offset = 0) => {
  if (!element) return;
  
  gsap.to(window, {
    scrollTo: {
      y: element,
      offsetY: offset,
    },
    duration: 0.8,
    ease: 'power2.inOut',
  });
};
