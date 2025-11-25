import { useState, useEffect } from 'react';
import './MemberSpotlight.css';

interface Member {
  id: string;
  username: string;
  avatar: string;
  quote: string;
  achievement: string;
  role?: string;
}

/**
 * MemberSpotlight Component
 *
 * Rotating carousel showcasing community member achievements
 * and contributions. Auto-rotates or can be manually navigated.
 *
 * Features:
 * - Auto-rotation every 5 seconds
 * - Manual navigation with prev/next buttons
 * - Smooth transitions
 * - Responsive design
 */
export default function MemberSpotlight() {
  const members: Member[] = [
    {
      id: 'mem-001',
      username: 'ShadowKnight92',
      avatar: '🛡️',
      quote: 'This community helped me finally beat my first Souls game. Never giving up!',
      achievement: 'First-time Souls Completionist',
      role: 'Active Member'
    },
    {
      id: 'mem-002',
      username: 'NebulaGamer',
      avatar: '🌌',
      quote: 'Found my favorite gaming crew here. The co-op nights are legendary!',
      achievement: 'Co-op Night Regular',
      role: 'Discord Moderator'
    },
    {
      id: 'mem-003',
      username: 'LootGoblin',
      avatar: '💎',
      quote: 'Won my first tournament thanks to the support from this amazing community!',
      achievement: 'Tournament Champion',
      role: 'Top Contributor'
    },
    {
      id: 'mem-004',
      username: 'PhantomRunner',
      avatar: '👻',
      quote: 'Speedrunning became so much more fun with everyone cheering me on!',
      achievement: 'Speedrun Record Holder',
      role: 'Active Member'
    },
    {
      id: 'mem-005',
      username: 'StarBorne',
      avatar: '⭐',
      quote: 'The guides and tips from the community are next level. Thank you all!',
      achievement: 'Guide Creator',
      role: 'Content Creator'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoRotating) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % members.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoRotating, members.length]);

  const goToNext = () => {
    setIsAutoRotating(false);
    setCurrentIndex((prev) => (prev + 1) % members.length);
  };

  const goToPrev = () => {
    setIsAutoRotating(false);
    setCurrentIndex((prev) => (prev - 1 + members.length) % members.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoRotating(false);
    setCurrentIndex(index);
  };

  const currentMember = members[currentIndex];

  return (
    <div className="member-spotlight">
      {/* Header */}
      <div className="spotlight-header">
        <h2 className="spotlight-title">Community Spotlight</h2>
        <p className="spotlight-subtitle">Celebrating our amazing members</p>
      </div>

      {/* Carousel */}
      <div className="spotlight-carousel">
        {/* Navigation - Previous */}
        <button
          className="nav-btn nav-prev"
          onClick={goToPrev}
          aria-label="Previous member"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {/* Member Card */}
        <div className="member-card" key={currentMember.id}>
          <div className="member-avatar">{currentMember.avatar}</div>
          <div className="member-content">
            <div className="member-header">
              <h3 className="member-username">{currentMember.username}</h3>
              {currentMember.role && (
                <span className="member-role">{currentMember.role}</span>
              )}
            </div>
            <div className="member-achievement">
              <svg className="achievement-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <span>{currentMember.achievement}</span>
            </div>
            <blockquote className="member-quote">
              "{currentMember.quote}"
            </blockquote>
          </div>
        </div>

        {/* Navigation - Next */}
        <button
          className="nav-btn nav-next"
          onClick={goToNext}
          aria-label="Next member"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="spotlight-dots">
        {members.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to member ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-rotate toggle */}
      <button
        className="auto-rotate-toggle"
        onClick={() => setIsAutoRotating(!isAutoRotating)}
        aria-label={isAutoRotating ? 'Pause auto-rotation' : 'Resume auto-rotation'}
      >
        {isAutoRotating ? (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        )}
      </button>
    </div>
  );
}
