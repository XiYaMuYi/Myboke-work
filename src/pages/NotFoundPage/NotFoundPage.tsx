import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] flex flex-col items-center justify-center py-24 px-6">
      <h1 className="font-['Space_Grotesk'] text-7xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#a78bfa] bg-clip-text text-transparent mb-4">
        404
      </h1>
      <p className="text-lg text-muted-foreground mb-8">页面不存在</p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-[#00d4ff] to-[#a78bfa] text-[#0a0e1a] font-semibold hover:opacity-90 transition-all"
      >
        返回首页
      </Link>
    </div>
  );
}
