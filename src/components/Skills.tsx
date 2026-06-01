import { motion } from 'motion/react';
import { IconType } from 'react-icons';
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiTypescript } from 'react-icons/si';
import { MdDevices } from 'react-icons/md';
import { skillsContent } from '../config/content';
import { colors } from '../config/theme';

const iconMap: Record<string, IconType> = {
  html5: FaHtml5,
  css3: FaCss3Alt,
  js: SiJavascript,
  react: FaReact,
  ts: SiTypescript,
  git: FaGitAlt,
  github: FaGithub,
  responsive: MdDevices,
};

export default function Skills() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#0a0a1a] to-[#1a0a2e] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#e91e63]/5 via-transparent to-[#00bcd4]/5"></div>

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
                {skillsContent.title}
              </h2>
              <div className="w-32 h-1" style={{ backgroundColor: colors.primary }}></div>
            </div>
          </div>
          <p className="text-gray-300 text-lg mt-6">
            {skillsContent.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {skillsContent.skills.map((skill, index) => {
            const Icon = iconMap[skill.icon];
            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group aspect-square flex flex-col items-center justify-center p-4 sm:p-6 rounded-lg bg-gradient-to-br from-[#2a1a3e]/60 to-[#1a0a2e]/60 border transition-colors cursor-pointer"
                style={{ borderColor: colors.borderPrimary }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = colors.borderPrimaryHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = colors.borderPrimary;
                }}
              >
                <div className="mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                  {Icon && (
                    <Icon
                      size={48}
                      color={skill.color}
                      aria-label={skill.name}
                    />
                  )}
                </div>
                <div className="text-white text-xs sm:text-sm text-center">{skill.name}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
