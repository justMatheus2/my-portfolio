import { siteConfig } from '../config/content';
import { colors } from '../config/theme';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a1a] border-t border-white/10 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2">
            <div className="text-2xl font-bold tracking-wider">
              <span className="text-white">{siteConfig.siteNamePart1}</span>
              <span style={{ color: colors.secondary }}>{siteConfig.siteNamePart2}</span>
            </div>
          </a>

          <div className="text-gray-400 text-sm">
            {siteConfig.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
}
