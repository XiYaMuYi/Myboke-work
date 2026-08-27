import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Code, Palette, Rocket } from 'lucide-react';
import { MOCK_SKILLS, type ISkillCategory } from '@/data/portfolio';

const ICON_MAP: Record<string, typeof Brain> = {
  'AI / ML': Brain,
  '后端开发': Code,
  '前端开发': Palette,
  'DevOps / 工具': Rocket,
};

function SkillCard({ category, index }: { category: ISkillCategory; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const Icon = ICON_MAP[category.category] ?? Brain;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-[#00d4ff]/40 hover:bg-white/[0.06] transition-all duration-300 overflow-hidden"
    >
      <div className="absolute -top-20 -right-20 size-40 bg-gradient-to-br from-[#00d4ff]/20 to-[#a78bfa]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="size-12 rounded-xl bg-gradient-to-br from-[#00d4ff]/20 to-[#a78bfa]/20 border border-white/10 flex items-center justify-center">
            <Icon className="size-6 text-[#00d4ff]" />
          </div>
          <h3 className="font-['Space_Grotesk'] text-xl font-bold text-foreground">
            {category.category}
          </h3>
        </div>

        <div className="space-y-4">
          {category.skills.map((skill, i) => (
            <div key={skill.name}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm text-foreground font-medium">{skill.name}</span>
                <span className="text-xs text-[#00d4ff] font-mono tabular-nums">
                  {skill.level}%
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: i * 0.1 + 0.2, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-[#00d4ff] to-[#a78bfa]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const skills = MOCK_SKILLS;

  return (
    <section id="skills" className="w-full py-20 md:py-28 bg-gradient-to-b from-transparent via-[#00d4ff]/[0.02] to-transparent">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00d4ff] text-sm font-semibold tracking-widest uppercase">
            Skills
          </span>
          <h2 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-bold mt-3 mb-4">
            技术栈
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            覆盖 AI 工程化、后端架构、前端交互与云原生部署的全栈能力
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00d4ff] to-[#a78bfa] mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((cat, i) => (
            <SkillCard key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
