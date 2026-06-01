import { ImageWithFallback } from './ImageWithFallback';
import { ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { portfolioContent } from '../config/content';
import { colors } from '../config/theme';

export default function Portfolio() {
  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 bg-[#0a0a1a] relative">
      <div className="max-w-7xl mx-auto px-6">
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
                {portfolioContent.title}
              </h2>
              <div className="w-32 h-1" style={{ backgroundColor: colors.primary }}></div>
            </div>
          </div>
          <p className="text-gray-300 text-lg mt-6 max-w-3xl mx-auto">
            {portfolioContent.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioContent.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-gradient-to-br from-[#2a1a3e]/60 to-[#1a0a2e]/60 rounded-lg overflow-hidden border transition-colors cursor-pointer"
              style={{ borderColor: colors.borderPrimary }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = colors.borderPrimaryHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = colors.borderPrimary;
              }}
            >
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="text-sm mb-2 uppercase tracking-wider" style={{ color: colors.secondary }}>
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>

                {'description' in project && project.description && (
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    {project.description}
                  </p>
                )}

                {'challenge' in project && project.challenge && (
                  <div className="mb-3 p-3 rounded-md bg-[#1a0a2e]/80 border-l-2" style={{ borderColor: colors.secondary }}>
                    <span className="text-xs uppercase tracking-wider font-semibold" style={{ color: colors.secondary }}>Challenge</span>
                    <p className="text-gray-400 text-xs leading-relaxed mt-1">{project.challenge}</p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full"
                      style={{
                        backgroundColor: `${colors.primary}33`,
                        color: colors.primary
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target={project.link === '#' ? undefined : '_blank'}
                  rel={project.link === '#' ? undefined : 'noopener noreferrer'}
                  className="flex items-center gap-2 transition-colors"
                  style={{ color: colors.secondary }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = colors.white;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = colors.secondary;
                  }}
                >
                  <span className="text-sm">View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
