import { Code, Palette, Calendar, Zap } from 'lucide-react';
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
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#0a0a1a] to-[#1a0a2e] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l to-transparent"
        style={{ backgroundImage: `linear-gradient(to left, ${colors.primary}1a, transparent)` }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider">
                {servicesContent.title}
              </h2>
              <div className="w-32 h-1" style={{ backgroundColor: colors.primary }}></div>
            </div>
          </div>
          <p className="text-gray-300 text-lg mt-6 max-w-3xl mx-auto">
            {servicesContent.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {servicesContent.services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-[#2a1a3e]/80 to-[#1a0a2e]/80 backdrop-blur-sm p-8 rounded-lg border transition-colors cursor-pointer"
                style={{
                  borderColor: colors.borderPrimary
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = colors.borderPrimaryHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = colors.borderPrimary;
                }}
              >
                <IconComponent className="w-12 h-12 mb-4" style={{ color: colors.primary }} />
                <h3 className="text-xl font-bold text-white mb-3 italic">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href={servicesContent.ctaButton.link}
            className="inline-block px-8 py-3 rounded-full text-white transition-colors"
            style={{ backgroundColor: colors.secondary }}
          >
            {servicesContent.ctaButton.text}
          </a>
        </div>
      </div>
    </section>
  );
}
