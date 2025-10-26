/* ============================================================================
   File: app/tools/page.tsx
   All five tools wired with ₹99 UPI paywall (no Razorpay) + full/preview logic
   Dependencies assumed:
   - components/PremiumCard.tsx  → { PremiumCard, InsightView }
   - components/PaywallUPI.tsx   → PaywallUPI (from previous answer)
   - API routes:
       /api/ai/[tool]  (enforces unlock or returns preview)
       /api/pay/prt    (issues PRT)
       /api/pay/mint   (mints unlock token)
   ============================================================================ */
"use client";

import React from "react";
import { PremiumCard, InsightView } from "@/components/PremiumCard";
import { PaywallUPI } from "@/components/PaywallUPI";

type Insight = { title:string; subtitle?:string; summary:string; bullets:string[]; meta?:Record<string, any> };

async function runTool(tool: string, payload: any, unlock?: string) {
  const res = await fetch(`/api/ai/${tool}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...(unlock ? { Authorization: `Bearer ${unlock}` } : {}) },
    body: JSON.stringify(payload),
  });
  const json = await res.json();
  if (!json.ok) throw new Error(json.error || "AI error");
  return { data: json.data as Insight, access: (json.access as "free"|"full") ?? "free" };
}

function ToolAvatar() {
  const [unlock, setUnlock] = React.useState<string | null>(null);
  const [data, setData] = React.useState<Insight | null>(null);
  const [err, setErr] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErr(null); setLoading(true);
    const fd = new FormData(e.currentTarget);
    const payload = {
      fullName: String(fd.get("fullName") || ""),
      birthDate: String(fd.get("birthDate") || ""),
      sunSign: String(fd.get("sunSign") || "") || undefined,
      moonSign: String(fd.get("moonSign") || "") || undefined,
      focus: String(fd.get("focus") || "") || undefined,
    };
    try { const r = await runTool("avatar", payload, unlock || undefined); setData(r.data); }
    catch (e:any) { setErr(e.message); } finally { setLoading(false); }
  };

  return (
    <PremiumCard icon="🖼️" title="Divine Avatar Visualizer" gradient="bg-gradient-to-r from-rose-50 to-cyan-50">
      <form onSubmit={onSubmit} className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        <input name="fullName" placeholder="Full Name" className="rounded-lg border px-3 py-2" required />
        <input name="birthDate" type="date" className="rounded-lg border px-3 py-2" required />
        <select name="focus" className="rounded-lg border px-3 py-2">
          <option value="">Focus…</option>
          <option>career</option><option>love</option><option>health</option><option>wealth</option><option>relationship</option>
        </select>
        <input name="sunSign" placeholder="Sun Sign (optional)" className="rounded-lg border px-3 py-2 sm:col-span-2" />
        <input name="moonSign" placeholder="Moon Sign (optional)" className="rounded-lg border px-3 py-2" />
        <button disabled={loading} className="mt-2 rounded-lg border bg-white px-3 py-2 hover:bg-gray-50">{loading ? "Generating…" : "Generate Divine Avatar"}</button>
      </form>
      <div className="mt-4">
        <PaywallUPI tool="avatar" onUnlocked={(t)=>setUnlock(t)} />
        <p className="mt-2 text-xs text-gray-600">Free shows a teaser. Pay ₹99 via UPI <b>9211271977@hdfcbank</b> to unlock full avatar + downloads.</p>
      </div>
      {err && <p className="mt-2 text-sm text-rose-700">{err}</p>}
      {data && <InsightView i={data} pdfName="divine-avatar.pdf" theme="destiny" />}
    </PremiumCard>
  );
}

function ToolDestiny() {
  const [unlock, setUnlock] = React.useState<string | null>(null);
  const [data, setData] = React.useState<Insight | null>(null);
  const [err, setErr] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErr(null); setLoading(true);
    const fd = new FormData(e.currentTarget);
    const payload = { fullName: String(fd.get("fullName") || ""), birthDate: String(fd.get("birthDate") || ""), focus: String(fd.get("focus") || "") || undefined };
    try { const r = await runTool("destiny-sync", payload, unlock || undefined); setData(r.data); }
    catch (e:any) { setErr(e.message); } finally { setLoading(false); }
  };
  return (
    <PremiumCard icon="✨" title="Destiny Sync" gradient="bg-gradient-to-r from-indigo-50 to-purple-50">
      <form onSubmit={onSubmit} className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        <input name="fullName" placeholder="Full Name" className="rounded-lg border px-3 py-2" required />
        <input name="birthDate" type="date" className="rounded-lg border px-3 py-2" required />
        <select name="focus" className="rounded-lg border px-3 py-2">
          <option value="">Focus…</option>
          <option>career</option><option>love</option><option>health</option><option>wealth</option><option>relationship</option>
        </select>
        <button disabled={loading} className="mt-2 rounded-lg border bg-white px-3 py-2 hover:bg-gray-50">{loading ? "Generating…" : "Generate Blueprint"}</button>
      </form>
      <div className="mt-4">
        <PaywallUPI tool="destiny-sync" onUnlocked={(t)=>setUnlock(t)} />
        <p className="mt-2 text-xs text-gray-600">Free shows a preview. ₹99 unlocks full path + exports.</p>
      </div>
      {err && <p className="mt-2 text-sm text-rose-700">{err}</p>}
      {data && <InsightView i={data} pdfName="destiny-sync.pdf" theme="destiny" />}
    </PremiumCard>
  );
}

function ToolKarmic() {
  const [unlock, setUnlock] = React.useState<string | null>(null);
  const [birthDate, setBirthDate] = React.useState("");
  const [data, setData] = React.useState<Insight | null>(null);
  const [err, setErr] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const run = async () => {
    setErr(null); setLoading(true);
    try { const r = await runTool("karmic-debt", { birthDate }, unlock || undefined); setData(r.data); }
    catch (e:any) { setErr(e.message); } finally { setLoading(false); }
  };
  return (
    <PremiumCard icon="🔮" title="Karmic Debt Decoder" gradient="bg-gradient-to-r from-amber-50 to-yellow-50">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <input type="date" className="rounded-lg border px-3 py-2" value={birthDate} onChange={(e)=>setBirthDate(e.target.value)} required />
        <button disabled={!/^\d{4}-\d{2}-\d{2}$/.test(birthDate) || loading} onClick={run} className="rounded-lg border bg-white px-3 py-2 hover:bg-gray-50">{loading ? "Decoding…" : "Decode Scorecard"}</button>
      </div>
      <div className="mt-4">
        <PaywallUPI tool="karmic-debt" onUnlocked={(t)=>setUnlock(t)} />
        <p className="mt-2 text-xs text-gray-600">Free = 2 bullets. Full ₹99 = full score + remedies + exports.</p>
      </div>
      {err && <p className="mt-2 text-sm text-rose-700">{err}</p>}
      {data && <InsightView i={data} pdfName="karmic-debt.pdf" theme="debt" />}
    </PremiumCard>
  );
}

function ToolFamily() {
  const [unlock, setUnlock] = React.useState<string | null>(null);
  const [members, setMembers] = React.useState([{ name:"", role:"", tags:[] as string[] }]);
  const [data, setData] = React.useState<Insight | null>(null);
  const [err, setErr] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const add = () => setMembers(m=>[...m,{ name:"", role:"", tags:[] }]);
  const update = (i:number, p:Partial<{name:string;role:string}>) => setMembers(arr=>arr.map((m,idx)=> idx===i?{...m,...p}:m));
  const run = async () => {
    setErr(null); setLoading(true);
    try { const r = await runTool("family-karma", { members: members.filter(m=>m.name || m.role) }, unlock || undefined); setData(r.data); }
    catch (e:any) { setErr(e.message); } finally { setLoading(false); }
  };
  return (
    <PremiumCard icon="🌳" title="Family Karma Tree" gradient="bg-gradient-to-r from-violet-50 to-fuchsia-50">
      <div className="space-y-2">
        {members.map((m,i)=>(
          <div key={i} className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            <input className="rounded-lg border px-3 py-2" placeholder={`Name #${i+1}`} value={m.name} onChange={e=>update(i,{name:e.target.value})}/>
            <select className="rounded-lg border px-3 py-2" value={m.role} onChange={e=>update(i,{role:e.target.value})}>
              <option value="">Role…</option>
              {["mother","father","sibling","partner","grandmother","grandfather","aunt","uncle","child"].map(r=><option key={r} value={r}>{r}</option>)}
            </select>
            <button className="rounded-lg border bg-white px-3 py-2 hover:bg-gray-50" onClick={add}>+ Add</button>
          </div>
        ))}
      </div>
      <div className="mt-3">
        <button className="rounded-lg border bg-white px-3 py-2 hover:bg-gray-50" disabled={members.every(m=>!m.name && !m.role) || loading} onClick={run}>
          {loading ? "Mapping…" : "Generate Patterns"}
        </button>
      </div>
      <div className="mt-4">
        <PaywallUPI tool="family-karma" onUnlocked={(t)=>setUnlock(t)} />
        <p className="mt-2 text-xs text-gray-600">Free = preview. Full ₹99 = full boundary map + exports.</p>
      </div>
      {err && <p className="mt-2 text-sm text-rose-700">{err}</p>}
      {data && <InsightView i={data} pdfName="family-karma.pdf" theme="family" />}
    </PremiumCard>
  );
}

