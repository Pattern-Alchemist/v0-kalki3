'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Share2, Check } from 'lucide-react'

interface ShareButtonProps {
  title?: string
  text?: string
  url?: string
}

export function ShareButton({ title = 'AstroKalki Horoscope', text = 'Check out my horoscope!', url }: ShareButtonProps) {
  const [shared, setShared] = useState(false)

  const handleShare = async () => {
    const data = { title, text, url: url || window.location.href }
    try {
      if (navigator.share) {
        await navigator.share(data)
      } else {
        await navigator.clipboard.writeText(data.url)
      }
      setShared(true)
      setTimeout(() => setShared(false), 2000)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Button onClick={handleShare} variant="outline" className="gap-2">
      {shared ? (
        <>
          <Check className="h-4 w-4" />
          {navigator.share ? 'Shared!' : 'Link Copied!'}
        </>
      ) : (
        <>
          <Share2 className="h-4 w-4" />
          Share
        </>
      )}
    </Button>
  )
}
