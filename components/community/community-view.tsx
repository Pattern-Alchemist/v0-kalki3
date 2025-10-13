"use client"

import { useState } from "react"
import { GlassCard } from "../glass-card"
import { ScrollReveal } from "../scroll-reveal"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, Heart, Share2, Users } from "lucide-react"
import { toast } from "sonner"

interface Post {
  id: string
  author: string
  avatar: string
  content: string
  timestamp: string
  likes: number
  replies: number
  category: string
}

const MOCK_POSTS: Post[] = [
  {
    id: "1",
    author: "Luna Star",
    avatar: "🌙",
    content:
      "Just had an amazing Mercury retrograde experience! Instead of chaos, I used it for reflection and journaling. Anyone else finding the silver lining?",
    timestamp: "2 hours ago",
    likes: 24,
    replies: 8,
    category: "Planetary Movements",
  },
  {
    id: "2",
    author: "Solar Phoenix",
    avatar: "☀️",
    content:
      "Can anyone recommend good resources for learning about house systems? I'm torn between Placidus and Whole Sign.",
    timestamp: "5 hours ago",
    likes: 15,
    replies: 12,
    category: "Learning",
  },
  {
    id: "3",
    author: "Cosmic Dreamer",
    avatar: "✨",
    content:
      "Full moon rituals tonight! I'm doing a releasing ceremony with bay leaves. What are your favorite full moon practices?",
    timestamp: "1 day ago",
    likes: 42,
    replies: 19,
    category: "Rituals & Practices",
  },
]

export function CommunityView() {
  const [posts, setPosts] = useState(MOCK_POSTS)
  const [newPost, setNewPost] = useState("")

  const handlePost = () => {
    if (!newPost.trim()) return

    const post: Post = {
      id: Date.now().toString(),
      author: "You",
      avatar: "🌟",
      content: newPost,
      timestamp: "Just now",
      likes: 0,
      replies: 0,
      category: "General",
    }

    setPosts([post, ...posts])
    setNewPost("")
    toast.success("Post shared with the community!")
  }

  const handleLike = (postId: string) => {
    setPosts(posts.map((p) => (p.id === postId ? { ...p, likes: p.likes + 1 } : p)))
    toast.success("Post liked!")
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <Users className="h-12 w-12 mx-auto mb-4 text-cyan-400" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Community
            </h1>
            <p className="text-muted-foreground mt-4 text-lg">Connect with fellow cosmic explorers</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <GlassCard className="p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Share Your Thoughts</h2>
            <Textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="What's on your mind? Share your cosmic insights..."
              rows={4}
              className="mb-4"
            />
            <Button onClick={handlePost} disabled={!newPost.trim()}>
              Post to Community
            </Button>
          </GlassCard>
        </ScrollReveal>

        <div className="space-y-4">
          {posts.map((post, index) => (
            <ScrollReveal key={post.id} delay={index * 50}>
              <GlassCard className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{post.avatar}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="font-semibold">{post.author}</h3>
                        <p className="text-sm text-muted-foreground">{post.timestamp}</p>
                      </div>
                      <span className="text-xs px-2 py-1 rounded-full bg-cyan-400/20 text-cyan-400">
                        {post.category}
                      </span>
                    </div>
                    <p className="mb-4 leading-relaxed">{post.content}</p>
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="sm" onClick={() => handleLike(post.id)} className="gap-2">
                        <Heart className="h-4 w-4" />
                        {post.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <MessageSquare className="h-4 w-4" />
                        {post.replies}
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Share2 className="h-4 w-4" />
                        Share
                      </Button>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
