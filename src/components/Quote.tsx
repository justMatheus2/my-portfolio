import { motion } from 'motion/react';
import { quotesContent } from '../config/content';

type QuoteProps = {
  variant: 'quote1' | 'quote2';
};

export default function Quote({ variant }: QuoteProps) {
  const isQuote1 = variant === 'quote1';

  return (
    <section className={`py-16 sm:py-20 md:py-24 relative overflow-hidden ${
      isQuote1
        ? 'bg-gradient-to-r from-[#1a0a2e] via-[#2a0a3e] to-[#0a1a2a]'
        : 'bg-[#0a0a1a]'
    }`}>
      <div className={`absolute inset-0 ${
        isQuote1
          ? 'bg-gradient-to-br from-[#e91e63]/20 via-transparent to-[#00bcd4]/20'
          : 'bg-gradient-to-r from-transparent via-[#e91e63]/10 to-transparent'
      }`}></div>

      <div className="max-w-5xl mx-auto px-6 relative text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase leading-tight"
        >
          {quotesContent[variant]}
        </motion.h2>
      </div>
    </section>
  );
}
