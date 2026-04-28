
const footerLinks = {
  Services: ['Experiential Marketing', 'Product Launches', 'Corporate Events', 'Roadshows', 'Trade Shows', 'Digital Events'],
  Company: ['About Us', 'Our Team', 'Case Studies', 'Awards', 'Careers', 'Press'],
  Contact: ['hello@agency63.co.za', '+27 11 555 1234', 'Johannesburg, SA', 'Cape Town, SA'],
};

const socials = [
  { label: 'IG', href: '#' },
  { label: 'FB', href: '#' },
  { label: 'TW', href: '#' },
  { label: 'LI', href: '#' },
  { label: 'YT', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="font-display font-black text-2xl text-white">
                AGENCY<span className="text-[#FFC107]">63</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Africa's leading below-the-line and experiential marketing agency. Building brand moments that move people since 2009.
            </p>
            <div className="flex gap-3">
              {socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="w-9 h-9 rounded-lg bg-[#1e1e1e] flex items-center justify-center text-white/40 hover:bg-[#FFC107] hover:text-black transition-all duration-200 text-xs font-bold"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">{heading}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/40 text-sm hover:text-[#FFC107] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Agency 63. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
