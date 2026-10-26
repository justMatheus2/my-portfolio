import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { portfolioContent } from '../config/content';
import { colors } from '../config/theme';

export default function Portfolio() {
  const [featuredProject, ...otherProjects] = portfolioContent.projects;

  const ProjectCard = ({ project, index, featured = false }: {
    project: (typeof portfolioContent.projects)[number];
    index: number;
    featured?: boolean;
  }) => {
    const hasLiveLink = project.link && project.link !== '#';

    return (
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: Math.min(index * 0.07, 0.28) }}
        viewport={{ once: true, amount: 0.15 }}
        className={`group min-w-0 overflow-hidden rounded-2xl border bg-[#171D27] transition-all duration-300 hover:-translate-y-1 ${featured ? 'md:grid md:grid-cols-[1.15fr_0.85fr]' : ''}`}
        style={{ borderColor: colors.borderPrimary }}
      >
        <div className={`relative overflow-hidden bg-[#202A39] ${featured ? 'min-h-[260px] md:min-h-[360px]' : 'aspect-[16/10]'}`}>
          <img
            src={project.image}
            alt={`Preview of ${project.title}`}
            loading={featured ? 'eager' : 'lazy'}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            onError={(event) => {
              // Keep the layout polished even if an external preview is unavailable.
              event.currentTarget.style.display = 'none';
              event.currentTarget.parentElement?.classList.add('project-image-unavailable');
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#10151D]/35 via-transparent to-transparent" />
          {featured && (
            <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#10151D]/85 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-[#DCE5F0] backdrop-blur">
              Featured project
            </span>
          )}
        </div>

        <div className={`flex min-w-0 flex-col ${featured ? 'justify-center p-6 sm:p-8 md:p-10' : 'p-5 sm:p-6'}`}>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: colors.secondary }}>
            {project.category}
          </p>
          <h3 className={`font-semibold leading-tight tracking-[-0.025em] text-[#F5F7FA] ${featured ? 'mb-4 text-2xl sm:text-3xl md:text-4xl' : 'mb-3 text-xl'}`}>
            {project.title}
          </h3>
          {'description' in project && project.description && (
            <p className={`leading-relaxed text-[#AAB4C2] ${featured ? 'mb-6 text-sm sm:text-base' : 'mb-5 text-sm'}`}>
              {project.description}
            </p>
          )}

          <div className="mb-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/[0.08] bg-white/[0.035] px-2.5 py-1 text-[11px] text-[#C5CEDA]"
              >
                {tech}
              </span>
            ))}
          </div>

          {hasLiveLink ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex w-fit items-center gap-2 text-sm font-medium text-[#C5D2E2] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A8B7CB]"
            >
              View project
              {featured ? <ArrowUpRight size={17} /> : <ExternalLink size={15} />}
            </a>
          ) : (
            <span className="mt-auto inline-flex w-fit items-center gap-2 text-sm text-[#7E8A9B]" aria-label="Project preview not available yet">
              Case study coming soon
            </span>
          )}
        </div>
      </motion.article>
    );
  };

  return (
    <section id="projects" className="relative bg-[#10151D] py-20 sm:py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 max-w-2xl sm:mb-14 md:mb-16"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: colors.secondary }}>
            Selected work · 2024—2026
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#F5F7FA] sm:text-4xl md:text-5xl">
            {portfolioContent.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#AAB4C2] sm:text-lg">
            {portfolioContent.subtitle}
          </p>
        </motion.div>

        {featuredProject && (
          <div className="mb-5 sm:mb-6">
            <ProjectCard project={featuredProject} index={0} featured />
          </div>
        )}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {otherProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index + 1} />
          ))}
        </div>
      </div>
      <style>{`
        .project-image-unavailable::after {
          content: 'Project preview';
          display: grid;
          place-items: center;
          min-height: 100%;
          padding: 2rem;
          color: #A8B7CB;
          font-size: 0.75rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          background: radial-gradient(ellipse at top right, #293649 0%, #202A39 45%, #171D27 100%);
        }
      `}</style>
    </section>
  );
}
