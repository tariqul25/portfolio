import { CheckCircle2, ExternalLink, ShoppingBag, KeyRound, ArrowRight, Zap } from 'lucide-react';
import { shopifyCapabilities } from '../../data/skills';
import { useGsapCardTilt, useGsapDeepScrollCard, useGsapReveal, useGsapStagger } from '../../hooks/useGsap';
import { Magnetic } from '../ui/MagneticButton';

interface StoreItem {
  client: string;
  title: string;
  desc: string;
  url: string;
  tech: string[];
  previewPassword?: string;
}

const stores: StoreItem[] = [
  {
    client: 'The Curious Clinician',
    title: 'Custom Quiz & Klaviyo Automation',
    desc: 'Built a custom stress assessment quiz to provide an interactive customer experience. Integrated with Klaviyo to capture customer response data and automate post-assessment email delivery.',
    url: 'https://www.thecuriousclinician.com.au/',
    tech: ['Shopify', 'Liquid', 'JavaScript', 'Klaviyo'],
  },
  {
    client: 'Luxe Spa & Wellness',
    title: 'Spa Booking System',
    desc: 'Developed and customized a responsive luxury spa and wellness Shopify storefront with custom sections, layouts, and an integrated booking app for scheduling appointments.',
    url: 'https://spa-parlor.myshopify.com/',
    tech: ['Shopify', 'Liquid', 'JavaScript', 'Shopify Apps'],
    previewPassword: '1',
  },
  {
    client: 'LearnPro',
    title: 'LMS Course Access Platform',
    desc: 'A Shopify LMS allowing customers to purchase courses or membership plans, with access control based on purchases, restricted content for unauthorized users, and a customer dashboard.',
    url: 'https://service-10203.myshopify.com/',
    tech: ['Shopify', 'Liquid', 'JavaScript'],
    previewPassword: '1',
  },
];

function CapabilityCard({ item, index }: { item: typeof shopifyCapabilities[0]; index: number }) {
  const cardRef = useGsapDeepScrollCard<HTMLDivElement>({
    delay: index * 0.08,
    distance: 40,
    duration: 0.85,
    triggerHook: 'top 88%',
  });
  const tiltRef = useGsapCardTilt<HTMLDivElement>(4);

  return (
    <div ref={cardRef} className="h-full">
      <div
        ref={tiltRef}
        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-lg hover:border-emerald-500/50 hover:shadow-emerald-950/20 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between group"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-700/60 flex items-center justify-center text-emerald-400 font-bold text-xs group-hover:scale-105 transition-transform">
              0{index + 1}
            </span>
            <Zap size={14} className="text-emerald-400 group-hover:rotate-12 transition-transform" />
          </div>
          <h3 className="text-base font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">{item.label}</h3>
          <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
        </div>
        <div className="mt-5 pt-3.5 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400">
          <CheckCircle2 size={13} className="text-emerald-400" />
          <span>Production Tested</span>
        </div>
      </div>
    </div>
  );
}

