'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { FileDown, Loader2 } from 'lucide-react'
interface PDFGeneratorProps { horoscope: any; onGenerate?: (pdfUrl: string) => void }
export function PDFGenerator({ horoscope, onGenerate }: PDFGeneratorProps) {
  const [isGenerating, setIsGenerating] = useState(false)
  const generatePDF = async () => {
    setIsGenerating(true)
    try {
      const response = await fetch('/api/generate-pdf', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ horoscope }) })
      if (!response.ok) throw new Error('Failed')
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `horoscope-${horoscope.name || 'report'}-${new Date().toISOString().split('T')[0]}.pdf`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)
      if (onGenerate) onGenerate(url)
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to generate PDF')
    } finally {
      setIsGenerating(false)
    }
  }
  return <Button onClick={generatePDF} disabled={isGenerating} variant="outline" className="gap-2">{isGenerating ? (<><Loader2 className="h-4 w-4 animate-spin" />Generating...</>) : (<><FileDown className="h-4 w-4" />Download PDF</>)}</Button>
}
