import { siteConfig } from '../config/content';
import { colors } from '../config/theme';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#0C1118] py-7 sm:py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-6 lg:px-8">
        <a href="#top" className="text-xl font-semibold tracking-[-0.04em] text-[#F5F7FA]" aria-label="MS TECH home">
          {siteConfig.siteNamePart1}<span style={{ color: colors.secondary }}>{siteConfig.siteNamePart2}</span>
        </a>
        <p className="text-center text-xs text-[#7F8B9B] sm:text-sm">{siteConfig.copyright}</p>
      </div>
    </footer>
  );
}
