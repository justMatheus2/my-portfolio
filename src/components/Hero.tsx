import { ImageWithFallback } from './ImageWithFallback';
import { motion } from 'motion/react';
import { heroContent } from '../config/content';
import { colors } from '../config/theme';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#1a0a2e] to-[#0a0a1a]">
      <div className="absolute inset-0 opacity-20">
        <ImageWithFallback
          src={heroContent.backgroundImage}
          alt="Code background"
          className="w-full h-full object-cover"
        />
      </div>

      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l to-transparent"
        style={{ backgroundImage: `linear-gradient(to left, ${colors.primary}33, transparent)` }}
        animate={{
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-2 py-1 mb-6"
            style={{ backgroundColor: colors.primary }}
          >
            <h2 className="text-white uppercase tracking-wider text-xs sm:text-sm">{heroContent.badge}</h2>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            {heroContent.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-300 text-lg mb-8 max-w-xl"
          >
            {heroContent.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href={heroContent.buttons.primary.link}
              className="px-8 py-3 rounded-full text-white transition-colors inline-block"
              style={{
                backgroundColor: colors.secondary,
                border: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = colors.secondary;
                e.currentTarget.style.borderColor = colors.secondary;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.secondary;
                e.currentTarget.style.color = colors.white;
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              {heroContent.buttons.primary.text}
            </a>
            <a
              href={heroContent.buttons.secondary.link}
              className="px-8 py-3 border-2 rounded-full transition-colors inline-block"
              style={{
                borderColor: colors.secondary,
                color: colors.secondary
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.secondary;
                e.currentTarget.style.color = colors.white;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = colors.secondary;
              }}
            >
              {heroContent.buttons.secondary.text}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
