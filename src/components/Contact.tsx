import { Instagram, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { contactContent } from '../config/content';
import { colors } from '../config/theme';

const iconMap = {
  Instagram,
  Mail
};

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#2a0a3e] via-[#1a0a2e] to-[#0a0a1a] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#00bcd4]/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 italic"
          >
            {contactContent.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg mb-12 leading-relaxed"
          >
            {contactContent.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactContent.socialLinks.map((link) => {
              const IconComponent = iconMap[link.icon as keyof typeof iconMap];
              return (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                >
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-full transition-colors"
                    style={{ backgroundColor: `${colors.primary}33` }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = `${colors.primary}66`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = `${colors.primary}33`;
                    }}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-lg">{link.username}</span>
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
