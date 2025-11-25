import { useEffect, useRef } from 'react';
import './FloatingParticles.css';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

/**
 * FloatingParticles Component
 *
 * Creates a subtle cosmic dust effect with floating particles
 * for the deep space nebula aesthetic.
 *
 * Features:
 * - Performance optimized with CSS transforms
 * - Limited to 25 particles for smooth 60fps
 * - Subtle movement (slow float upward and side to side)
 * - Random sizing and positioning for organic feel
 */
export default function FloatingParticles() {
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    // Generate particles only once on mount
    const particles: Particle[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // Random horizontal position (%)
      y: Math.random() * 100, // Random vertical start position (%)
      size: Math.random() * 3 + 1, // Size between 1-4px
      duration: Math.random() * 20 + 15, // Animation duration 15-35s
      delay: Math.random() * 5, // Random delay 0-5s for staggered start
      opacity: Math.random() * 0.4 + 0.1, // Opacity between 0.1-0.5
    }));

    particlesRef.current = particles;
  }, []);

  return (
    <div className="floating-particles" aria-hidden="true">
      {particlesRef.current.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
