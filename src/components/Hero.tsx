import { ArrowRight, Play } from 'lucide-react';

const stats = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '50+', label: 'Brand Partners' },
  { value: '2M+', label: 'Audience Reached' },
  { value: '12', label: 'Industry Awards' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center hero-bg overflow-hidden pt-20">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
             backgroundImage: `url('/Ageny-63-Safari-Rally.jpeg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
      </div>

      {/* Decorative glows */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{background: 'rgba(45,226,200,0.06)'}} />
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{background: 'rgba(123,92,246,0.07)'}} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="text-[#2DE2C8] text-sm font-semibold tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-[#2DE2C8]" />
            Africa's Leading BTL Marketing Agency
          </p>

          {/* Headline */}
          <h1 className="font-display font-black text-6xl md:text-7xl lg:text-8xl leading-[0.9] text-white mb-8">
            We Create{' '}
            <span className="text-gradient italic">Moments</span>{' '}
            That
            <br />
            Move People.
          </h1>

          {/* Sub */}
          <p className="text-white/60 text-lg leading-relaxed max-w-xl mb-10">
            Africa's leading below-the-line and experiential marketing agency. From product launches to roadshows — we build brand experiences and marketing asset forges.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-20">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-black font-bold px-7 py-3.5 rounded transition-all duration-200 brand-glow"
              style={{ background: 'linear-gradient(135deg, #2DE2C8, #7B5CF6)' }}
            >
              Start Your Project
              <ArrowRight size={16} />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white font-medium transition-colors"
            >
              <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#2DE2C8] transition-colors">
                <Play size={14} fill="currentColor" />
              </span>
              View Our Work
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display font-black text-4xl leading-none mb-1 text-gradient">
                  {stat.value}
                </p>
                <p className="text-white/50 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
