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
      <div className="text-center p-6 bg-gradient-to-br from-purple-100/70 to-pink-100/70 dark:from-purple-800/30 dark:to-pink-800/30 rounded-lg border border-purple-300 dark:border-purple-700">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 mb-2">
          <Lock className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Unlock your Full PDF Report!</h3>
        <p className="mb-2 text-muted-foreground">Get a downloadable, shareable PDF of your reading with high-res charts & stepwise guidance.</p>
        <Button
          size="lg"
          className="w-full font-bold"
          onClick={() => alert('Please complete the payment to get your PDF!')}
        >
          Unlock PDF for ₹{price}
        </Button>
        <div className="text-xs mt-2 text-muted-foreground">
          <span className="mr-2">One-time payment</span>
          <BadgeCheck className="inline-block text-green-600 w-4 h-4" /> Secure
        </div>
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
