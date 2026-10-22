import { motion } from 'motion/react';
import { quotesContent } from '../config/content';
import { colors } from '../config/theme';

type QuoteProps = {
  variant: 'quote1' | 'quote2';
};

export default function Quote({ variant }: QuoteProps) {
  const isQuote1 = variant === 'quote1';

  return (
    <section className={`relative overflow-hidden py-16 sm:py-20 md:py-24 ${isQuote1 ? 'bg-[#202A39]' : 'bg-[#10151D]'}`}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: isQuote1
            ? `radial-gradient(ellipse at 50% 100%, ${colors.primary}13 0%, transparent 65%)`
            : `linear-gradient(90deg, transparent, ${colors.primary}08, transparent)`
        }}
      />

      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-xl font-medium leading-snug tracking-[-0.03em] text-[#D8E0EA] sm:text-2xl md:text-3xl lg:text-4xl"
        >
          “{quotesContent[variant]}”
        </motion.p>
      </div>
    </section>
  );
}
