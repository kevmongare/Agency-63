import { ExternalLink } from 'lucide-react';

const team = [
  { name: 'Ntlhafi Khumalo', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', bio: 'Visionary leader with 15+ years crafting brand experiences across Africa.' },
  { name: 'Simran Goel', role: 'Creative Director', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80', bio: 'Award-winning creative mind behind our most iconic campaign concepts.' },
  { name: 'Priya Naithun', role: 'Head of Strategy', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80', bio: 'Data-driven strategist who ensures every campaign delivers measurable ROI.' },
  { name: 'Theodor Abundi', role: 'Operations Director', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80', bio: 'The logistical genius behind flawless execution of our large-scale activations.' },
];

export default function Team() {
  return (
    <section id="team" className="bg-[#080808] py-24 section-divider">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#2DE2C8] text-xs font-bold tracking-[0.25em] uppercase mb-4">THE TEAM</p>
          <h2 className="font-display font-black text-5xl md:text-6xl text-white mb-4">The People Behind the Magic</h2>
          <p className="text-white/50 max-w-lg mx-auto text-sm leading-relaxed">
            A diverse team of strategists, creatives, and producers who live and breathe brand experiences every single day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[3/4]">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
                {/* Holographic border on hover */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{boxShadow: 'inset 0 0 0 2px rgba(45,226,200,0.4)'}} />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, #2DE2C8, #7B5CF6)'}}>
                    <ExternalLink size={12} className="text-black" />
                  </a>
                </div>
              </div>
              <h3 className="font-display font-bold text-lg text-white group-hover:text-[#2DE2C8] transition-colors">{member.name}</h3>
              <p className="text-[#7B5CF6] text-xs font-semibold tracking-wide uppercase mb-2">{member.role}</p>
              <p className="text-white/45 text-xs leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
