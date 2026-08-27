import { Github, Mail, Linkedin, Heart } from 'lucide-react';
import { MOCK_CONTACT } from '@/data/portfolio';

export default function Footer() {
  const contact = MOCK_CONTACT;

  return (
    <footer className="w-full border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground flex flex-col md:flex-row items-center gap-1 md:gap-2">
            <span>© 2026 Alex Chen.</span>
            <span className="flex items-center gap-1">
              Built with <Heart className="size-3 text-[#00d4ff] fill-[#00d4ff]" /> and coffee
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="size-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-[#00d4ff] hover:border-[#00d4ff]/50 hover:bg-[#00d4ff]/10 transition-all"
              aria-label="GitHub"
            >
              <Github className="size-4" />
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="size-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-[#00d4ff] hover:border-[#00d4ff]/50 hover:bg-[#00d4ff]/10 transition-all"
              aria-label="Email"
            >
              <Mail className="size-4" />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="size-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-[#00d4ff] hover:border-[#00d4ff]/50 hover:bg-[#00d4ff]/10 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
