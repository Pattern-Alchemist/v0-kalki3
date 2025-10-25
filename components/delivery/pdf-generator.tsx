'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
export function PDFGenerator({ contentRef, filename, price = 499, isPaid = false }: any) {
  if (!isPaid) return (<div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg"><h3 className="text-xl font-semibold mb-2">Get Report</h3><p className="text-4xl font-bold text-primary mb-4">₹{price}</p><Button size="lg" onClick={() => window.location.href = '#payment'}><Download className="mr-2 h-5 w-5" />Purchase PDF</Button></div>)
  return <Button size="lg" className="w-full"><Download className="mr-2" />Download</Button>
}
