'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Download, BadgeCheck, Lock } from 'lucide-react'

export function PDFGenerator({ contentRef, filename, price = 499, isPaid = false }) {
  const [status, setStatus] = useState<'idle' | 'generating' | 'done'>('idle')

  const generatePDF = () => {
    setStatus('generating')
    setTimeout(() => {
      setStatus('done')
      window.open('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', '_blank')
      setTimeout(() => setStatus('idle'), 2800)
    }, 1600)
  }

if (!isPaid) {
  return (
    <div className="p-6 bg-gradient-to-br from-purple-100/70 to-pink-100/70 dark:from-purple-800/30 dark:to-pink-800/30 rounded-lg border border-purple-300 dark:border-purple-700">
      <div className="mb-4">
        <div className="relative rounded-xl overflow-hidden shadow aspect-video bg-slate-100">
          <img
            src="/sample-report-preview.png" // Use a screenshot or example (add static file!)
            alt="Report Preview"
            className="w-full opacity-60 blur-sm"
          />
          <div className="absolute inset-0 flex flex-col justify-end items-center bg-black/40 p-2">
            <span className="text-white font-bold text-xl flex items-center gap-2">
              <Lock className="w-6 h-6 inline" /> Unlock full details
            </span>
            <span className="text-white/70 mt-2 text-xs">
              Sneak peek: Only the first part is visible.
            </span>
          </div>
        </div>
        <ul className="mt-4 mb-3 text-sm text-muted-foreground">
          <li>✔️ Personalized, 12-page PDF analysis</li>
          <li>✔️ Includes destiny charts & remedies</li>
          <li>✔️ Share PDF easily on WhatsApp</li>
          <li>✔️ One-time payment. Download forever!</li>
        </ul>
      </div>
      <Button
        size="lg"
        className="w-full font-bold"
        onClick={() => alert('Scan QR or pay via UPI for instant access!')}
      >
        See Full Insights & Charts – Pay ₹{price} to Unlock
      </Button>
      <p className="text-xs mt-2 text-green-700 flex items-center gap-1">
        <BadgeCheck className="text-green-600 w-4 h-4" /> 100% secure UPI – One-time only
      </p>
      <span className="block mt-1 text-xs text-red-500 font-medium italic">
        View 2/8 insights for free. Unlock ALL sections!
      </span>
    </div>
  )
}


  return (
    <Button
      onClick={generatePDF}
      size="lg"
      className="w-full font-bold flex items-center justify-center"
      disabled={status === 'generating'}
    >
      {status === 'idle' && <><Download className="mr-2" />Download your PDF</>}
      {status === 'generating' && "Generating..."}
      {status === 'done' && "Generated! Opening..."}
    </Button>
  )
}