function StoreCard({ store, index }: { store: StoreItem; index: number }) {
  const cardRef = useGsapDeepScrollCard<HTMLElement>({
    delay: index * 0.12,
    distance: 50,
    duration: 0.95,
    triggerHook: 'top 88%',
  });
  const tiltRef = useGsapCardTilt<HTMLDivElement>(5);

  return (
    <article ref={cardRef} className="h-full">
      <div
        ref={tiltRef}
        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-950/30 transition-all duration-300 h-full flex flex-col justify-between group"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-700/60 px-2.5 py-0.5 rounded-full">
              <ShoppingBag size={11} />
              {store.client}
            </span>
            <span className="text-[11px] font-mono text-slate-500">Liquid 2.0</span>
          </div>
          <h4 className="text-lg font-bold text-white mb-2.5 group-hover:text-emerald-300 transition-colors">{store.title}</h4>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">{store.desc}</p>
        </div>

        <div>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {store.tech.map((x) => (
              <span
                key={x}
                className="text-[11px] font-semibold text-slate-300 bg-slate-950/80 border border-slate-800 px-2.5 py-1 rounded-md group-hover:border-slate-700 transition-colors"
              >
                {x}
              </span>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
            <Magnetic strength={0.25} className="w-full">
              <a
                href={store.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-between w-full px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg shadow-md hover:shadow-emerald-600/30 transition-all duration-200 cursor-pointer"
              >
                <span>Live Preview</span>
                <ExternalLink size={13} />
              </a>
            </Magnetic>

            {store.previewPassword && (
              <div className="flex items-center justify-between text-[11px] bg-slate-950/80 px-3 py-1.5 rounded-md border border-slate-800">
                <span className="text-slate-400 flex items-center gap-1">
                  <KeyRound size={11} className="text-slate-500" />
                  Store Password:
                </span>
                <code className="font-bold text-emerald-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-700">
                  {store.previewPassword}
                </code>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export function ShopifyExpertise() {
  const headerRef = useGsapReveal<HTMLDivElement>({
    from: 'bottom',
    duration: 0.8,
    distance: 30,
  });

  const storefrontsHeaderRef = useGsapReveal<HTMLDivElement>({
    from: 'bottom',
    duration: 0.8,
    distance: 25,
  });

  const caseStudyLeftRef = useGsapReveal<HTMLDivElement>({
    from: 'left',
    duration: 0.9,
    distance: 45,
    triggerHook: 'top 88%',
  });

  const caseStudyRightRef = useGsapReveal<HTMLDivElement>({
    from: 'right',
    duration: 0.9,
    distance: 45,
    triggerHook: 'top 88%',
  });

  const caseStudyStatsRef = useGsapStagger<HTMLDivElement>({
    stagger: 0.12,
    from: 'bottom',
    duration: 0.75,
    triggerHook: 'top 88%',
  });

  return (
    <section
      id="shopify"
      className="py-20 sm:py-24 lg:py-28 border-t border-slate-800/80 bg-gradient-to-b from-emerald-950/20 via-slate-950/40 to-slate-900/30 relative z-10"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
        {/* Section Heading with GSAP Reveal */}
        <div ref={headerRef} className="mb-14">
          <span className="inline-flex text-[11px] uppercase tracking-[.16em] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-700/60 px-3 py-1 rounded-full">
            Dedicated Shopify Development
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mt-3">
            E-Commerce &amp; Bespoke Storefronts
          </h2>
          <p className="mt-3.5 text-slate-400 max-w-2xl">
            From custom Liquid architecture and Shopify 2.0 sections to Klaviyo email automation and third-party app integrations for international brands.
          </p>
        </div>

        {/* 1. Core Capabilities with GSAP Staggered Scroll Entrance & 3D Tilt */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {shopifyCapabilities.map((item, i) => (
            <CapabilityCard key={item.label} item={item} index={i} />
          ))}
        </div>

        {/* 2. Client Storefronts Header with Scroll Reveal */}
        <div ref={storefrontsHeaderRef} className="mb-8">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest block mb-1">
                Client Portfolio
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Live Shopify Storefronts</h3>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-300 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700">
              <ShoppingBag size={13} className="text-emerald-400" />
              Verified Deliveries
            </span>
          </div>
        </div>

        {/* 2. Client Storefronts Grid with GSAP 3D Scroll Entrance and Tilt */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {stores.map((store, idx) => (
            <StoreCard key={store.title} store={store} index={idx} />
          ))}
        </div>

        {/* 3. Featured Shopify Case Study with GSAP Scale Entrance */}
        <div className="mt-8">
          <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-[#0A121E] border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div
              className="absolute -top-24 -right-24 w-80 h-80 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)',
              }}
            />

            <div className="relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
              <div ref={caseStudyLeftRef}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-700/60 px-3 py-1 rounded-full">
                    <ShoppingBag size={13} />
                    Shopify &amp; Klaviyo Architecture
                  </span>
                  <span className="text-xs text-slate-400">The Curious Clinician</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                  Interactive Health Quiz &amp; Klaviyo Automation Funnel
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-8">
                  Engineered custom client-side quiz logic embedded directly inside Shopify theme files. Responses synchronize with customer records in real time, triggering targeted email flows in Klaviyo based on stress index scores.
                </p>
                <div ref={caseStudyStatsRef} className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 hover:border-emerald-500/40 hover:bg-slate-900 transition-all duration-300">
                    <h4 className="font-bold text-emerald-400 text-xs uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Client Goal
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Interactive healthcare assessment capturing leads directly into Klaviyo without disrupting checkout.
                    </p>
                  </div>
                  <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 hover:border-emerald-500/40 hover:bg-slate-900 transition-all duration-300">
                    <h4 className="font-bold text-emerald-400 text-xs uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Technical Solution
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Multi-step custom Liquid &amp; JS quiz with dynamic branching and custom Klaviyo profile properties.
                    </p>
                  </div>
                  <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 hover:border-emerald-500/40 hover:bg-slate-900 transition-all duration-300">
                    <h4 className="font-bold text-emerald-400 text-xs uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Outcome
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      High completion rates, seamless onboarding, and automated segmented marketing workflows.
                    </p>
                  </div>
                </div>
              </div>

              {/* Visual Flow diagram box */}
              <div ref={caseStudyRightRef} className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                    Data Flow Pipeline
                  </h4>
                  <span className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Real-time Sync
                  </span>
                </div>
                <div className="space-y-3 font-mono text-xs">
                  <div className="bg-slate-900 border border-slate-800 hover:border-slate-700 p-3 rounded-lg flex items-center justify-between text-slate-200 transition-colors">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                      1. Shopify Liquid Storefront
                    </span>
                    <span className="text-emerald-400 text-[10px]">User Input</span>
                  </div>
                  <div className="flex justify-center text-emerald-500/60">
                    <ArrowRight size={16} className="rotate-90 animate-bounce" />
                  </div>
                  <div className="bg-slate-900 border border-slate-800 hover:border-slate-700 p-3 rounded-lg flex items-center justify-between text-slate-200 transition-colors">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                      2. Custom JavaScript Quiz Engine
                    </span>
                    <span className="text-violet-400 text-[10px]">Scoring Logic</span>
                  </div>
                  <div className="flex justify-center text-violet-500/60">
                    <ArrowRight size={16} className="rotate-90 animate-bounce" />
                  </div>
                  <div className="bg-slate-900 border border-slate-800 hover:border-slate-700 p-3 rounded-lg flex items-center justify-between text-slate-200 transition-colors">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      3. Klaviyo REST API Integration
                    </span>
                    <span className="text-emerald-400 text-[10px]">Profile Tagging</span>
                  </div>
                  <div className="flex justify-center text-emerald-500/60">
                    <ArrowRight size={16} className="rotate-90 animate-bounce" />
                  </div>
                  <div className="bg-emerald-950/60 border border-emerald-800/80 hover:border-emerald-600/80 p-3 rounded-lg flex items-center justify-between text-emerald-300 font-semibold transition-colors">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      4. Automated Segmented Email Flow
                    </span>
                    <span className="text-emerald-400 text-[10px]">Conversion</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
