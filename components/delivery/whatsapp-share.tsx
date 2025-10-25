'use client'
import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
export function WhatsAppShare({ reportTitle, reportSummary }: any) {
  return <Button onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(`🔮 ${reportTitle}\n${reportSummary}\n✨ AstroKalki.com`)}`, '_blank')} variant="outline" className="w-full"><MessageCircle className="mr-2 h-4 w-4" />Share</Button>
}
