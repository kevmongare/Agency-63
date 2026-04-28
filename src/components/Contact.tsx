import { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

type FormState = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    'w-full bg-[#1e1e1e] border border-white/10 rounded text-white text-sm px-4 py-3 focus:outline-none focus:border-[#FFC107] transition-colors placeholder:text-white/30';

  return (
    <section id="contact" className="bg-[#080808] py-24 section-divider">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <p className="text-[#FFC107] text-xs font-bold tracking-[0.25em] uppercase mb-4">
              GET IN TOUCH
            </p>
            <h2 className="font-display font-black text-5xl md:text-6xl text-white leading-tight mb-6">
              Let's Build Something{' '}
              <span className="text-gradient">Remarkable.</span>
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-10">
              We'd love to hear about your next project. Tell us what you're working on and one of our strategists will be in touch within 24 hours.
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FFC107]/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-[#FFC107]" />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">Email Us</p>
                  <a href="mailto:hello@agency63.co.za" className="text-white text-sm hover:text-[#FFC107] transition-colors">
                    hello@agency63.co.za
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FFC107]/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-[#FFC107]" />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">Call Us</p>
                  <a href="tel:+27115551234" className="text-white text-sm hover:text-[#FFC107] transition-colors">
                    +27 11 555 1234
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FFC107]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-[#FFC107]" />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">Visit Us</p>
                  <p className="text-white text-sm">
                    4 Eton Road, Parktown, Johannesburg, South Africa
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-[#0f0f0f] rounded-xl p-8 border border-white/5">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#FFC107]/10 flex items-center justify-center mb-6">
                  <ArrowRight size={28} className="text-[#FFC107]" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-3">
                  Message Received!
                </h3>
                <p className="text-white/50 text-sm">
                  We'll be in touch within 24 hours. Great things are coming!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/50 text-xs mb-1.5 block">Full Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Smith"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="text-white/50 text-xs mb-1.5 block">Email *</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@company.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white/50 text-xs mb-1.5 block">Company</label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your Company Name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="text-white/50 text-xs mb-1.5 block">Service Required</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select a Service</option>
                    <option>Experiential Marketing</option>
                    <option>Product Launch</option>
                    <option>Corporate Event</option>
                    <option>Roadshow / Tour</option>
                    <option>Trade Show / Exhibition</option>
                    <option>Digital / Hybrid Event</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-white/50 text-xs mb-1.5 block">Project Brief *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project, goals, timeline and budget..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FFC107] hover:bg-[#FFB300] text-black font-bold py-3.5 rounded transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-[0_8px_30px_rgba(255,193,7,0.25)]"
                >
                  Send Brief
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
