export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: 'Tips' | 'Reviews' | 'Tutorials' | 'News';
  slug: string;
  author: string;
  image: string;
  readTime: number;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Mastering Parries in Elden Ring: A Complete Guide",
    excerpt: "Learn the art of perfect parrying to dominate even the toughest bosses in the Lands Between. This comprehensive guide covers timing, equipment, and advanced techniques.",
    content: `
      <h2>Introduction to Parrying</h2>
      <p>Parrying is one of the most satisfying and rewarding mechanics in Elden Ring. When executed perfectly, it can turn the tide of any battle and make you feel like a true master of combat.</p>

      <h2>Best Shields for Parrying</h2>
      <p>Not all shields are created equal when it comes to parrying. The Buckler and the Golden Parry Ash of War are among the most forgiving options for beginners.</p>

      <h2>Timing is Everything</h2>
      <p>The key to successful parrying is understanding enemy attack patterns and timing your parry just before the attack connects. Practice makes perfect!</p>

      <h2>Advanced Techniques</h2>
      <p>Once you've mastered basic parrying, you can move on to prediction parries and setups that force enemies into parryable attacks.</p>
    `,
    date: "2025-11-15",
    category: "Tips",
    slug: "mastering-parries-elden-ring",
    author: "Tricky P",
    image: "/images/blog/elden-ring-parry.jpg",
    readTime: 8,
    tags: ["Elden Ring", "Soulslike", "Combat", "Guide"]
  },
  {
    id: 2,
    title: "Baldur's Gate 3 Review: A New Golden Age for CRPGs",
    excerpt: "Larian Studios has crafted a masterpiece that respects D&D's legacy while pushing the boundaries of what's possible in modern RPGs.",
    content: `
      <h2>A Labor of Love</h2>
      <p>Baldur's Gate 3 is a testament to what happens when developers are given the time and resources to realize their vision fully.</p>

      <h2>Choice and Consequence</h2>
      <p>Every decision matters in BG3, from major story choices to seemingly minor conversations. The branching narrative is staggering in scope.</p>

      <h2>Tactical Combat Excellence</h2>
      <p>The turn-based combat system faithfully adapts D&D 5E rules while making smart adjustments for video game pacing.</p>

      <h2>Verdict</h2>
      <p>Baldur's Gate 3 is not just a great CRPG—it's one of the best RPGs ever made. A must-play for any fan of the genre.</p>
    `,
    date: "2025-11-12",
    category: "Reviews",
    slug: "baldurs-gate-3-review",
    author: "Tricky P",
    image: "/images/blog/bg3-review.jpg",
    readTime: 12,
    tags: ["Baldur's Gate 3", "CRPG", "RPG", "Review"]
  },
  {
    id: 3,
    title: "How to Build Your First Gaming PC on a Budget",
    excerpt: "Step-by-step tutorial for building a capable gaming PC without breaking the bank. Perfect for beginners entering PC gaming.",
    content: `
      <h2>Planning Your Build</h2>
      <p>Before buying any parts, it's crucial to set a realistic budget and understand which components matter most for gaming performance.</p>

      <h2>Essential Components</h2>
      <p>CPU, GPU, RAM, storage, motherboard, power supply, and case—we'll break down what you need to know about each.</p>

      <h2>Assembly Tips</h2>
      <p>Building a PC is like adult LEGO. Take your time, follow instructions, and don't force anything.</p>

      <h2>First Boot and Setup</h2>
      <p>Once assembled, we'll walk through BIOS setup, OS installation, and driver updates to get you gaming ASAP.</p>
    `,
    date: "2025-11-10",
    category: "Tutorials",
    slug: "build-gaming-pc-budget",
    author: "Tricky P",
    image: "/images/blog/pc-build.jpg",
    readTime: 15,
    tags: ["PC Gaming", "Hardware", "Tutorial", "Budget"]
  },
  {
    id: 4,
    title: "Breaking: Hollow Knight Silksong Gets New Trailer",
    excerpt: "Team Cherry finally breaks silence with a stunning new trailer showcasing new areas, abilities, and a tentative release window.",
    content: `
      <h2>The Wait is Almost Over</h2>
      <p>After years of patient waiting, Hollow Knight fans finally have concrete news about Silksong's development.</p>

      <h2>What We Saw</h2>
      <p>The trailer showcased multiple new kingdoms, expanded movement abilities, and dozens of new enemies and bosses.</p>

      <h2>Release Window Announced</h2>
      <p>While not a firm date, Team Cherry indicated a Q2 2026 release window for PC and Switch.</p>

      <h2>Community Reaction</h2>
      <p>The Hollow Knight community has erupted with excitement and speculation about what the new footage reveals.</p>
    `,
    date: "2025-11-14",
    category: "News",
    slug: "hollow-knight-silksong-new-trailer",
    author: "Tricky P",
    image: "/images/blog/silksong-news.jpg",
    readTime: 5,
    tags: ["Hollow Knight", "Silksong", "Indie", "News"]
  },
  {
    id: 5,
    title: "10 Essential Tips for Dark Souls Beginners",
    excerpt: "Don't go hollow! These fundamental tips will help you survive your first journey through Lordran and beyond.",
    content: `
      <h2>Death is Learning</h2>
      <p>The most important lesson: every death teaches you something. Don't get frustrated—get better.</p>

      <h2>Level Adaptability Wisely</h2>
      <p>Vigor is your friend. Don't neglect health in favor of damage, especially early on.</p>

      <h2>Explore Thoroughly</h2>
      <p>Dark Souls rewards exploration. Check every corner, talk to every NPC, and read item descriptions.</p>

      <h2>Learn Enemy Patterns</h2>
      <p>Every enemy has tells and patterns. Take time to observe before committing to aggressive play.</p>
    `,
    date: "2025-11-08",
    category: "Tips",
    slug: "dark-souls-beginner-tips",
    author: "Tricky P",
    image: "/images/blog/dark-souls-tips.jpg",
    readTime: 10,
    tags: ["Dark Souls", "Soulslike", "Beginner", "Tips"]
  },
  {
    id: 6,
    title: "Hades Review: Roguelike Perfection",
    excerpt: "Supergiant Games delivers a masterclass in game design with this endlessly replayable journey through Greek mythology.",
    content: `
      <h2>A Perfect Gameplay Loop</h2>
      <p>Hades nails the "just one more run" feeling that defines great roguelikes, with meaningful progression and variety.</p>

      <h2>Story in a Roguelike</h2>
      <p>Who knew roguelikes could have such compelling narratives? Every death advances character relationships and reveals new lore.</p>

      <h2>Combat Feel</h2>
      <p>The combat is buttery smooth, with each weapon offering unique playstyles and countless build possibilities.</p>

      <h2>Final Thoughts</h2>
      <p>Hades is a testament to what happens when every aspect of a game is polished to perfection. Essential playing.</p>
    `,
    date: "2025-11-05",
    category: "Reviews",
    slug: "hades-review-roguelike-perfection",
    author: "Tricky P",
    image: "/images/blog/hades-review.jpg",
    readTime: 9,
    tags: ["Hades", "Roguelike", "Indie", "Review"]
  },
  {
    id: 7,
    title: "Getting Started with Game Streaming: Complete Setup Guide",
    excerpt: "Everything you need to know to start streaming your gameplay on Twitch, YouTube, or other platforms.",
    content: `
      <h2>Choosing Your Platform</h2>
      <p>Twitch, YouTube Gaming, and Kick each have their own audiences and features. We'll help you choose the right fit.</p>

      <h2>Hardware Requirements</h2>
      <p>From basic to professional setups, learn what equipment you need for quality streams at different budget levels.</p>

      <h2>Software Configuration</h2>
      <p>OBS Studio walkthrough including scenes, sources, encoding settings, and audio configuration.</p>

      <h2>Growing Your Audience</h2>
      <p>Technical setup is just the start—learn strategies for building an engaged community around your content.</p>
    `,
    date: "2025-11-03",
    category: "Tutorials",
    slug: "game-streaming-setup-guide",
    author: "Tricky P",
    image: "/images/blog/streaming-guide.jpg",
    readTime: 18,
    tags: ["Streaming", "Twitch", "Tutorial", "Content Creation"]
  },
  {
    id: 8,
    title: "Indie Spotlight: 5 Hidden Gems You Need to Play",
    excerpt: "These under-the-radar indie titles deserve way more attention. Discover your next favorite game.",
    content: `
      <h2>Why Indie Games Matter</h2>
      <p>Indie developers take risks AAA studios won't, resulting in some of the most innovative gaming experiences available.</p>

      <h2>The List</h2>
      <p>From atmospheric puzzle games to intense roguelikes, these five titles showcase the diversity and creativity of indie development.</p>

      <h2>Where to Find More</h2>
      <p>Resources and communities for discovering more hidden indie gems before they hit mainstream success.</p>

      <h2>Supporting Indie Developers</h2>
      <p>How your purchases, reviews, and word-of-mouth help indie studios continue making amazing games.</p>
    `,
    date: "2025-11-01",
    category: "Reviews",
    slug: "indie-hidden-gems",
    author: "Tricky P",
    image: "/images/blog/indie-gems.jpg",
    readTime: 11,
    tags: ["Indie", "Hidden Gems", "Reviews"]
  },
  {
    id: 9,
    title: "Major Update Coming to Elden Ring: Shadow of the Erdtree",
    excerpt: "FromSoftware announces significant balance changes and new features coming with the DLC expansion.",
    content: `
      <h2>Balance Adjustments</h2>
      <p>Several underperforming weapon classes are getting buffs, while some overpowered strategies are being toned down.</p>

      <h2>New Game Plus Changes</h2>
      <p>NG+ is getting a major overhaul with unique enemy placements and remixed boss encounters.</p>

      <h2>Quality of Life</h2>
      <p>Long-requested features like boss refights and build saving are finally being added.</p>

      <h2>DLC Details</h2>
      <p>Shadow of the Erdtree promises an area comparable in size to Limgrave with dozens of new bosses and items.</p>
    `,
    date: "2025-11-13",
    category: "News",
    slug: "elden-ring-shadow-erdtree-update",
    author: "Tricky P",
    image: "/images/blog/erdtree-update.jpg",
    readTime: 7,
    tags: ["Elden Ring", "DLC", "Update", "News"]
  },
  {
    id: 10,
    title: "Optimizing Your Game Settings for Best Performance",
    excerpt: "Maximize FPS without sacrificing visual quality. Learn which settings matter most for smooth gameplay.",
    content: `
      <h2>Understanding Graphics Settings</h2>
      <p>Not all settings impact performance equally. Learn which ones to prioritize for the best balance.</p>

      <h2>CPU vs GPU Bottlenecks</h2>
      <p>Identify whether your system is CPU or GPU limited and adjust settings accordingly.</p>

      <h2>Game-Specific Optimizations</h2>
      <p>Different engines and games have unique settings that can drastically improve performance.</p>

      <h2>Monitoring Tools</h2>
      <p>Use MSI Afterburner, RTSS, and in-game metrics to track performance and find your optimal settings.</p>
    `,
    date: "2025-10-30",
    category: "Tips",
    slug: "optimize-game-settings-performance",
    author: "Tricky P",
    image: "/images/blog/optimize-settings.jpg",
    readTime: 13,
    tags: ["Performance", "Optimization", "PC Gaming", "Tips"]
  }
];

// Helper function to get posts by category
export function getPostsByCategory(category: string): BlogPost[] {
  if (category === 'All') return blogPosts;
  return blogPosts.filter(post => post.category === category);
}

// Helper function to get a single post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

// Helper function to get related posts (same category, excluding current)
export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) return [];

  return blogPosts
    .filter(post => post.category === currentPost.category && post.slug !== currentSlug)
    .slice(0, limit);
}

// Helper function to get recent posts
export function getRecentPosts(limit: number = 5): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}
