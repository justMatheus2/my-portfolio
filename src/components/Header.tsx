import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { siteConfig, navigationLinks } from '../config/content';
import { colors } from '../config/theme';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="text-2xl font-bold tracking-wider">
            <span className="text-white">{siteConfig.siteNamePart1}</span>
            <span style={{ color: colors.secondary }}>{siteConfig.siteNamePart2}</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navigationLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors uppercase text-sm tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm border-b border-white/10">
          <nav className="flex flex-col py-4">
            {navigationLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={handleLinkClick}
                className="text-gray-300 hover:text-white transition-colors uppercase text-sm tracking-wider px-6 py-3"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
