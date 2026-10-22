import { Palette, Code2, TrendingUp, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { whyUsContent } from '../config/content';
import { colors } from '../config/theme';

const iconMap: Record<string, typeof Palette> = {
  Palette,
  Code2,
  TrendingUp
};

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-[#141C29] py-20 sm:py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#10151D]/35 via-transparent to-[#10151D]/45" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-14"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: colors.secondary }}>
            The MS TECH approach
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#F5F7FA] sm:text-4xl md:text-5xl">
            {whyUsContent.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#AAB4C2] sm:text-lg">
            {whyUsContent.subtitle} <span style={{ color: colors.secondary }}>{whyUsContent.subtitleHighlight}</span> {whyUsContent.subtitleEnd}
          </p>
        </motion.div>

        <div className="mb-10 grid gap-4 md:grid-cols-3 lg:gap-5">
          {whyUsContent.reasons.map((reason, index) => {
            const IconComponent = iconMap[reason.icon];
            return (
              <motion.article
                key={reason.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-2xl border bg-[#171D27] p-6 sm:p-8"
                style={{ borderColor: colors.borderPrimary }}
              >
                <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-xl border border-[#A8B7CB]/15 bg-[#202A39]" style={{ color: colors.secondary }}>
                  <IconComponent size={21} strokeWidth={1.7} />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-[#F5F7FA]">{reason.title}</h3>
                <p className="text-sm leading-relaxed text-[#AAB4C2] sm:text-base">{reason.description}</p>
              </motion.article>
            );
          })}
        </div>

        <a
          href={whyUsContent.ctaButton.link}
          className="inline-flex items-center gap-2 text-sm font-medium text-[#C5D2E2] transition-colors hover:text-white"
        >
          {whyUsContent.ctaButton.text} <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}
