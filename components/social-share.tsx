"use client"

import { Button } from "@/components/ui/button"
import { Share2, Facebook, Twitter, LinkIcon } from "lucide-react"
import { toast } from "sonner"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface SocialShareProps {
  title: string
  url?: string
}

export function SocialShare({ title, url }: SocialShareProps) {
  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "")

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl)
    toast.success("Link copied to clipboard!")
  }

  const handleShare = (platform: string) => {
    let shareLink = ""
    const encodedUrl = encodeURIComponent(shareUrl)
    const encodedTitle = encodeURIComponent(title)

    switch (platform) {
      case "facebook":
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
        break
      case "twitter":
        shareLink = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
        break
    }

    if (shareLink) {
      window.open(shareLink, "_blank", "width=600,height=400")
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
          <Share2 className="h-4 w-4" />
          Share
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleShare("facebook")} className="gap-2">
          <Facebook className="h-4 w-4" />
          Share on Facebook
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleShare("twitter")} className="gap-2">
          <Twitter className="h-4 w-4" />
          Share on Twitter
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleCopyLink} className="gap-2">
          <LinkIcon className="h-4 w-4" />
          Copy Link
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
