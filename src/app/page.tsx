"use client";
import Link from "next/link";
import { Music, Shield, DollarSign, Users } from "lucide-react";

const featured = [
  { name: "KIRA", genre: "Electronic / Ambient", city: "Berlin", followers: 1240, tracks: 8 },
  { name: "Atlas Grey", genre: "Hip-Hop / Spoken Word", city: "Lagos", followers: 3400, tracks: 14 },
  { name: "Nova Pulse", genre: "Synthwave / Dark Pop", city: "Dubai", followers: 890, tracks: 5 },
];

export default function NothingBuiltHome() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="border-b border-white/8 px-6 py-4 flex items-center justify-between">
        <span className="font-bold text-white">Nothing<span className="text-purple-400">Built</span></span>
        <div className="flex gap-3">
          <Link href="/upload" className="text-sm text-silver hover:text-white">Upload</Link>
          <Link href="/community" className="rounded border border-purple-500/40 bg-purple-500/10 px-4 py-1.5 text-xs text-purple-300">Join</Link>
        </div>
      </nav>

      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h1 className="text-5xl font-bold md:text-6xl">Your art.<br/><span className="text-purple-400">Your rules.</span></h1>
        <p className="mt-6 text-xl text-silver max-w-xl mx-auto">No labels. No gatekeepers. Own your masters, publish directly, and keep 100% of what you earn.</p>
        <div className="mt-10 flex justify-center gap-4">
          <Link href="/upload" className="rounded-lg border border-purple-500/40 bg-purple-500/20 px-8 py-3 font-medium text-purple-200">Publish Music</Link>
          <Link href="/community" className="rounded-lg border border-white/10 px-8 py-3 font-medium text-silver hover:border-white/30 transition-colors">Explore Artists</Link>
        </div>
      </section>

      <section className="border-t border-white/8 bg-white/2 py-16">
        <div className="mx-auto max-w-5xl px-6 grid gap-4 sm:grid-cols-4">
          {[
            { icon: Music, title: "Direct publishing", desc: "Upload and own your distribution." },
            { icon: Shield, title: "Rights protection", desc: "Verifiable on-chain ownership." },
            { icon: DollarSign, title: "Keep your revenue", desc: "Fan payments, your wallet." },
            { icon: Users, title: "Community", desc: "Real artists. Real connections." },
          ].map((f) => (
            <div key={f.title} className="rounded-xl border border-white/8 bg-black p-5">
              <f.icon className="h-5 w-5 text-purple-400 mb-3" />
              <h3 className="text-sm font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-xs text-silver">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-xl font-bold text-white mb-8">Featured Artists</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {featured.map((a) => (
            <div key={a.name} className="rounded-xl border border-white/8 bg-white/3 p-5">
              <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-lg mb-3">{a.name[0]}</div>
              <h3 className="font-semibold text-white">{a.name}</h3>
              <p className="text-xs text-purple-400 mb-1">{a.genre}</p>
              <p className="text-xs text-silver/60">{a.city} · {a.followers.toLocaleString()} followers · {a.tracks} tracks</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
