/**
 * ScrollReveal Component
 * React component that reveals children when scrolled into view
 * Uses Intersection Observer for performance
 */

import { useEffect, useRef, useState, type ReactNode } from 'react';

export type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade' | 'rotate';

export interface ScrollRevealProps {
  children: ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  className?: string;
  easing?: 'smooth' | 'bounce' | 'elastic' | 'out' | 'in-out';
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 800,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  once = true,
  className = '',
  easing = 'smooth',
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    const observerOptions: IntersectionObserverInit = {
      threshold,
      rootMargin,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once && observer) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(element);

    return () => {
      if (observer && element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, once]);

  const easingClass = {
    smooth: 'ease-smooth',
    bounce: 'ease-bounce',
    elastic: 'ease-elastic',
    out: 'ease-out',
    'in-out': 'ease-in-out',
  }[easing];

  return (
    <div
      ref={elementRef}
      className={`animate-on-scroll ${isVisible ? 'animation-visible' : ''} ${easingClass} ${className}`}
      data-animation-direction={direction}
      style={{
        '--animation-delay': `${delay}ms`,
        '--animation-duration': `${duration}ms`,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
