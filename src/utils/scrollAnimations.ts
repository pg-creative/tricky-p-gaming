/**
 * Scroll Animation Utilities
 * Provides Intersection Observer-based scroll animations with performance optimizations
 */

export interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  animationClass?: string;
}

export type AnimationDirection = 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';

/**
 * Creates an Intersection Observer for scroll-triggered animations
 */
export function createScrollObserver(
  callback: IntersectionObserverCallback,
  options: ScrollAnimationOptions = {}
): IntersectionObserver {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
  } = options;

  const observerOptions: IntersectionObserverInit = {
    threshold,
    rootMargin,
  };

  return new IntersectionObserver(callback, observerOptions);
}

/**
 * Adds scroll animation to elements matching the selector
 */
export function initScrollAnimations(
  selector: string = '.animate-on-scroll',
  options: ScrollAnimationOptions = {}
): IntersectionObserver | null {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Immediately show all elements if reduced motion is preferred
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
      el.classList.add('animation-visible');
    });
    return null;
  }

  const elements = document.querySelectorAll(selector);

  if (elements.length === 0) return null;

  const { once = true, animationClass = 'animation-visible' } = options;

  const callback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(animationClass);

        if (once) {
          observer.unobserve(entry.target);
        }
      } else if (!once) {
        entry.target.classList.remove(animationClass);
      }
    });
  };

  const observer = createScrollObserver(callback, options);

  elements.forEach((el) => observer.observe(el));

  return observer;
}

/**
 * Adds staggered animation delays to a group of elements
 */
export function addStaggerDelay(
  elements: NodeListOf<Element> | Element[],
  baseDelay: number = 100,
  maxDelay: number = 1000
): void {
  Array.from(elements).forEach((el, index) => {
    const delay = Math.min(index * baseDelay, maxDelay);
    (el as HTMLElement).style.setProperty('--animation-delay', `${delay}ms`);
  });
}

/**
 * Applies a specific animation direction to an element
 */
export function applyAnimationDirection(
  element: HTMLElement,
  direction: AnimationDirection
): void {
  element.setAttribute('data-animation-direction', direction);
}

/**
 * Handles parallax scroll effect with performance optimizations
 */
export function initParallaxScroll(selector: string = '.parallax'): void {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) return;

  const parallaxElements = document.querySelectorAll<HTMLElement>(selector);

  if (parallaxElements.length === 0) return;

  let ticking = false;

  const updateParallax = () => {
    parallaxElements.forEach((element) => {
      const speed = parseFloat(element.dataset.parallaxSpeed || '0.5');
      const direction = element.dataset.parallaxDirection || 'up';
      const rect = element.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const elementTop = rect.top + scrolled;
      const elementVisible = rect.top < window.innerHeight && rect.bottom > 0;

      if (elementVisible) {
        const offset = (scrolled - elementTop) * speed;
        const transform = direction === 'up'
          ? `translateY(${-offset}px)`
          : `translateY(${offset}px)`;

        element.style.transform = transform;
      }
    });

    ticking = false;
  };

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  updateParallax(); // Initial call
}

/**
 * Clean up observers and event listeners
 */
export function cleanupScrollAnimations(observer: IntersectionObserver | null): void {
  if (observer) {
    observer.disconnect();
  }
}

/**
 * Batch animation initialization for better performance
 */
export function initAllScrollAnimations(): void {
  // Initialize scroll-triggered animations
  initScrollAnimations('.animate-on-scroll');

  // Initialize parallax effects
  initParallaxScroll('.parallax');

  // Add stagger delays to groups
  const staggerGroups = document.querySelectorAll('[data-stagger-group]');
  staggerGroups.forEach((group) => {
    const children = group.querySelectorAll('.animate-on-scroll');
    const delay = parseInt(group.getAttribute('data-stagger-delay') || '100');
    addStaggerDelay(children, delay);
  });
}
