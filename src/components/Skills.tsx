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
    <section className="relative overflow-hidden bg-[#10151D] py-20 sm:py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0" style={{ background: `radial-gradient(ellipse at 50% 0%, ${colors.primary}0B 0%, transparent 62%)` }} />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl sm:mb-14"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: colors.secondary }}>
            Tools & technologies
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#F5F7FA] sm:text-4xl md:text-5xl">
            {skillsContent.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#AAB4C2] sm:text-lg">{skillsContent.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {skillsContent.skills.map((skill, index) => {
            const Icon = iconMap[skill.icon];
            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                viewport={{ once: true }}
                className="group flex min-h-32 flex-col items-center justify-center rounded-2xl border bg-[#171D27] px-3 py-6 transition-colors hover:bg-[#1A2330] sm:min-h-36 sm:py-7"
                style={{ borderColor: colors.borderPrimary }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = colors.borderPrimaryHover; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = colors.borderPrimary; }}
              >
                <div className="mb-3 transition-transform group-hover:-translate-y-0.5">
                  {Icon && <Icon size={34} color={colors.secondary} aria-label={skill.name} />}
                </div>
                <div className="text-center text-xs font-medium text-[#D2D9E3] sm:text-sm">{skill.name}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
