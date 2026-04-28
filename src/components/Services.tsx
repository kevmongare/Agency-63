import { Zap, Rocket, Calendar, Users, Globe, Tv } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Experiential Marketing',
    desc: 'We create immersive brand experiences that connect consumers with your brand on a deep emotional level, leaving lasting impressions.',
    tags: ['Brand Activations', 'Pop-Up Events', 'Live Experiences'],
  },
  {
    icon: Rocket,
    title: 'Product Launches',
    desc: 'Unforgettable launch events that generate buzz. We craft the atmosphere, audience, and activation to make your product the talk of the market.',
    tags: ['Launch Events', 'PR Stunts', 'Media Coverage'],
  },
  {
    icon: Calendar,
    title: 'Corporate Events',
    desc: 'From intimate boardroom summits to large-scale conferences, we deliver seamless corporate events that reflect your brand.',
    tags: ['Conferences', 'AGMs', 'Team Building'],
  },
  {
    icon: Users,
    title: 'Roadshows & Tours',
    desc: 'We take your brand on the road — strategic multi-city roadshows that amplify reach and build real community connections.',
    tags: ['Multi-City', 'Consumer Tours', 'School Tours'],
  },
  {
    icon: Globe,
    title: 'Trade Shows & Exhibitions',
    desc: 'Award-winning exhibition stands and trade show presences that make customers come to you.',
    tags: ['Stand Design', 'Expos', 'B2B Exhibitions'],
  },
  {
    icon: Tv,
    title: 'Digital & Hybrid Events',
    desc: 'Blending physical and digital seamlessly — we produce hybrid events that engage live and virtual audiences simultaneously.',
    tags: ['Livestreaming', 'Virtual Events', 'Social Amplification'],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#0f0f0f] py-24 section-divider">
      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <div className="mb-14">
          <p className="text-[#FFC107] text-xs font-bold tracking-[0.25em] uppercase mb-4">
            WHAT WE DO
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display font-black text-5xl md:text-6xl text-white leading-tight">
              Full-Spectrum BTL Services
            </h2>
            <p className="text-white/50 text-sm max-w-sm leading-relaxed">
              From strategic concepting to flawless execution, we handle every dimension of your below-the-line campaign with precision and creativity.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className="bg-[#0f0f0f] p-8 group hover:bg-[#161616] transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-[#FFC107]/10 flex items-center justify-center mb-6 group-hover:bg-[#FFC107]/20 transition-colors">
                  <Icon size={22} className="text-[#FFC107]" />
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-[#FFC107] transition-colors">
                  {svc.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5">{svc.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-white/40 border border-white/10 rounded px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
