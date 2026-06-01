import { Palette, Code2, TrendingUp } from 'lucide-react';
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
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#2a0a3e] via-[#1a0a2e] to-[#0a1a2a] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#e91e63]/10 via-transparent to-[#00bcd4]/10"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider mb-6">
            {whyUsContent.title}
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            {whyUsContent.subtitle} <span style={{ color: colors.primary }}>{whyUsContent.subtitleHighlight}</span> {whyUsContent.subtitleEnd}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {whyUsContent.reasons.map((reason, index) => {
            const IconComponent = iconMap[reason.icon];
            return (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-lg bg-gradient-to-br from-[#2a1a3e]/60 to-[#1a0a2e]/60 border border-white/10 hover:border-[#e91e63]/50 transition-all"
              >
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                  style={{ backgroundColor: `${colors.primary}33` }}
                >
                  <IconComponent className="w-8 h-8" style={{ color: colors.primary }} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-gray-300">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href={whyUsContent.ctaButton.link}
            className="inline-block px-8 py-3 rounded-full text-white transition-colors"
            style={{ backgroundColor: colors.secondary }}
          >
            {whyUsContent.ctaButton.text}
          </a>
        </div>
      </div>
    </section>
  );
}
