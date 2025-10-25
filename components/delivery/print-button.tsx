'use client'
import { Button } from '@/components/ui/button'
import { Printer } from 'lucide-react'

interface PrintButtonProps {
  contentRef?: React.RefObject<HTMLElement>
}

export function PrintButton({ contentRef }: PrintButtonProps) {
  const handlePrint = () => {
    if (contentRef?.current) {
      const w = window.open('', '', 'width=800,height=600')
      if (w) {
        w.document.write('<html><head><title>Print</title>')
        w.document.write('<style>body{font-family:Arial,sans-serif;padding:20px}@media print{body{padding:0}}</style>')
        w.document.write('</head><body>')
        w.document.write(contentRef.current.innerHTML)
        w.document.write('</body></html>')
        w.document.close()
        w.print()
      }
    } else {
      window.print()
    }
  }

  return (
    <Button onClick={handlePrint} variant="outline" className="gap-2">
      <Printer className="h-4 w-4" />
      Print
    </Button>
  )
}
