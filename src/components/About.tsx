import { ImageWithFallback } from './ImageWithFallback';
import { motion } from 'motion/react';
import { aboutContent } from '../config/content';
import { colors } from '../config/theme';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#1a0a2e] via-[#0a0a1a] to-[#1a0a2e] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l to-transparent"
        style={{ backgroundImage: `linear-gradient(to left, ${colors.primary}1a, transparent)` }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-lg overflow-hidden border bg-[#0a0a1a]/60 flex items-center justify-center"
              style={{ borderColor: `${colors.primary}4d` }}
            >
              <ImageWithFallback
                src={aboutContent.image}
                alt="Developer"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-wider">
                {aboutContent.title1}
              </h2>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold">
                <span className="text-white">{aboutContent.title2Part1}</span>
                <span style={{ color: colors.primary }}>{aboutContent.title2Part2}</span>
              </div>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed">
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