function ToolTimeline() {
  const [unlock, setUnlock] = React.useState<string | null>(null);
  const [events, setEvents] = React.useState([{ date:"", note:"", intensity:5 }]);
  const [data, setData] = React.useState<Insight | null>(null);
  const [err, setErr] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const add = () => setEvents(e=>[...e,{ date:"", note:"", intensity:5 }]);
  const update = (i:number, p:Partial<{date:string;note:string;intensity:number}>) => setEvents(arr=>arr.map((e,idx)=> idx===i?{...e,...p}:e));
  const remove = (i:number) => setEvents(arr=>arr.filter((_,idx)=>idx!==i));
  const run = async () => {
    setErr(null); setLoading(true);
    try { const r = await runTool("timeline-healing", { events: events.filter(e=>e.date && e.note) }, unlock || undefined); setData(r.data); }
    catch (e:any) { setErr(e.message); } finally { setLoading(false); }
  };
  return (
    <PremiumCard icon="⏳" title="Timeline Healing" gradient="bg-gradient-to-r from-sky-50 to-cyan-50">
      <div className="space-y-2">
        {events.map((e,i)=>(
          <div key={i} className="grid grid-cols-1 gap-2 sm:grid-cols-6">
            <input type="date" className="rounded-lg border px-3 py-2 sm:col-span-2" value={e.date} onChange={ev=>update(i,{date: ev.target.value})}/>
            <input className="rounded-lg border px-3 py-2 sm:col-span-3" placeholder="Event note" value={e.note} onChange={ev=>update(i,{note: ev.target.value})}/>
            <div className="flex items-center gap-2 sm:col-span-1">
              <span className="text-xs text-gray-500">Intensity</span>
              <input type="range" min={1} max={10} value={e.intensity} onChange={ev=>update(i,{intensity: Number(ev.target.value)})}/>
              <span className="w-6 text-right text-xs">{e.intensity}</span>
            </div>
            <div className="sm:col-span-6 flex justify-end">
              <button className="rounded-lg border bg-white px-3 py-2 hover:bg-gray-50" onClick={()=>remove(i)} disabled={events.length===1}>Remove</button>
            </div>
          </div>
        ))}
        <button className="rounded-lg border bg-white px-3 py-2 hover:bg-gray-50" onClick={add}>+ Add event</button>
      </div>
      <div className="mt-3">
        <button className="rounded-lg border bg-white px-3 py-2 hover:bg-gray-50" disabled={events.every(e=>!e.date || !e.note) || loading} onClick={run}>
          {loading ? "Building…" : "Build 7-Day Protocol"}
        </button>
      </div>
      <div className="mt-4">
        <PaywallUPI tool="timeline-healing" onUnlocked={(t)=>setUnlock(t)} />
        <p className="mt-2 text-xs text-gray-600">Free = 2-step protocol preview. Full ₹99 = full pack + exports.</p>
      </div>
      {err && <p className="mt-2 text-sm text-rose-700">{err}</p>}
      {data && <InsightView i={data} pdfName="timeline-healing.pdf" theme="timeline" />}
    </PremiumCard>
  );
}

function ToolRelationship() {
  const [unlock, setUnlock] = React.useState<string | null>(null);
  const [data, set
