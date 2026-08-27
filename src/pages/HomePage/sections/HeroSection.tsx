import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Mail, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MOCK_PERSONAL_INFO, MOCK_CONTACT } from '@/data/portfolio';

const HERO_IMG =
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80';

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const personalInfo = MOCK_PERSONAL_INFO;
  const contact = MOCK_CONTACT;
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  // Typewriter effect
  useEffect(() => {
    const fullText = personalInfo.slogan;
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, [personalInfo.slogan]);

  // Cursor blink
  useEffect(() => {
    const t = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(t);
  }, []);

  // Particle background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio);
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const particles: { x: number; y: number; vx: number; vy: number; size: number; color: string }[] = [];
    const count = 80;
    const colors = ['#00d4ff', '#a78bfa', '#60a5fa'];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    canvas.addEventListener('mousemove', onMouseMove);

    const onResize = () => {
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    window.addEventListener('resize', onResize);

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.offsetWidth) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.offsetHeight) p.vy *= -1;

        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          p.x += (dx / dist) * force * 1.5;
          p.y += (dy / dist) * force * 1.5;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.25;
            ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      canvas.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMG}
          alt="hero background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a]/80 via-[#0a0e1a]/60 to-[#0a0e1a]" />
      </div>

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 w-full h-full"
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-[11] opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm text-muted-foreground">
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d4ff] opacity-75" />
              <span className="relative inline-flex rounded-full size-2 bg-[#00d4ff]" />
            </span>
            正在寻找新机会 · Available for hire
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="font-['Space_Grotesk'] text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 leading-[1.1]"
        >
          <span className="text-foreground">Hi, I&apos;m </span>
          <span className="bg-gradient-to-r from-[#00d4ff] via-[#60a5fa] to-[#a78bfa] bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
          className="font-['Space_Grotesk'] text-2xl md:text-3xl font-semibold mb-6 text-[#00d4ff]"
        >
          {personalInfo.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="text-lg md:text-xl text-muted-foreground mb-10 min-h-[2rem]"
        >
          {displayedText}
          <span
            className={`inline-block w-[3px] h-5 ml-1 align-middle bg-[#00d4ff] ${
              showCursor ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] text-[#0a0e1a] font-semibold h-12 px-8 hover:shadow-[0_0_30px_rgba(0_212_255_0.4)] transition-all group"
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            查看项目
            <ArrowRight className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 px-8 border-white/20 text-foreground hover:bg-white/5 backdrop-blur-sm"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            联系我
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="size-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-[#00d4ff] hover:border-[#00d4ff]/50 transition-all"
            aria-label="GitHub"
          >
            <Github className="size-5" />
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="size-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-[#00d4ff] hover:border-[#00d4ff]/50 transition-all"
            aria-label="Email"
          >
            <Mail className="size-5" />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="size-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-[#00d4ff] hover:border-[#00d4ff]/50 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-5" />
          </a>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="size-5 text-[#00d4ff]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
