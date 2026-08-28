import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import App from './app';
import './index.css';

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="min-h-screen bg-[#0a0e1a] flex items-center justify-center p-6">
      <div className="max-w-md w-full p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">出现了一些问题</h2>
        <p className="text-sm text-muted-foreground mb-4 font-mono break-all">
          {error.message}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#a78bfa] text-[#0a0e1a] font-medium text-sm"
        >
          刷新页面
        </button>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>,
);
