'use client'
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'

interface EmailShareProps {
  horoscope: any
  recipientEmail?: string
}

export function EmailShare({ horoscope, recipientEmail }: EmailShareProps) {
  const formatEmailBody = (data: any) => {
    const lines = [
      `Dear ${data.name || 'Friend'},`,
      '',
      'Here is your personalized horoscope report from AstroKalki.',
      '',
      'Birth Details:',
      `Date: ${new Date(data.birthDate).toLocaleDateString()}`,
      `Place: ${data.birthPlace || 'N/A'}`,
      `Time: ${data.birthTime || 'N/A'}`,
      '',
      'Key Insights:'
    ]
    if (data.predictions) {
      data.predictions.forEach((p: any, i: number) => {
        lines.push(`${i + 1}. ${p.title || p.text}`)
      })
    }
    lines.push('', 'For more insights: https://www.astrokalki.com', '', 'Best regards,', 'AstroKalki Team')
    return lines.join('\n')
  }

  const shareViaEmail = () => {
    const subject = encodeURIComponent(`Your Horoscope Report - ${horoscope.name || 'AstroKalki'}`)
    const body = encodeURIComponent(formatEmailBody(horoscope))
    window.location.href = `mailto:${recipientEmail || ''}?subject=${subject}&body=${body}`
  }

  return (
    <Button onClick={shareViaEmail} variant="outline" className="gap-2">
      <Mail className="h-4 w-4" />
      Share via Email
    </Button>
  )
}
