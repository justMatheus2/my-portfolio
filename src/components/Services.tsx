import { Code, Palette, Calendar, Zap, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { servicesContent } from '../config/content';
import { colors } from '../config/theme';

const iconMap: Record<string, typeof Palette> = {
  Palette,
  Code,
  Calendar,
  Zap
};

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-[#141C29] py-20 sm:py-24 md:py-28">
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3" style={{ background: `linear-gradient(270deg, ${colors.primary}0D, transparent)` }} />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl sm:mb-14"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: colors.secondary }}>
            What we do
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#F5F7FA] sm:text-4xl md:text-5xl">
            {servicesContent.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#AAB4C2] sm:text-lg">
            {servicesContent.subtitle}
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
          {servicesContent.services.map((service, index) => {
            const IconComponent = iconMap[service.icon] ?? Code;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                viewport={{ once: true }}
                className="group rounded-2xl border bg-[#171D27] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1A2330] sm:p-8"
                style={{ borderColor: colors.borderPrimary }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = colors.borderPrimaryHover; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = colors.borderPrimary; }}
              >
                <div className="mb-8 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#A8B7CB]/15 bg-[#202A39]" style={{ color: colors.secondary }}>
                    <IconComponent size={21} strokeWidth={1.7} />
                  </div>
                  <span className="text-xs tracking-[0.12em] text-[#657286]">0{index + 1}</span>
                </div>
                <h3 className="mb-3 text-xl font-semibold tracking-[-0.02em] text-[#F5F7FA]">{service.title}</h3>
                <p className="max-w-md text-sm leading-relaxed text-[#AAB4C2] sm:text-base">{service.description}</p>
              </motion.article>
            );
          })}
        </div>

        <a
          href={servicesContent.ctaButton.link}
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#C5D2E2] transition-colors hover:text-white"
        >
          {servicesContent.ctaButton.text} <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}
