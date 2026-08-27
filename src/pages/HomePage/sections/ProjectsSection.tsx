import { useState, useRef, type MouseEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Play, BadgeCheck } from 'lucide-react';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MOCK_PROJECTS, type IProject } from '@/data/portfolio';

type TabType = 'enterprise' | 'personal';

const TABS: { key: TabType; label: string; icon: string; desc: string }[] = [
  { key: 'enterprise', label: '企业赋能项目', icon: '🏢', desc: '业务价值驱动的工业级项目' },
  { key: 'personal', label: '个人娱乐项目', icon: '🎮', desc: '好奇心与创造力的延伸' },
];

function ProjectCard({ project, index, onOpen }: { project: IProject; index: number; onOpen: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 8;
    const rotateX = ((centerY - y) / centerY) * 8;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlow({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ transform, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onOpen}
      className="group relative rounded-2xl overflow-hidden cursor-pointer bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-[#00d4ff]/40 transition-colors duration-300"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
        style={{
          background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(0,212,255,0.15), transparent 50%)`,
        }}
      />

      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/40 to-transparent" />
        <div className="absolute top-3 left-3">
          <Badge
            variant="outline"
            className={`${
              project.type === 'enterprise'
                ? 'bg-[#00d4ff]/10 border-[#00d4ff]/30 text-[#00d4ff]'
                : 'bg-[#a78bfa]/10 border-[#a78bfa]/30 text-[#a78bfa]'
            } backdrop-blur-sm`}
          >
            {project.type === 'enterprise' ? '🏢 企业项目' : '🎮 个人项目'}
          </Badge>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-['Space_Grotesk'] text-xl font-bold text-foreground mb-1">
            {project.title}
          </h3>
        </div>
      </div>

      <div className="p-5 space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded-md text-xs font-mono bg-white/5 text-muted-foreground border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center text-[#00d4ff] text-sm font-medium pt-1 group-hover:gap-2 gap-1 transition-all">
          查看详情
          <ExternalLink className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </motion.div>
  );
}

const DEMO_VIDEO = 'https://www.w3schools.com/html/mov_bbb.mp4';

function ProjectDetail({ project, open, onClose }: { project: IProject | null; open: boolean; onClose: () => void }) {
  const [videoPlaying, setVideoPlaying] = useState(false);

  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl p-0 bg-[rgb(15_20_35_/_0.85)] backdrop-blur-2xl border border-white/10 text-foreground overflow-hidden">
        <DialogClose className="absolute right-4 top-4 z-20 rounded-full bg-white/10 p-2 text-foreground hover:bg-white/20 transition-colors">
          <X className="size-4" />
          <span className="sr-only">关闭</span>
        </DialogClose>

        <div className="max-h-[85vh] overflow-y-auto">
          <div className="relative aspect-[16/9]">
            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <Badge
                variant="outline"
                className={`mb-3 ${
                  project.type === 'enterprise'
                    ? 'bg-[#00d4ff]/10 border-[#00d4ff]/30 text-[#00d4ff]'
                    : 'bg-[#a78bfa]/10 border-[#a78bfa]/30 text-[#a78bfa]'
                } backdrop-blur-sm`}
              >
                {project.type === 'enterprise' ? '🏢 企业赋能项目' : '🎮 个人娱乐项目'}
              </Badge>
              <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-foreground">
                {project.title}
              </h2>
            </div>
          </div>

          <div className="p-6 space-y-8">
            <div>
              <h3 className="font-['Space_Grotesk'] text-lg font-semibold mb-3 flex items-center gap-2">
                <BadgeCheck className="size-5 text-[#00d4ff]" />
                项目介绍
              </h3>
              <p className="text-muted-foreground leading-relaxed">{project.detail}</p>
            </div>

            <div>
              <h3 className="font-['Space_Grotesk'] text-lg font-semibold mb-3">技术栈</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-sm font-mono bg-gradient-to-br from-[#00d4ff]/10 to-[#a78bfa]/10 text-foreground border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-['Space_Grotesk'] text-lg font-semibold mb-3">项目截图</h3>
              <div className="grid grid-cols-3 gap-3">
                {project.screenshots.map((src, i) => (
                  <div
                    key={i}
                    className="relative aspect-video rounded-lg overflow-hidden border border-white/10 group"
                  >
                    <img src={src} alt={`screenshot-${i}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-['Space_Grotesk'] text-lg font-semibold mb-3">演示视频</h3>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-[#0a0e1a]">
                {videoPlaying ? (
                  <video
                    src={DEMO_VIDEO}
                    controls
                    autoPlay
                    className="w-full h-full object-contain bg-black"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/10 via-[#0a0e1a] to-[#a78bfa]/10 flex items-center justify-center group cursor-pointer">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0_212_255_0.1),transparent_60%)]" />
                    <button
                      onClick={() => setVideoPlaying(true)}
                      className="relative z-10 flex flex-col items-center gap-3"
                    >
                      <div className="size-16 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#a78bfa] flex items-center justify-center shadow-[0_0_40px_rgba(0_212_255_0.4)] group-hover:scale-110 transition-transform">
                        <Play className="size-7 text-[#0a0e1a] ml-1" fill="#0a0e1a" />
                      </div>
                      <span className="text-sm text-muted-foreground">点击播放演示</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {project.links.map((link) => (
                <Button
                  key={link.label}
                  variant="outline"
                  asChild
                  className="border-white/20 text-foreground hover:bg-white/10 hover:border-[#00d4ff]/50"
                >
                  <a href={link.url} target="_blank" rel="noreferrer">
                    {link.label}
                    <ExternalLink className="size-4 ml-2" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<TabType>('enterprise');
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);

  const filtered = MOCK_PROJECTS.filter((p) => p.type === activeTab);

  const openDetail = (project: IProject) => {
    setSelectedProject(project);
    setDetailOpen(true);
  };

  return (
    <section id="projects" className="w-full py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#00d4ff] text-sm font-semibold tracking-widest uppercase">
            Projects
          </span>
          <h2 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-bold mt-3 mb-4">
            项目作品
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            从企业级 AI 平台到个人创意项目，展示全栈技术能力与工程思维
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00d4ff] to-[#a78bfa] mx-auto rounded-full" />
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="relative inline-flex p-1 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
            {TABS.map((tab) => {
              const active = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative z-10 px-5 md:px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                  {active && (
                    <motion.div
                      layoutId="projects-tab-bg"
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#00d4ff]/15 to-[#a78bfa]/15 border border-white/10 -z-0"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects grid */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} onOpen={() => openDetail(p)} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <ProjectDetail
        project={selectedProject}
        open={detailOpen}
        onClose={() => setDetailOpen(false)}
      />
    </section>
  );
}
