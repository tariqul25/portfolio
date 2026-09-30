import { ExternalLink, ShoppingBag, KeyRound } from 'lucide-react';
import { useGsapCardTilt, useGsapReveal } from '../../hooks/useGsap';
import { Magnetic } from '../ui/MagneticButton';
import { motion } from 'framer-motion';

interface StoreItem {
  client: string;
  title: string;
  desc: string;
  url: string;
  tech: string[];
  image: string;
  previewPassword?: string;
}

const stores: StoreItem[] = [
  {
    client: 'The Curious Clinician',
    title: 'Custom Quiz & Klaviyo Automation',
    desc: 'Interactive health assessment quiz with real-time Klaviyo CRM segmentation and automated email delivery.',
    url: 'https://www.thecuriousclinician.com.au/',
    tech: ['Shopify', 'Liquid', 'JavaScript', 'Klaviyo', 'Custom Sections', 'Klaviyo Integration'],
    image: '/projects/shopify-curious-clinician.jpg',
  },
  {
    client: 'Luxe Spa & Wellness',
    title: 'Spa Booking System',
    desc: 'Luxury wellness storefront with custom Liquid sections, responsive layouts, and integrated appointment booking.',
    url: 'https://spa-parlor.myshopify.com/',
    tech: ['Shopify', 'Liquid', 'JavaScript', 'Theme Development', 'App Integration'],
    previewPassword: '1',
    image: '/projects/shopify-luxe-spa.jpg',
  },
  {
    client: 'LearnPro',
    title: 'LMS Course Access Platform',
    desc: 'Shopify LMS with membership access control, restricted lesson content, and dedicated student dashboard.',
    url: 'https://service-10203.myshopify.com/',
    tech: ['Shopify', 'Liquid', 'JavaScript', 'Custom Sections', 'App Integration'],
    previewPassword: '1',
    image: '/projects/shopify-learnpro.jpg',
  },
];

function StoreCard({ store, index }: { store: StoreItem; index: number }) {
  const tiltRef = useGsapCardTilt<HTMLDivElement>(4);

  return (
    <motion.article
      className="h-full"
      initial={{ opacity: 0, y: 50, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div
        ref={tiltRef}
        className="bg-slate-900/85 border border-slate-800/90 rounded-2xl overflow-hidden shadow-xl hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-950/30 transition-all duration-300 h-full flex flex-col justify-between group"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Store Preview Image */}
        <div className="relative w-full aspect-[16/10] bg-slate-950 overflow-hidden border-b border-slate-800/80">
          <img
            src={store.image}
            alt={store.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/30 pointer-events-none" />

          {/* Floating Badges */}
          <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
            <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-bold text-emerald-300 bg-slate-950/90 backdrop-blur-md border border-emerald-700/60 px-2 py-0.5 rounded-full shadow-md">
              <ShoppingBag size={10} />
              {store.client}
            </span>
            <span className="text-[10px] font-mono font-medium text-slate-300 bg-slate-950/90 backdrop-blur-md px-2 py-0.5 rounded border border-slate-800 shadow-md">
              Liquid 2.0
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
          <div>
            <h4 className="text-base font-bold text-white mb-1.5 group-hover:text-emerald-300 transition-colors line-clamp-1">
              {store.title}
            </h4>
            <p className="text-slate-300 text-xs leading-relaxed mb-3 line-clamp-2">
              {store.desc}
            </p>
          </div>

          <div>
            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 mb-3.5">
              {store.tech.map((x) => (
                <span
                  key={x}
                  className="text-[10px] font-medium text-slate-300 bg-slate-950/80 border border-slate-800 px-2 py-0.5 rounded-md group-hover:border-slate-700 transition-colors"
                >
                  {x}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2">
              <Magnetic strength={0.25} className="flex-1">
                <a
                  href={store.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 w-full px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg shadow-sm hover:shadow-emerald-600/30 transition-all duration-200 cursor-pointer"
                >
                  <span>Live Preview</span>
                  <ExternalLink size={12} />
                </a>
              </Magnetic>

              {store.previewPassword && (
                <div
                  className="flex items-center gap-1 text-[11px] bg-slate-950/90 px-2.5 py-1.5 rounded-lg border border-slate-800 text-slate-400 shrink-0"
                  title="Store Access Password"
                >
                  <KeyRound size={11} className="text-slate-500" />
                  <span className="text-[10px] text-slate-400">Pass:</span>
                  <code className="font-bold text-emerald-300 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-700 text-[10px]">
                    {store.previewPassword}
                  </code>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function ShopifyExpertise() {
  const headerRef = useGsapReveal<HTMLDivElement>({
    from: 'bottom',
    duration: 0.8,
    distance: 30,
  });

  return (
    <section
      id="shopify"
      className="py-20 sm:py-24 lg:py-28 border-t border-slate-800/80 bg-gradient-to-b from-emerald-950/20 via-slate-950/40 to-slate-900/30 relative z-10"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div ref={headerRef} className="mb-10 flex items-end justify-between gap-4 flex-wrap">
          <div>
            <span className="inline-flex text-[11px] uppercase tracking-[.16em] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-700/60 px-3 py-1 rounded-full">
              Dedicated Shopify Development
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mt-3">
              Live Shopify Storefronts
            </h2>
            <p className="mt-2 text-slate-400 max-w-2xl text-sm sm:text-base">
              Custom Liquid architecture, Shopify 2.0 sections, Klaviyo automation and third-party integrations — delivered for international clients.
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-700 shrink-0">
            <ShoppingBag size={13} className="text-emerald-400" />
            Verified Deliveries
          </span>
        </div>

        {/* Store Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores.map((store, idx) => (
            <StoreCard key={store.title} store={store} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
