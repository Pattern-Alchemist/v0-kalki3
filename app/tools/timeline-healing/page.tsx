'use client'
import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { PDFGenerator, WhatsAppShare, UPIWidget } from '@/components/delivery'
import { Heart } from 'lucide-react'
export default function RelationshipCompassPage() {
  const [person1, setPerson1] = useState({ name: '', zodiac: '' })
  const [person2, setPerson2] = useState({ name: '', zodiac: '' })
  const [result, setResult] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isPaid, setIsPaid] = useState(false)
  const reportRef = useRef<HTMLDivElement>(null)
  const handleAnalyze = async () => {
    if (!person1.name || !person2.name) return alert('Fill all fields')
    setIsLoading(true)
    try {
      const res = await fetch('/api/gemini/timeline-healing', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ person1, person2 }) })
      setResult(await res.json())
    } finally { setIsLoading(false) }
  }
  return (<div className="min-h-screen p-8"><div className="max-w-4xl mx-auto space-y-8"><div className="text-center space-y-4"><Heart className="w-16 h-16 mx-auto text-rose-600" /><h1 className="text-4xl font-bold">Timeline Healing</h1></div><div className="grid md:grid-cols-2 gap-6 p-6 bg-white dark:bg-slate-800 rounded-lg"><div className="space-y-4"><h3 className="font-semibold">Person 1</h3><div><Label>Name</Label><Input value={person1.name} onChange={(e) => setPerson1({...person1, name: e.target.value})} /></div><div><Label>Zodiac</Label><Input value={person1.zodiac} onChange={(e) => setPerson1({...person1, zodiac: e.target.value})} /></div></div><div className="space-y-4"><h3 className="font-semibold">Person 2</h3><div><Label>Name</Label><Input value={person2.name} onChange={(e) => setPerson2({...person2, name: e.target.value})} /></div><div><Label>Zodiac</Label><Input value={person2.zodiac} onChange={(e) => setPerson2({...person2, zodiac: e.target.value})} /></div></div><Button onClick={handleAnalyze} disabled={isLoading} className="md:col-span-2" size="lg">{isLoading ? 'Analyzing...' : 'Generate Report'}</Button></div>{result && (<div ref={reportRef} className="p-8 bg-white dark:bg-slate-800 rounded-lg space-y-6"><div className="text-center"><h2 className="text-3xl font-bold">Compatibility: {result.overallScore}%</h2><p className="mt-4">{result.summary}</p></div><div className="grid md:grid-cols-2 gap-4"><PDFGenerator contentRef={reportRef} filename="timeline-healing" isPaid={isPaid} /><WhatsAppShare reportTitle="Timeline Healing" reportSummary={`${result.overallScore}% compatible!`} /></div>{!isPaid && <UPIWidget amount={399} productName="Timeline Healing" onPaymentVerified={() => setIsPaid(true)} />}</div>)}</div></div>)
}
