import { Instagram, Mail, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { contactContent } from '../config/content';
import { colors } from '../config/theme';

const iconMap = {
  Instagram,
  Mail
};

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#10151D] py-20 sm:py-24 md:py-28">
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full blur-3xl" style={{ backgroundColor: `${colors.primary}0D` }} />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-end">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: colors.secondary }}>
                Have a project in mind?
              </p>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#F5F7FA] sm:text-4xl md:text-5xl lg:text-6xl">
                {contactContent.title}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#AAB4C2] sm:text-lg">
                {contactContent.description}
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            viewport={{ once: true }}
            className="rounded-2xl border bg-[#171D27] p-5 sm:p-7"
            style={{ borderColor: colors.borderPrimary }}
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#8190A2]">Get in touch</p>
            <div className="space-y-2">
              {contactContent.socialLinks.map((link) => {
                const IconComponent = iconMap[link.icon as keyof typeof iconMap];
                const isEmail = link.platform === 'Email';
                return (
                  <a
                    key={link.id}
                    href={link.url}
                    target={isEmail ? undefined : '_blank'}
                    rel={isEmail ? undefined : 'noopener noreferrer'}
                    className="group flex items-center gap-4 rounded-xl border border-transparent px-3 py-4 transition-colors hover:border-white/[0.07] hover:bg-white/[0.035]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#A8B7CB]/15 bg-[#202A39] text-[#C5D2E2]">
                      <IconComponent size={19} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="block text-xs text-[#8794A5]">{link.platform}</span>
                      <span className="mt-1 block break-words text-sm font-medium text-[#E2E8F0]">{link.username}</span>
                    </div>
                    <ArrowUpRight size={16} className="shrink-0 text-[#7E8A9B] transition-colors group-hover:text-white" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
