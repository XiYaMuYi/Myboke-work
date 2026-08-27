import { motion } from 'framer-motion';
import { Briefcase, ChevronRight } from 'lucide-react';
import { MOCK_EXPERIENCE } from '@/data/portfolio';

export default function ExperienceSection() {
  const experiences = MOCK_EXPERIENCE;

  return (
    <section id="experience" className="w-full py-20 md:py-28 bg-gradient-to-b from-transparent via-[#a78bfa]/[0.02] to-transparent">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00d4ff] text-sm font-semibold tracking-widest uppercase">
            Experience
          </span>
          <h2 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-bold mt-3 mb-4">
            工作经历
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            从创业公司到头部大厂，在不同规模的团队中持续成长
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00d4ff] to-[#a78bfa] mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00d4ff]/50 via-[#a78bfa]/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative flex items-start ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 mt-1">
                    <div className="size-4 rounded-full bg-[#0a0e1a] border-2 border-[#00d4ff] shadow-[0_0_15px_rgba(0_212_255_0.6)]" />
                  </div>

                  {/* Content card */}
                  <div className={`w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0 ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-[#00d4ff]/40 hover:bg-white/[0.06] transition-all group">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="size-8 rounded-lg bg-gradient-to-br from-[#00d4ff]/20 to-[#a78bfa]/20 flex items-center justify-center">
                          <Briefcase className="size-4 text-[#00d4ff]" />
                        </div>
                        <span className="text-xs font-mono text-[#00d4ff] bg-[#00d4ff]/10 px-2 py-0.5 rounded-md">
                          {exp.period}
                        </span>
                      </div>

                      <h3 className="font-['Space_Grotesk'] text-lg font-bold text-foreground mb-1">
                        {exp.position}
                      </h3>
                      <div className="text-sm text-[#a78bfa] font-medium mb-3">
                        {exp.company}
                      </div>

                      <ul className="space-y-2">
                        {exp.description.map((desc, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <ChevronRight className="size-4 text-[#00d4ff] shrink-0 mt-0.5" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
