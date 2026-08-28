import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Lightbulb } from 'lucide-react';
import { MOCK_EDUCATION } from '@/data/portfolio';

export default function EducationSection() {
  const education = MOCK_EDUCATION;

  return (
    <section id="education" className="w-full py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00d4ff] text-sm font-semibold tracking-widest uppercase">
            Education
          </span>
          <h2 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-bold mt-3 mb-4">
            教育背景
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00d4ff] to-[#a78bfa] mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-[#00d4ff]/40 hover:bg-white/[0.06] transition-all group overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 size-40 bg-gradient-to-br from-[#00d4ff]/20 to-[#a78bfa]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6">
                <div className="size-14 rounded-xl bg-gradient-to-br from-[#00d4ff]/20 to-[#a78bfa]/20 border border-white/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="size-7 text-[#00d4ff]" />
                </div>

                <div className="flex-1 space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="font-['Space_Grotesk'] text-xl font-bold text-foreground">
                        {edu.school}
                      </h3>
                      <div className="text-sm text-[#a78bfa] font-medium mt-1">
                        {edu.major} · {edu.degree}
                      </div>
                    </div>
                    <span className="text-xs font-mono text-[#00d4ff] bg-[#00d4ff]/10 px-3 py-1 rounded-md w-fit">
                      {edu.period}
                    </span>
                  </div>

                  <div className="flex items-start gap-2 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                    <Lightbulb className="size-4 text-[#00d4ff] shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {edu.note}
                    </p>
                  </div>

                  {edu.highlights && edu.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((h, j) => (
                        <span
                          key={j}
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs bg-white/5 text-muted-foreground border border-white/10"
                        >
                          <BookOpen className="size-3" />
                          {h}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
