'use client'
import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'

interface WhatsAppShareProps {
  horoscope: any
  phoneNumber?: string
}

export function WhatsAppShare({ horoscope, phoneNumber }: WhatsAppShareProps) {
  const formatHoroscopeMessage = (data: any) => {
    const lines = [
      `🔮 *Horoscope Report - ${data.name || 'Your Reading'}*`,
      '',
      `📅 Date: ${new Date(data.birthDate).toLocaleDateString()}`,
      `📍 Place: ${data.birthPlace || 'N/A'}`,
      `⏰ Time: ${data.birthTime || 'N/A'}`,
      '',
      '✨ *Key Insights:*'
    ]
    if (data.predictions?.length) {
      data.predictions.slice(0, 3).forEach((p: any, i: number) => {
        lines.push(`${i + 1}. ${p.title || p.text}`)
      })
    }
    lines.push('', 'Generated from AstroKalki', 'Visit: https://www.astrokalki.com')
    return lines.join('\n')
  }

  const shareOnWhatsApp = () => {
    const message = formatHoroscopeMessage(horoscope)
    let url = 'https://wa.me/'
    if (phoneNumber) {
      url += `${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
    } else {
      url += `?text=${encodeURIComponent(message)}`
    }
    window.open(url, '_blank')
  }

  return (
    <Button
      onClick={shareOnWhatsApp}
      variant="outline"
      className="gap-2 bg-green-50 hover:bg-green-100 dark:bg-green-950 dark:hover:bg-green-900"
    >
      <MessageCircle className="h-4 w-4" />
      Share on WhatsApp
    </Button>
  )
}
