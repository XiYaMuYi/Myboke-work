import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Mail, Linkedin, ArrowRight, Download } from 'lucide-react';
import { MOCK_PERSONAL_INFO, MOCK_CONTACT } from '@/data/portfolio';

const RESUME_URL = 'https://aka.doubaocdn.com/s/3vumJad5Og';

export default function HeroSection() {
  const info = MOCK_PERSONAL_INFO;
  const contact = MOCK_CONTACT;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [displaySlogan, setDisplaySlogan] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  // 打字机效果
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < info.slogan.length) {
        setDisplaySlogan(info.slogan.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, [info.slogan]);

  // 光标闪烁
  useEffect(() => {
    const timer = setInterval(() => {
      setShowCursor((v) => !v);
    }, 530);
    return () => clearInterval(timer);
  }, []);

  // 粒子网格背景
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animationId: number;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }

    const particleCount = Math.floor((width * height) / 18000);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.5,
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onResize);

    function animate() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 鼠标吸引
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          p.vx += (dx / dist) * 0.02;
          p.vy += (dy / dist) * 0.02;
        }

        p.x += p.vx;
        p.y += p.vy;

        // 阻尼
        p.vx *= 0.99;
        p.vy *= 0.99;

        // 边界
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // 画粒子
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 212, 255, 0.6)';
        ctx.fill();
      }

      // 连线
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const opacity = (1 - dist / 120) * 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(167, 139, 250, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0e1a]/40 to-[#0a0e1a] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 size-96 bg-[#00d4ff]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 size-80 bg-[#a78bfa]/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
        >
          <span className="size-2 rounded-full bg-[#00d4ff] animate-pulse" />
          <span className="text-sm text-muted-foreground">
            欢迎技术交流与项目合作
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-['Space_Grotesk'] text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          你好，我是
          <span className="bg-gradient-to-r from-[#00d4ff] via-[#a78bfa] to-[#00d4ff] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
            {' '}{info.name}
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-2xl md:text-3xl font-medium text-foreground mb-4"
        >
          {info.title}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground mb-12 min-h-[2em] font-mono"
        >
          {displaySlogan}
          <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} text-[#00d4ff] ml-1`}>
            |
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 h-12 px-8 rounded-md bg-gradient-to-r from-[#00d4ff] to-[#a78bfa] text-[#0a0e1a] font-semibold hover:opacity-90 transition-all shadow-[0_0_30px_rgba(0_212_255_/_0.3)]"
          >
            查看项目
            <ArrowRight className="size-4" />
          </button>
          <button
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center h-12 px-8 rounded-md border border-white/20 text-foreground hover:bg-white/5 backdrop-blur-sm text-sm font-medium transition-all"
          >
            联系我
          </button>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center h-12 px-6 rounded-md border border-white/20 text-foreground hover:bg-white/5 backdrop-blur-sm text-sm font-medium transition-all"
          >
            <Download className="size-4 mr-2" />
            下载简历
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center justify-center gap-3"
        >
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="size-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-[#00d4ff] hover:border-[#00d4ff]/50 hover:bg-[#00d4ff]/10 transition-all"
            aria-label="GitHub"
          >
            <Github className="size-5" />
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="size-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-[#00d4ff] hover:border-[#00d4ff]/50 hover:bg-[#00d4ff]/10 transition-all"
            aria-label="Email"
          >
            <Mail className="size-5" />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="size-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-[#00d4ff] hover:border-[#00d4ff]/50 hover:bg-[#00d4ff]/10 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-5" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs tracking-widest uppercase">向下滚动</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="size-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
