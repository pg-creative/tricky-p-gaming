/**
 * Particle Effects Utilities
 * Helper functions for randomization and particle calculations
 */

export interface ParticlePosition {
  x: number;
  y: number;
}

export interface AnimationTiming {
  delay: number;
  duration: number;
}

/**
 * Generate a random position within viewport bounds
 * @param marginPercent - Percentage of viewport to use as margin (0-100)
 */
export function randomPosition(marginPercent: number = 0): ParticlePosition {
  const margin = marginPercent / 100;
  const xMin = margin * 100;
  const xMax = 100 - margin * 100;
  const yMin = margin * 100;
  const yMax = 100 - margin * 100;

  return {
    x: Math.random() * (xMax - xMin) + xMin,
    y: Math.random() * (yMax - yMin) + yMin,
  };
}

/**
 * Generate random animation timing
 * @param minDelay - Minimum delay in milliseconds
 * @param maxDelay - Maximum delay in milliseconds
 * @param minDuration - Minimum duration in milliseconds
 * @param maxDuration - Maximum duration in milliseconds
 */
export function randomAnimationTiming(
  minDelay: number = 0,
  maxDelay: number = 5000,
  minDuration: number = 1000,
  maxDuration: number = 3000
): AnimationTiming {
  return {
    delay: Math.random() * (maxDelay - minDelay) + minDelay,
    duration: Math.random() * (maxDuration - minDuration) + minDuration,
  };
}

/**
 * Generate a random value within a range
 */
export function randomRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

/**
 * Generate random shooting star trajectory
 * Returns start and end positions for a diagonal streak
 */
export function randomShootingStarPath(): {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  angle: number;
} {
  // Determine starting edge (top or right)
  const startFromTop = Math.random() > 0.5;

  let startX: number, startY: number, endX: number, endY: number;

  if (startFromTop) {
    // Start from top, move diagonally down
    startX = randomRange(20, 80);
    startY = -10;
    endX = startX + randomRange(-40, 40);
    endY = randomRange(60, 120);
  } else {
    // Start from right, move diagonally left
    startX = 110;
    startY = randomRange(10, 50);
    endX = randomRange(-20, 40);
    endY = startY + randomRange(20, 60);
  }

  // Calculate angle for rotation
  const angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);

  return { startX, startY, endX, endY, angle };
}

/**
 * Generate random size for particles
 */
export function randomSize(minSize: number, maxSize: number): number {
  return randomRange(minSize, maxSize);
}

/**
 * Select random item from array
 */
export function randomChoice<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

/**
 * Generate random opacity value
 */
export function randomOpacity(min: number = 0.3, max: number = 0.8): number {
  return randomRange(min, max);
}
