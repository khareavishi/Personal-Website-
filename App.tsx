import React, { useState } from 'react';
import { initialSiteConfig, initialTimeline } from './data/initialContent';
import { Compass, Sliders, ArrowDownRight, BookOpen, FileText, X } from 'lucide-react';

export default function App() {
  const [config, setConfig] = useState(initialSiteConfig);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState<'builder' | 'aviator' | 'thinker'>('builder');

  return (
    <div className="bg-brand-black text-brand-parchment font-sans min-h-screen selection:bg-brand-gold selection:text-brand-black">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-brand-black/90 backdrop-blur-md border-b border-brand-borderMuted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-brand-goldBorder flex items-center justify-center bg-brand-navy/60 text-brand-gold">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <span className="font-display tracking-widest text-sm font-bold uppercase">{config.name}</span>
              <span className="block font-mono text-[10px] text-brand-slate uppercase">{config.identity}</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-xs font-mono uppercase tracking-wider">
            <button onClick={() => setIsAboutOpen(true)} className="text-brand-slate hover:text-brand-gold flex items-center gap-1">
              <span>About</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
            </button>
            <a href="#work" className="text-brand-slate hover:text-brand-gold">Polaris</a>
            <a href="#journey" className="text-brand-slate hover:text-brand-gold">Milestones</a>
            <a href="#exploring" className="text-brand-slate hover:text-brand-gold">What's Next</a>
            <button onClick={() => setIsAdminOpen(true)} className="px-3 py-1.5 rounded border border-brand-goldBorder bg-brand-gold/10 text-brand-gold flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5" />
              <span>Admin CMS</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center border-b border-brand-borderMuted px-4 sm:px-6 lg:px-8 py-20 flight-grid">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded bg-brand-surface border border-brand-borderMuted font-mono text-xs uppercase text-brand-slate">
                <span className="text-brand-gold font-bold">15</span> · Class 11
              </span>
              <span className="px-3 py-1 rounded bg-brand-gold/5 border border-brand-goldBorder font-mono text-xs text-brand-gold">
                {config.explorerTag}
              </span>
            </div>

            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-tight text-brand-parchment font-light leading-[0.95]">
              {config.name}
            </h1>

            <div className="relative pl-6 border-l-2 border-brand-gold py-1">
              <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-parchment font-normal leading-snug">
                "{config.signatureQuote}"
              </blockquote>
              <div className="mt-3 font-mono text-xs text-brand-slate uppercase">— Avishi Khare / Original Quote</div>
            </div>

            <p className="text-base sm:text-lg text-brand-parchmentMuted max-w-xl font-light leading-relaxed">
              {config.introLead}
            </p>

            {/* Route Selector */}
            <div className="p-4 rounded-xl border border-brand-goldBorder/40 bg-brand-surface/60 max-w-xl space-y-2 font-mono text-xs">
              <div className="text-brand-gold uppercase text-[11px] font-bold">Choose Your Route:</div>
              <div className="grid grid-cols-3 gap-2">
                <button onClick={() => setActiveRoute('builder')} className={`p-2 rounded border ${activeRoute === 'builder' ? 'border-brand-gold bg-brand-gold text-brand-black font-bold' : 'border-brand-borderMuted bg-brand-black text-brand-slate'}`}>
                  The Builder
                </button>
                <button onClick={() => setActiveRoute('aviator')} className={`p-2 rounded border ${activeRoute === 'aviator' ? 'border-brand-gold bg-brand-gold text-brand-black font-bold' : 'border-brand-borderMuted bg-brand-black text-brand-slate'}`}>
                  The Aviator
                </button>
                <button onClick={() => setActiveRoute('thinker')} className={`p-2 rounded border ${activeRoute === 'thinker' ? 'border-brand-gold bg-brand-gold text-brand-black font-bold' : 'border-brand-borderMuted bg-brand-black text-brand-slate'}`}>
                  The Thinker
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#work" className="px-6 py-3 rounded bg-brand-gold text-brand-black font-mono text-xs uppercase font-bold flex items-center gap-2">
                <span>Enter Polaris Hangar</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>
              <button onClick={() => setIsAboutOpen(true)} className="px-6 py-3 rounded border border-brand-borderMuted bg-brand-surface text-brand-parchment font-mono text-xs uppercase flex items-center gap-2">
                <span>Read Field Notes</span>
                <BookOpen className="w-4 h-4 text-brand-gold" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work (Polaris) */}
      <section id="work" className="py-24 border-b border-brand-borderMuted px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-2xl border border-brand-goldBorder bg-gradient-to-br from-brand-navy/60 via-brand-surface to-brand-black p-8 sm:p-12 space-y-6">
          <div className="font-mono text-xs text-brand-gold uppercase">Flagship Initiative // Hangar Dossier</div>
          <h2 className="font-serif text-4xl sm:text-5xl text-brand-parchment">Project Polaris & PIP</h2>
          <p className="font-serif italic text-2xl text-brand-gold">"{config.polaris.guidingIdea}"</p>
          <p className="text-brand-parchmentMuted leading-relaxed max-w-3xl">{config.polaris.aim}</p>
          <div className="p-4 rounded bg-brand-black/70 border border-brand-borderMuted font-mono text-xs">
            <div className="text-brand-gold uppercase">PIP Challenge:</div>
            <p className="font-serif text-sm text-brand-parchment mt-1">"{config.polaris.pipChallenge}"</p>
          </div>
        </div>
      </section>

      {/* About Modal */}
      {isAboutOpen && (
        <div className="fixed inset-0 z-50 bg-brand-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-brand-surface border border-brand-goldBorder rounded-2xl max-w-3xl w-full p-8 relative max-h-[90vh] overflow-y-auto">
            <button onClick={() => setIsAboutOpen(false)} className="absolute top-6 right-6 p-2 text-brand-slate hover:text-brand-parchment">
              <X className="w-5 h-5" />
            </button>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-parchment mb-6">So, what am I actually doing here?</h2>
            <div className="space-y-6 text-brand-parchment font-serif text-lg leading-relaxed border-l-2 border-brand-gold pl-4">
              <p>I'm building things, figuring things out, and probably adding more interests to the list before I've properly explored the previous ones.</p>
              <p>One of the things I'm working on is Project Polaris, where I'm exploring how learning can become more hands-on, accessible and interesting.</p>
              <p>Outside that, I'm drawn to aviation, space, entrepreneurship, travelling and the general idea of experiencing more of the world.</p>
              <p className="text-brand-gold italic">Do all of these fit neatly into one career plan? Not really. Is that going to stop me from exploring them? Also, not really.</p>
              <p>This website is where I want to keep a record of the things I build, the things I learn, the things that go well, and occasionally the things that teach me what not to do.</p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-10 text-center font-mono text-xs text-brand-slate border-t border-brand-borderMuted">
        AVISHI KHARE © 2026 · 15 · Class 11 · Cinematic Aviation Personal Experience
      </footer>
    </div>
  );
}
