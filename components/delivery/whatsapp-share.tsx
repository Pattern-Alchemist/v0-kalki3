'use client'
import { MessageCircle, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function WhatsAppShare({ reportTitle = "AstroKalki Report", reportSummary = "", showBoth = true }) {
  const baseUrl = typeof window !== 'undefined' ? window.location.href : 'https://www.astrokalki.com'
  const msg = `🌟 ${reportTitle}\n\n${reportSummary}\n🔗${baseUrl}\n--\nDecoded by AstroKalki`
  const openSelf = () => window.open("https://wa.me/?text=" + encodeURIComponent(msg), "_blank")
  const openFriend = () => window.open("https://wa.me/?text=" + encodeURIComponent("A special astro report for you! " + baseUrl), "_blank")

  return showBoth ? (
    <div className="flex gap-2">
      <Button onClick={openSelf} className="w-full" variant="default"><MessageCircle className="mr-2 h-5 w-5" />To Me</Button>
      <Button onClick={openFriend} className="w-full" variant="outline"><Share2 className="mr-2 h-5 w-5" />Share</Button>
    </div>
  ) : (
    <Button onClick={openSelf} className="w-full" variant="default"><MessageCircle className="mr-2 h-5 w-5" />Send on WhatsApp</Button>
  )
}
