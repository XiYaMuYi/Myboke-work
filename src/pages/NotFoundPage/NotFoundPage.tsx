import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0e1a] text-foreground">
      <h1 className="text-6xl font-bold mb-4 font-['Space_Grotesk'] bg-gradient-to-r from-[#00d4ff] to-[#a78bfa] bg-clip-text text-transparent">404</h1>
      <p className="text-lg text-muted-foreground mb-8">页面不存在</p>
      <Link to="/" className="text-[#00d4ff] hover:underline font-medium">返回首页</Link>
    </div>
  );
}
