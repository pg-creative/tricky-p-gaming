/**
 * Games Data
 * Full library of games featured on Tricky P Gaming
 * Focuses on Soulslikes, RPGs, and Indie games
 */

export interface Game {
  id: string;
  slug: string;
  title: string;
  genre: string[];
  description: string;
  rating: number; // Out of 10
  playTime: number; // Hours
  status: 'playing' | 'completed' | 'backlog';
  platforms: string[];
  releaseYear: number;
  completion: number; // Percentage
  deaths?: number;
  achievements?: number;
  totalAchievements?: number;
  favoriteBoss?: string;
  // Color scheme for individual game pages
  colorScheme: {
    primary: string;
    secondary: string;
    accent: string;
  };
  featured?: boolean;
}

export const games: Game[] = [
  {
    id: '1',
    slug: 'elden-ring',
    title: 'Elden Ring',
    genre: ['Soulslike', 'RPG', 'Open World'],
    description: 'FromSoftware\'s masterpiece meets open world. The Lands Between await, Tarnished.',
    rating: 10,
    playTime: 247,
    status: 'completed',
    platforms: ['PC', 'PlayStation', 'Xbox'],
    releaseYear: 2022,
    completion: 100,
    deaths: 892,
    achievements: 42,
    totalAchievements: 42,
    favoriteBoss: 'Malenia, Blade of Miquella',
    colorScheme: {
      primary: '#D4AF37', // Gold
      secondary: '#FF8C00', // Dark Orange
      accent: '#FFD700' // Bright Gold
    },
    featured: true
  },
  {
    id: '2',
    slug: 'dark-souls-3',
    title: 'Dark Souls III',
    genre: ['Soulslike', 'Action RPG'],
    description: 'The culmination of the Dark Souls trilogy. Link the flame or let it fade.',
    rating: 9.5,
    playTime: 186,
    status: 'completed',
    platforms: ['PC', 'PlayStation', 'Xbox'],
    releaseYear: 2016,
    completion: 100,
    deaths: 567,
    achievements: 43,
    totalAchievements: 43,
    favoriteBoss: 'Sister Friede',
    colorScheme: {
      primary: '#8B4513', // Saddle Brown
      secondary: '#FF4500', // Orange Red
      accent: '#FFA500' // Orange
    }
  },
  {
    id: '3',
    slug: 'bloodborne',
    title: 'Bloodborne',
    genre: ['Soulslike', 'Action RPG', 'Horror'],
    description: 'A hunter must hunt. Gothic horror meets FromSoftware\'s brutal combat.',
    rating: 10,
    playTime: 134,
    status: 'completed',
    platforms: ['PlayStation'],
    releaseYear: 2015,
    completion: 95,
    deaths: 423,
    achievements: 28,
    totalAchievements: 34,
    favoriteBoss: 'Ludwig, the Accursed',
    colorScheme: {
      primary: '#8B0000', // Dark Red
      secondary: '#4B0082', // Indigo
      accent: '#DC143C' // Crimson
    }
  },
  {
    id: '4',
    slug: 'hollow-knight',
    title: 'Hollow Knight',
    genre: ['Metroidvania', 'Indie', 'Platformer'],
    description: 'Descend into Hallownest. A beautifully haunting metroidvania masterpiece.',
    rating: 9.5,
    playTime: 89,
    status: 'completed',
    platforms: ['PC', 'Switch', 'PlayStation', 'Xbox'],
    releaseYear: 2017,
    completion: 112, // Over 100% for completion achievements
    deaths: 1247,
    achievements: 63,
    totalAchievements: 63,
    favoriteBoss: 'Nightmare King Grimm',
    colorScheme: {
      primary: '#00BFFF', // Deep Sky Blue
      secondary: '#E0F7FA', // Pale Blue
      accent: '#1E90FF' // Dodger Blue
    }
  },
  {
    id: '5',
    slug: 'hades',
    title: 'Hades',
    genre: ['Roguelike', 'Action', 'Indie'],
    description: 'Defy the god of the dead. The ultimate roguelike with unmatched storytelling.',
    rating: 10,
    playTime: 156,
    status: 'playing',
    platforms: ['PC', 'Switch', 'PlayStation', 'Xbox'],
    releaseYear: 2020,
    completion: 87,
    deaths: 2341,
    achievements: 45,
    totalAchievements: 49,
    colorScheme: {
      primary: '#DC143C', // Crimson
      secondary: '#4B0082', // Indigo
      accent: '#FF1493' // Deep Pink
    }
  },
  {
    id: '6',
    slug: 'baldurs-gate-3',
    title: 'Baldur\'s Gate 3',
    genre: ['RPG', 'CRPG', 'D&D'],
    description: 'Roll for initiative. The definitive D&D experience in video game form.',
    rating: 10,
    playTime: 203,
    status: 'playing',
    platforms: ['PC', 'PlayStation', 'Xbox'],
    releaseYear: 2023,
    completion: 64,
    achievements: 32,
    totalAchievements: 54,
    colorScheme: {
      primary: '#4B0082', // Indigo
      secondary: '#8B008B', // Dark Magenta
      accent: '#9370DB' // Medium Purple
    },
    featured: true
  },
  {
    id: '7',
    slug: 'dark-souls',
    title: 'Dark Souls',
    genre: ['Soulslike', 'Action RPG'],
    description: 'The one that started it all. Prepare to die and git gud.',
    rating: 9,
    playTime: 97,
    status: 'completed',
    platforms: ['PC', 'PlayStation', 'Xbox', 'Switch'],
    releaseYear: 2011,
    completion: 100,
    deaths: 389,
    achievements: 41,
    totalAchievements: 41,
    favoriteBoss: 'Ornstein & Smough',
    colorScheme: {
      primary: '#696969', // Dim Gray
      secondary: '#D3D3D3', // Light Gray
      accent: '#A9A9A9' // Dark Gray
    }
  },
  {
    id: '8',
    slug: 'sekiro',
    title: 'Sekiro: Shadows Die Twice',
    genre: ['Soulslike', 'Action', 'Stealth'],
    description: 'Hesitation is defeat. Master the blade and restore your honor.',
    rating: 9.5,
    playTime: 78,
    status: 'completed',
    platforms: ['PC', 'PlayStation', 'Xbox'],
    releaseYear: 2019,
    completion: 100,
    deaths: 612,
    achievements: 34,
    totalAchievements: 34,
    favoriteBoss: 'Isshin, the Sword Saint',
    colorScheme: {
      primary: '#8B4513', // Saddle Brown
      secondary: '#CD5C5C', // Indian Red
      accent: '#F4A460' // Sandy Brown
    }
  },
  {
    id: '9',
    slug: 'the-witcher-3',
    title: 'The Witcher 3: Wild Hunt',
    genre: ['RPG', 'Open World', 'Action'],
    description: 'Toss a coin to your Witcher. The best open-world RPG ever crafted.',
    rating: 10,
    playTime: 267,
    status: 'completed',
    platforms: ['PC', 'PlayStation', 'Xbox', 'Switch'],
    releaseYear: 2015,
    completion: 100,
    achievements: 78,
    totalAchievements: 78,
    colorScheme: {
      primary: '#2F4F4F', // Dark Slate Gray
      secondary: '#8B4789', // Purple
      accent: '#DAA520' // Goldenrod
    }
  },
  {
    id: '10',
    slug: 'celeste',
    title: 'Celeste',
    genre: ['Platformer', 'Indie'],
    description: 'Climb the mountain. A touching story wrapped in pixel-perfect platforming.',
    rating: 9,
    playTime: 43,
    status: 'completed',
    platforms: ['PC', 'Switch', 'PlayStation', 'Xbox'],
    releaseYear: 2018,
    completion: 100,
    deaths: 8764,
    achievements: 34,
    totalAchievements: 34,
    colorScheme: {
      primary: '#FF69B4', // Hot Pink
      secondary: '#87CEEB', // Sky Blue
      accent: '#FFB6C1' // Light Pink
    }
  },
  {
    id: '11',
    slug: 'lies-of-p',
    title: 'Lies of P',
    genre: ['Soulslike', 'Action RPG'],
    description: 'A dark retelling of Pinocchio. The best soulslike not made by FromSoftware.',
    rating: 8.5,
    playTime: 52,
    status: 'playing',
    platforms: ['PC', 'PlayStation', 'Xbox'],
    releaseYear: 2023,
    completion: 73,
    deaths: 287,
    achievements: 21,
    totalAchievements: 42,
    colorScheme: {
      primary: '#2F4F4F', // Dark Slate Gray
      secondary: '#8B7355', // Burlywood
      accent: '#CD853F' // Peru
    }
  },
  {
    id: '12',
    slug: 'dead-cells',
    title: 'Dead Cells',
    genre: ['Roguelike', 'Metroidvania', 'Indie'],
    description: 'Kill. Die. Learn. Repeat. The perfect marriage of roguelike and metroidvania.',
    rating: 9,
    playTime: 112,
    status: 'backlog',
    platforms: ['PC', 'Switch', 'PlayStation', 'Xbox'],
    releaseYear: 2018,
    completion: 45,
    deaths: 1876,
    achievements: 18,
    totalAchievements: 50,
    colorScheme: {
      primary: '#00FF00', // Lime
      secondary: '#006400', // Dark Green
      accent: '#32CD32' // Lime Green
    }
  }
];

// Helper function to get game by slug
export function getGameBySlug(slug: string): Game | undefined {
  return games.find(game => game.slug === slug);
}

// Helper function to get games by genre
export function getGamesByGenre(genre: string): Game[] {
  if (genre === 'All') return games;
  return games.filter(game => game.genre.includes(genre));
}

// Helper function to get featured games
export function getFeaturedGames(): Game[] {
  return games.filter(game => game.featured);
}

// Helper function to sort games
export function sortGames(gamesList: Game[], sortBy: 'recent' | 'rating' | 'alphabetical'): Game[] {
  const sorted = [...gamesList];

  switch (sortBy) {
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'alphabetical':
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case 'recent':
    default:
      return sorted.sort((a, b) => b.releaseYear - a.releaseYear);
  }
}
