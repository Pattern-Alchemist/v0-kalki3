'use client'
import { useState } from 'react'
import { CreditCard } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
export function UPIWidget({ amount, productName, onPaymentVerified }: any) {
  const [txnId, setTxnId] = useState('')
  return (<div className="space-y-4 p-6 bg-teal-50 dark:bg-teal-900/20 rounded-lg"><div className="text-center"><h3 className="text-2xl font-bold mb-2">Payment</h3><p className="text-4xl font-bold text-primary mb-2">₹{amount}</p><p className="text-sm">UPI: 9211271977@hdfcbank</p></div><Input placeholder="Transaction ID" value={txnId} onChange={(e) => setTxnId(e.target.value)} /><Button onClick={() => txnId.length >= 12 && onPaymentVerified()} className="w-full" size="lg"><CreditCard className="mr-2" />Verify</Button></div>)
}
