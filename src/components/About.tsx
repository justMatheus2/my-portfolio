import { ImageWithFallback } from './ImageWithFallback';
import { motion } from 'motion/react';
import { aboutContent } from '../config/content';
import { colors } from '../config/theme';

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#141C29] py-20 sm:py-24 md:py-28">
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2" style={{ background: `linear-gradient(270deg, ${colors.primary}0D, transparent)` }} />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border bg-[#171D27] p-3 sm:p-4" style={{ borderColor: colors.borderPrimary }}>
              <ImageWithFallback
                src={aboutContent.image}
                alt="MS TECH developer at work"
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
            <div className="absolute -bottom-4 right-5 rounded-xl border border-[#A8B7CB]/20 bg-[#10151D] px-4 py-3 shadow-xl sm:right-8">
              <span className="block text-[10px] uppercase tracking-[0.15em] text-[#8794A5]">Our focus</span>
              <span className="mt-1 block text-sm font-medium text-[#E8EDF4]">Thoughtful digital work</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: colors.secondary }}>
              A little about us
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#F5F7FA] sm:text-4xl md:text-5xl">
              {aboutContent.title1}{' '}
              <span>{aboutContent.title2Part1}</span><span style={{ color: colors.secondary }}>{aboutContent.title2Part2}</span>
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#AAB4C2] sm:text-base">
              {aboutContent.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
