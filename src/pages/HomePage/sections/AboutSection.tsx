import { motion } from 'framer-motion';
import { Sparkles, Zap, Globe, Shield } from 'lucide-react';
import { MOCK_PERSONAL_INFO } from '@/data/portfolio';

const HIGHLIGHTS = [
  { icon: Sparkles, label: '5年+ 开发经验', value: '资深工程师' },
  { icon: Zap, label: '20+ 项目交付', value: '全栈落地' },
  { icon: Globe, label: '千万级 DAU 支撑', value: '高并发' },
  { icon: Shield, label: '99.99% SLA', value: '高可用' },
];

export default function AboutSection() {
  const info = MOCK_PERSONAL_INFO;

  return (
    <section id="about" className="w-full py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00d4ff] text-sm font-semibold tracking-widest uppercase">
            About Me
          </span>
          <h2 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-bold mt-3 mb-4">
            关于我
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00d4ff] to-[#a78bfa] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff] to-[#a78bfa] rounded-full blur-2xl opacity-30 scale-110" />
              <div className="relative size-56 md:size-64 rounded-full p-[2px] bg-gradient-to-br from-[#00d4ff] via-[#60a5fa] to-[#a78bfa]">
                <div className="size-full rounded-full bg-[#0a0e1a] flex items-center justify-center overflow-hidden">
                  <img
                    src={info.avatarUrl}
                    alt={info.name}
                    className="size-full object-cover"
                  />
                </div>
              </div>
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2 -right-2 px-3 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 backdrop-blur-sm text-[#00d4ff] text-xs font-semibold"
              >
                AI FDE
              </motion.div>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-2 -left-2 px-3 py-1.5 rounded-full bg-[#a78bfa]/10 border border-[#a78bfa]/30 backdrop-blur-sm text-[#a78bfa] text-xs font-semibold"
              >
                5年+经验
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 space-y-6"
          >
            <div className="space-y-4">
              {info.about.map((p, i) => (
                <p key={i} className="text-lg text-muted-foreground leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {info.tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm text-sm font-medium text-foreground hover:border-[#00d4ff]/40 hover:bg-[#00d4ff]/5 transition-all cursor-default"
                >
                  <span className="text-[#00d4ff] mr-1">#</span>
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {HIGHLIGHTS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm hover:border-white/15 hover:bg-white/[0.06] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-lg bg-gradient-to-br from-[#00d4ff]/20 to-[#a78bfa]/20 flex items-center justify-center group-hover:from-[#00d4ff]/30 group-hover:to-[#a78bfa]/30 transition-all">
                        <Icon className="size-5 text-[#00d4ff]" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">
                          {item.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {item.label}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
