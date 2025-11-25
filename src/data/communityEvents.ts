/**
 * Community Events Data
 *
 * Stores information about community events including tournaments,
 * co-op nights, challenge runs, and other community activities.
 */

export interface CommunityEvent {
  id: string;
  title: string;
  description: string;
  date: string; // ISO 8601 format
  type: 'tournament' | 'co-op-night' | 'challenge-run' | 'community-gathering' | 'stream-event';
  participants?: number;
  status?: 'upcoming' | 'ongoing' | 'completed';
}

export const communityEvents: CommunityEvent[] = [
  {
    id: 'evt-001',
    title: 'Elden Ring Tournament: Shadow of the Erdtree',
    description: 'Test your skills in our monthly Elden Ring PvP tournament. Winner takes all bragging rights and exclusive Discord role!',
    date: '2025-11-22T19:00:00Z',
    type: 'tournament',
    participants: 24,
    status: 'upcoming'
  },
  {
    id: 'evt-002',
    title: 'Co-op Friday: Deep Rock Galactic',
    description: 'Rock and Stone! Join us for chaotic co-op mining adventures. All skill levels welcome!',
    date: '2025-11-18T21:00:00Z',
    type: 'co-op-night',
    participants: 12,
    status: 'upcoming'
  },
  {
    id: 'evt-003',
    title: 'Dark Souls Challenge Run',
    description: 'Community challenge: Beat Dark Souls using only broken straight sword. Stream your attempts and share your suffering!',
    date: '2025-11-20T18:00:00Z',
    type: 'challenge-run',
    participants: 8,
    status: 'upcoming'
  },
  {
    id: 'evt-004',
    title: 'Community Game Night: Among Us',
    description: 'Who can you trust? Join us for social deduction, betrayal, and lots of laughs.',
    date: '2025-11-25T20:00:00Z',
    type: 'community-gathering',
    participants: 16,
    status: 'upcoming'
  },
  {
    id: 'evt-005',
    title: 'Baldur\'s Gate 3 Character Contest',
    description: 'Share your most creative BG3 character builds and backstories. Community votes for the winner!',
    date: '2025-11-28T19:00:00Z',
    type: 'stream-event',
    participants: 32,
    status: 'upcoming'
  },
  {
    id: 'evt-006',
    title: 'Bloodborne Speedrun Race',
    description: 'Monthly speedrun competition! Any% category. May the fastest hunter win.',
    date: '2025-11-10T18:00:00Z',
    type: 'tournament',
    participants: 18,
    status: 'completed'
  }
];

/**
 * Helper function to get upcoming events
 */
export function getUpcomingEvents(): CommunityEvent[] {
  const now = new Date();
  return communityEvents
    .filter(event => event.status === 'upcoming' && new Date(event.date) > now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

/**
 * Helper function to get past events
 */
export function getPastEvents(): CommunityEvent[] {
  return communityEvents
    .filter(event => event.status === 'completed')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
