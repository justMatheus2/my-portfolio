import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import { motion } from 'motion/react';
import { heroContent } from '../config/content';
import { colors } from '../config/theme';

export default function Hero() {
  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden bg-[#10151D] pt-20">
      <div className="absolute inset-0 opacity-[0.075] grayscale">
        <ImageWithFallback
          src={heroContent.backgroundImage}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'linear-gradient(90deg, #10151D 0%, rgba(16,21,29,.94) 42%, rgba(16,21,29,.70) 100%)' }}
      />
      <div
        className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full blur-3xl"
        style={{ backgroundColor: `${colors.primary}12` }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-6 md:py-32 lg:px-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#A8B7CB]/20 bg-white/[0.035] px-4 py-2"
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: colors.secondary }} />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#CAD4E0] sm:text-xs">
              {heroContent.badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-[#F5F7FA] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {heroContent.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-7 max-w-2xl text-base leading-relaxed text-[#ADB7C5] sm:text-lg md:mt-8"
          >
            {heroContent.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="mt-9 flex flex-wrap items-center gap-3 sm:mt-10"
          >
            <a
              href={heroContent.buttons.primary.link}
              className="inline-flex min-h-12 items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-[#10151D] transition-all hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A8B7CB]"
              style={{ backgroundColor: colors.secondary }}
            >
              {heroContent.buttons.primary.text}
              <ArrowUpRight size={17} />
            </a>
            <a
              href={heroContent.buttons.secondary.link}
              className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-white/15 bg-white/[0.025] px-5 py-3 text-sm font-medium text-[#E1E7EF] transition-colors hover:border-[#A8B7CB]/50 hover:bg-white/[0.06]"
            >
              {heroContent.buttons.secondary.text}
              <ArrowDownRight size={17} />
            </a>
          </motion.div>

          <div className="mt-16 flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-[#7F8B9B] sm:mt-20">
            <span className="h-px w-9 bg-[#7187A6]/70" />
            Design · Development · Digital growth
          </div>
        </div>
      </div>
    </section>
  );
}
