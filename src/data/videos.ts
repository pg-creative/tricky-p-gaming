export interface Video {
  id: string;
  title: string;
  platform: 'youtube' | 'twitch';
  date: string;
  duration: string;
  game: string;
  thumbnail: string;
  views: number;
  isHighlight?: boolean;
}

export const videos: Video[] = [
  {
    id: '1',
    title: 'Epic Victory Royale - Full Squad Gameplay',
    platform: 'youtube',
    date: '2025-11-15',
    duration: '45:32',
    game: 'Fortnite',
    thumbnail: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    views: 15420,
    isHighlight: true
  },
  {
    id: '2',
    title: 'Speedrun Attempt - New Personal Best!',
    platform: 'twitch',
    date: '2025-11-14',
    duration: '2:15:48',
    game: 'Celeste',
    thumbnail: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    views: 8920
  },
  {
    id: '3',
    title: 'Cozy Sunday Stream - Chat & Chill',
    platform: 'twitch',
    date: '2025-11-13',
    duration: '3:42:10',
    game: 'Stardew Valley',
    thumbnail: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    views: 12350,
    isHighlight: true
  },
  {
    id: '4',
    title: 'Ranked Grind - Road to Diamond',
    platform: 'youtube',
    date: '2025-11-12',
    duration: '1:28:15',
    game: 'Valorant',
    thumbnail: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    views: 22100
  },
  {
    id: '5',
    title: 'First Playthrough - Horror Game Reactions',
    platform: 'youtube',
    date: '2025-11-11',
    duration: '52:03',
    game: 'Resident Evil Village',
    thumbnail: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    views: 18750
  },
  {
    id: '6',
    title: 'Building the Ultimate Base - Survival Series Ep. 12',
    platform: 'youtube',
    date: '2025-11-10',
    duration: '38:44',
    game: 'Minecraft',
    thumbnail: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    views: 9840
  },
  {
    id: '7',
    title: 'Tournament Finals - Best of 5',
    platform: 'twitch',
    date: '2025-11-09',
    duration: '4:12:30',
    game: 'Rocket League',
    thumbnail: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    views: 31200,
    isHighlight: true
  },
  {
    id: '8',
    title: 'Tips & Tricks for Beginners',
    platform: 'youtube',
    date: '2025-11-08',
    duration: '15:42',
    game: 'Apex Legends',
    thumbnail: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    views: 5620
  },
  {
    id: '9',
    title: 'Late Night Chill Stream - Q&A Session',
    platform: 'twitch',
    date: '2025-11-07',
    duration: '2:55:18',
    game: 'Just Chatting',
    thumbnail: 'linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)',
    views: 14200
  },
  {
    id: '10',
    title: 'New Update First Look - Full Review',
    platform: 'youtube',
    date: '2025-11-06',
    duration: '42:18',
    game: 'Genshin Impact',
    thumbnail: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
    views: 11450
  },
  {
    id: '11',
    title: 'Viewer Games - Playing YOUR Levels!',
    platform: 'twitch',
    date: '2025-11-05',
    duration: '3:18:45',
    game: 'Super Mario Maker 2',
    thumbnail: 'linear-gradient(135deg, #f77062 0%, #fe5196 100%)',
    views: 7830
  },
  {
    id: '12',
    title: 'Story Mode Complete - Final Boss & Ending',
    platform: 'youtube',
    date: '2025-11-04',
    duration: '1:15:22',
    game: 'God of War Ragnarok',
    thumbnail: 'linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)',
    views: 19600
  },
  {
    id: '13',
    title: 'Challenge Run - No Damage Attempt',
    platform: 'youtube',
    date: '2025-11-03',
    duration: '56:30',
    game: 'Elden Ring',
    thumbnail: 'linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)',
    views: 28400,
    isHighlight: true
  },
  {
    id: '14',
    title: 'Morning Stream - Coffee & Games',
    platform: 'twitch',
    date: '2025-11-02',
    duration: '2:30:12',
    game: 'Animal Crossing',
    thumbnail: 'linear-gradient(135deg, #e9defa 0%, #fbfcdb 100%)',
    views: 6720
  },
  {
    id: '15',
    title: 'Multiplayer Madness with Friends',
    platform: 'youtube',
    date: '2025-11-01',
    duration: '48:55',
    game: 'Among Us',
    thumbnail: 'linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)',
    views: 13890
  },
  {
    id: '16',
    title: 'Pro Player Analysis - Learning from the Best',
    platform: 'youtube',
    date: '2025-10-31',
    duration: '32:18',
    game: 'League of Legends',
    thumbnail: 'linear-gradient(135deg, #9890e3 0%, #b1f4cf 100%)',
    views: 10240
  },
  {
    id: '17',
    title: 'Halloween Special - Spooky Game Marathon',
    platform: 'twitch',
    date: '2025-10-30',
    duration: '5:45:00',
    game: 'Various Horror Games',
    thumbnail: 'linear-gradient(135deg, #ebc0fd 0%, #d9ded8 100%)',
    views: 25680,
    isHighlight: true
  },
  {
    id: '18',
    title: 'Unboxing New Gaming Setup!',
    platform: 'youtube',
    date: '2025-10-29',
    duration: '18:24',
    game: 'IRL',
    thumbnail: 'linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)',
    views: 8930
  },
  {
    id: '19',
    title: 'Subscriber Saturday - Custom Game Modes',
    platform: 'twitch',
    date: '2025-10-28',
    duration: '4:05:33',
    game: 'Counter-Strike 2',
    thumbnail: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
    views: 16450
  },
  {
    id: '20',
    title: 'Beginner to Pro in One Stream - Learning Journey',
    platform: 'youtube',
    date: '2025-10-27',
    duration: '1:42:50',
    game: 'Chess',
    thumbnail: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
    views: 12100
  }
];

export const featuredVideo: Video = videos[0];

export const recentStreams = videos.filter(v => v.platform === 'twitch').slice(0, 8);
export const youtubeVideos = videos.filter(v => v.platform === 'youtube').slice(0, 8);
export const highlights = videos.filter(v => v.isHighlight);
