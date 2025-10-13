export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  date: string
  image: string
  author: string
  category: string
  readTime: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Understanding Your Rising Sign",
    slug: "understanding-your-rising-sign",
    excerpt: "Discover how your rising sign shapes your personality and first impressions.",
    content: `Your rising sign, also known as your ascendant, is the zodiac sign that was rising on the eastern horizon at the exact moment of your birth. This crucial element of your birth chart represents how you present yourself to the world and how others perceive you.

## What is a Rising Sign?

The rising sign is one of the three most important placements in your natal chart, alongside your Sun and Moon signs. While your Sun sign represents your core identity and your Moon sign reflects your emotional nature, your rising sign governs your outward personality and physical appearance.

## How to Find Your Rising Sign

To calculate your rising sign accurately, you need three pieces of information:
- Your exact birth date
- Your exact birth time
- Your birth location

The rising sign changes approximately every two hours, which is why knowing your exact birth time is crucial for an accurate reading.

## The Influence of Your Rising Sign

Your ascendant influences many aspects of your life:
- **First Impressions**: How strangers perceive you
- **Physical Appearance**: Your style and mannerisms
- **Life Approach**: Your general attitude toward new experiences
- **Personal Goals**: The path you naturally gravitate toward

Understanding your rising sign can provide valuable insights into why you might feel different from your Sun sign description and help you embrace your authentic self.`,
    date: "Sep 21, 2025",
    image: "/images/blog/rising-sign.jpg",
    author: "AstroKalki",
    category: "Astrology Basics",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "Retrogrades: Myths and Truths",
    slug: "retrogrades-myths-and-truths",
    excerpt: "Separating fact from fiction about planetary retrogrades and their real effects.",
    content: `Planetary retrogrades have gained a reputation for causing chaos and disruption, but understanding the truth behind these astronomical events can help you navigate them with confidence.

## What is a Retrograde?

A retrograde occurs when a planet appears to move backward in the sky from our perspective on Earth. This is an optical illusion caused by the different orbital speeds of the planets.

## Common Myths

### Myth 1: Retrogrades Are Always Bad
Reality: Retrogrades are periods of review and reflection, not inherently negative events.

### Myth 2: Mercury Retrograde Ruins Everything
Reality: While communication and technology may require extra attention, retrogrades offer opportunities for growth.

## How to Work With Retrogrades

Instead of fearing retrogrades, use them as opportunities to:
- Review and revise projects
- Reconnect with old friends
- Reflect on personal growth
- Rest and recharge

Understanding retrogrades empowers you to work with cosmic energy rather than against it.`,
    date: "Sep 10, 2025",
    image: "/images/blog/retrogrades.jpg",
    author: "AstroKalki",
    category: "Planetary Movements",
    readTime: "4 min read",
  },
  {
    id: "3",
    title: "Choosing the Right Gemstone",
    slug: "choosing-the-right-gemstone",
    excerpt: "A comprehensive guide to selecting gemstones based on your astrological chart.",
    content: `Gemstones have been used for centuries to enhance positive energies and provide protection. Learn how to choose the perfect stone for your unique astrological makeup.

## Gemstones and Astrology

Each planet in astrology is associated with specific gemstones that can amplify its positive qualities and mitigate challenging aspects.

## Choosing by Sun Sign

### Fire Signs (Aries, Leo, Sagittarius)
- Ruby for vitality and courage
- Carnelian for creativity and passion
- Citrine for abundance and joy

### Earth Signs (Taurus, Virgo, Capricorn)
- Emerald for growth and prosperity
- Jade for stability and wisdom
- Tiger's Eye for grounding and protection

### Air Signs (Gemini, Libra, Aquarius)
- Aquamarine for communication and clarity
- Lapis Lazuli for intuition and truth
- Clear Quartz for mental clarity

### Water Signs (Cancer, Scorpio, Pisces)
- Moonstone for emotional balance
- Amethyst for spiritual connection
- Pearl for nurturing and protection

## How to Use Your Gemstone

- Wear as jewelry close to your skin
- Meditate with the stone
- Place in your living or working space
- Cleanse regularly under moonlight

Remember, the most important factor is your personal connection to the stone.`,
    date: "Aug 29, 2025",
    image: "/images/blog/gemstone-astrology.jpg",
    author: "AstroKalki",
    category: "Crystals & Gems",
    readTime: "6 min read",
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts
}
