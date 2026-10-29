import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import logo from '../assets/logo-no-bg.png';
import { navigationLinks } from '../config/content';
import { colors } from '../config/theme';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[#10151D]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 sm:px-6 lg:px-8">
        <a href="#top" className="inline-flex items-center gap-2" aria-label="MS TECH home">
          <img src={logo} alt="MS TECH" className="h-16 w-auto sm:h-20" />
          <span className="hidden h-5 w-px bg-white/15 sm:block" />
          <span className="hidden text-[10px] uppercase tracking-[0.16em] text-[#8794A5] sm:block">Digital Studio</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navigationLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="text-sm text-[#B3BDCA] transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-[#A8B7CB]/25 px-4 py-2.5 text-sm font-medium text-[#E5EAF1] transition-colors hover:border-[#A8B7CB]/60 hover:bg-white/[0.04]"
          >
            Let&apos;s talk <ArrowUpRight size={15} />
          </a>
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg border border-white/10 p-2 text-[#E5EAF1] transition-colors hover:bg-white/[0.05] md:hidden"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {isMenuOpen && (
        <div id="mobile-navigation" className="border-t border-white/[0.08] bg-[#10151D]/98 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-3 sm:px-6" aria-label="Mobile navigation">
            {navigationLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={handleLinkClick}
                className="border-b border-white/[0.06] py-4 text-sm text-[#B3BDCA] transition-colors last:border-0 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold text-[#10151D]"
              style={{ backgroundColor: colors.secondary }}
            >
              Start a project <ArrowUpRight size={16} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
