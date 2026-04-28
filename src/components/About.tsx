import { CheckCircle } from 'lucide-react';

const pillars = [
  { title: 'Strategy First', desc: 'Every campaign starts with sharp strategic thinking before a single creative asset is made.' },
  { title: 'Flawless Execution', desc: 'We obsess over details — from 500-person events to 500,000-person roadshows.' },
  { title: 'Measured Results', desc: 'ROI-driven activations backed by post-event analytics and brand lift tracking.' },
  { title: 'Proven Results', desc: 'Over 200 successful campaigns across Africa with measurable brand impact at every step.' },
];

const images = [
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&q=80',
  'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&q=80',
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80',
  'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=500&q=80',
];

export default function About() {
  return (
    <section id="about" className="bg-[#0f0f0f] py-24 section-divider overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              {images.map((src, i) => (
                <div
                  key={i}
                  className={`overflow-hidden rounded-lg ${i === 0 ? 'col-span-2' : ''}`}
                >
                  <img
                    src={src}
                    alt=""
                    className={`w-full object-cover ${i === 0 ? 'h-52' : 'h-40'}`}
                  />
                </div>
              ))}
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-4 -right-4 p-5 rounded-lg shadow-2xl text-white" style={{background: 'linear-gradient(135deg, #2DE2C8, #7B5CF6)'}}>
              <p className="font-display font-black text-4xl leading-none text-black">15+</p>
              <p className="text-xs font-bold mt-1 text-black/80">Years of Experience</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-[#2DE2C8] text-xs font-bold tracking-[0.25em] uppercase mb-4">
              WHO WE ARE
            </p>
            <h2 className="font-display font-black text-5xl md:text-6xl text-white leading-tight mb-6">
              Brands Live in{' '}
              <span className="text-gradient italic">Moments.</span>
              <br />
              Not Messages.
            </h2>
            <p className="text-white/55 leading-relaxed mb-4">
              Founded in Johannesburg, Agency 63 has grown to become Africa's most trusted experiential marketing agency. We partner with challenger brands and global giants alike — from FMCGs and automotive to financial services and tech.
            </p>
            <p className="text-white/55 leading-relaxed mb-10">
              We believe the most powerful brand communication happens face-to-face, in the real world, at precisely the right moment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {pillars.map((p) => (
                <div key={p.title} className="flex gap-3">
                  <CheckCircle size={18} className="text-[#2DE2C8] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">{p.title}</p>
                    <p className="text-white/45 text-xs leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
