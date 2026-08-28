import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, Send, MapPin, Download, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast, Toaster } from 'sonner';
import { MOCK_CONTACT } from '@/data/portfolio';

const RESUME_URL = 'https://aka.doubaocdn.com/s/3vumJad5Og';

const CONTACT_ITEMS = [
  { icon: Mail, label: '主邮箱', value: MOCK_CONTACT.email, href: `mailto:${MOCK_CONTACT.email}` },
  { icon: Mail, label: '备用邮箱', value: MOCK_CONTACT.email2, href: `mailto:${MOCK_CONTACT.email2}` },
  { icon: MapPin, label: '所在地', value: MOCK_CONTACT.location, href: '#' },
  { icon: MessageCircle, label: '状态', value: MOCK_CONTACT.status, href: '#' },
];

export default function ContactSection() {
  const contact = MOCK_CONTACT;
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error('请填写完整信息');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error('请输入有效的邮箱地址');
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    toast.success('消息已发送！我会尽快回复你 🚀');
    setForm({ name: '', email: '', message: '' });
    setSubmitting(false);
  };

  return (
    <section id="contact" className="w-full py-24 md:py-32 bg-gradient-to-b from-transparent via-[#00d4ff]/[0.02] to-transparent">
      <Toaster theme="dark" position="top-right" />
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00d4ff] text-sm font-semibold tracking-widest uppercase">
            Contact
          </span>
          <h2 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-bold mt-3 mb-4">
            联系我
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            有技术交流、项目合作或其他想法？欢迎随时联系我
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00d4ff] to-[#a78bfa] mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#00d4ff]/10 to-[#a78bfa]/10 border border-white/10 backdrop-blur-sm">
              <h3 className="font-['Space_Grotesk'] text-xl font-bold mb-4">让我们聊聊</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                无论是技术交流、项目合作还是职业机会，都欢迎与我联系。
                我通常会在 24 小时内回复邮件。
              </p>

              <div className="space-y-3">
                {CONTACT_ITEMS.map((item) => {
                  const Icon = item.icon;
                  const isExternal = item.href.startsWith('mailto:') || item.href.startsWith('http');
                  const Tag = isExternal ? 'a' : 'div';
                  return (
                    <Tag
                      key={item.label}
                      href={isExternal ? item.href : undefined}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/20 hover:bg-white/[0.06] transition-all group"
                    >
                      <div className="size-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#00d4ff]/10 transition-colors">
                        <Icon className="size-4 text-[#00d4ff]" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs text-muted-foreground">{item.label}</div>
                        <div className="text-sm text-foreground font-medium truncate">
                          {item.value}
                        </div>
                      </div>
                    </Tag>
                  );
                })}
              </div>
            </div>

            {/* Download resume */}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full p-4 rounded-xl bg-gradient-to-r from-[#00d4ff]/10 to-[#a78bfa]/10 border border-white/10 hover:border-[#00d4ff]/40 hover:bg-[#00d4ff]/10 transition-all group"
            >
              <Download className="size-5 text-[#00d4ff]" />
              <span className="text-sm font-medium text-foreground">下载简历 PDF</span>
            </a>

            {/* Social links */}
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="size-11 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-muted-foreground hover:text-[#00d4ff] hover:border-[#00d4ff]/40 hover:bg-[#00d4ff]/10 transition-all"
                aria-label="GitHub"
              >
                <Github className="size-5" />
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="size-11 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-muted-foreground hover:text-[#00d4ff] hover:border-[#00d4ff]/40 hover:bg-[#00d4ff]/10 transition-all"
                aria-label="Email"
              >
                <Mail className="size-5" />
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="size-11 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-muted-foreground hover:text-[#00d4ff] hover:border-[#00d4ff]/40 hover:bg-[#00d4ff]/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5" />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm space-y-5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">姓名</label>
                  <Input
                    type="text"
                    placeholder="你的名字"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-white/[0.03] border-white/10 h-11 focus-visible:ring-[#00d4ff]/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">邮箱</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-white/[0.03] border-white/10 h-11 focus-visible:ring-[#00d4ff]/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">消息</label>
                <Textarea
                  placeholder="想聊点什么..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="bg-white/[0.03] border-white/10 resize-none focus-visible:ring-[#00d4ff]/50"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="w-full bg-gradient-to-r from-[#00d4ff] to-[#a78bfa] text-[#0a0e1a] font-semibold h-12 hover:shadow-[0_0_30px_rgba(0_212_255_/_0.3)] transition-all"
              >
                {submitting ? '发送中...' : '发送消息'}
                <Send className="size-4 ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
