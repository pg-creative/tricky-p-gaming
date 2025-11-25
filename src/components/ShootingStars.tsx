import { useEffect, useState } from 'react';
import {
  randomShootingStarPath,
  randomAnimationTiming,
  randomSize,
  randomOpacity,
} from '../utils/particleEffects';

interface Star {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  angle: number;
  duration: number;
  delay: number;
  size: number;
  opacity: number;
}

export default function ShootingStars() {
  const [stars, setStars] = useState<Star[]>([]);
  const maxStars = 5;
  const minStars = 3;

  useEffect(() => {
    // Initialize stars
    const initialStars: Star[] = [];
    const starCount = Math.floor(Math.random() * (maxStars - minStars + 1)) + minStars;

    for (let i = 0; i < starCount; i++) {
      const path = randomShootingStarPath();
      const timing = randomAnimationTiming(
        i * 2000, // Stagger initial delays
        i * 2000 + 5000,
        1500, // Min duration
        3500  // Max duration
      );

      initialStars.push({
        id: i,
        ...path,
        duration: timing.duration,
        delay: timing.delay,
        size: randomSize(60, 120),
        opacity: randomOpacity(0.5, 0.9),
      });
    }

    setStars(initialStars);

    // Regenerate stars periodically
    const regenerateInterval = setInterval(() => {
      setStars((currentStars) => {
        const newStars = currentStars.map((star) => {
          const path = randomShootingStarPath();
          const timing = randomAnimationTiming(0, 3000, 1500, 3500);

          return {
            ...star,
            ...path,
            duration: timing.duration,
            delay: timing.delay,
            size: randomSize(60, 120),
            opacity: randomOpacity(0.5, 0.9),
          };
        });
        return newStars;
      });
    }, 8000); // Regenerate every 8 seconds

    return () => clearInterval(regenerateInterval);
  }, []);

  return (
    <div className="shooting-stars-container">
      {stars.map((star) => (
        <div
          key={star.id}
          className="shooting-star"
          style={{
            '--start-x': `${star.startX}%`,
            '--start-y': `${star.startY}%`,
            '--end-x': `${star.endX}%`,
            '--end-y': `${star.endY}%`,
            '--angle': `${star.angle}deg`,
            '--duration': `${star.duration}ms`,
            '--delay': `${star.delay}ms`,
            '--size': `${star.size}px`,
            '--opacity': star.opacity,
          } as React.CSSProperties}
        />
      ))}

      <style>{`
        .shooting-stars-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }

        .shooting-star {
          position: absolute;
          width: var(--size);
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, var(--opacity)) 20%,
            rgba(147, 197, 253, var(--opacity)) 60%,
            transparent
          );
          border-radius: 50%;
          filter: blur(1px);
          box-shadow:
            0 0 8px rgba(147, 197, 253, 0.8),
            0 0 16px rgba(147, 197, 253, 0.4);
          transform:
            translate(var(--start-x), var(--start-y))
            rotate(var(--angle));
          will-change: transform, opacity;
          animation: shoot var(--duration) ease-in var(--delay) infinite;
        }

        .shooting-star::before {
          content: '';
          position: absolute;
          top: -1px;
          left: 0;
          width: 100%;
          height: 4px;
          background: radial-gradient(
            ellipse at center,
            rgba(255, 255, 255, 0.6) 0%,
            rgba(147, 197, 253, 0.3) 40%,
            transparent 70%
          );
          filter: blur(2px);
        }

        .shooting-star::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 4px;
          height: 4px;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 1) 0%,
            rgba(147, 197, 253, 0.8) 30%,
            transparent 70%
          );
          border-radius: 50%;
          filter: blur(1px);
          box-shadow: 0 0 12px rgba(147, 197, 253, 1);
        }

        @keyframes shoot {
          0% {
            transform:
              translate(var(--start-x), var(--start-y))
              rotate(var(--angle));
            opacity: 0;
          }
          10% {
            opacity: var(--opacity);
          }
          90% {
            opacity: var(--opacity);
          }
          100% {
            transform:
              translate(var(--end-x), var(--end-y))
              rotate(var(--angle));
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .shooting-star {
            animation: none;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
