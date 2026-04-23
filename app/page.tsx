'use client';

import { useChat } from 'ai/react';

export default function App() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-cyan-400 p-4 font-mono flex items-center justify-center">
      <div className="w-full max-w-3xl border border-cyan-900/50 rounded-lg shadow-[0_0_40px_rgba(0,255,255,0.05)] bg-[#0f0f0f] p-6">
        
        {/* Header - Karizma Kısmı */}
        <header className="border-b border-cyan-900/50 mb-6 pb-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl tracking-[0.3em] font-bold text-white">QUADRIUM<span className="text-cyan-500">AI</span></h1>
            <p className="text-[10px] text-cyan-700 uppercase">Secure Connection Established</p>
          </div>
          <div className="text-[10px] text-green-500 animate-pulse">● SYSTEM_ONLINE</div>
        </header>

        {/* Chat Alanı */}
        <div className="h-[450px] overflow-y-auto mb-6 space-y-4 p-4 bg-black/40 rounded border border-white/5 scrollbar-hide">
          {messages.length === 0 && (
            <div className="text-cyan-900 text-sm italic">Sistem hazır. Giriş bekleniyor...</div>
          )}
          {messages.map(m => (
            <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-3 rounded ${m.role === 'user' ? 'bg-cyan-950/20 border border-cyan-500/30 text-cyan-100' : 'bg-slate-900/50 border border-slate-700 text-green-400'}`}>
                <span className="text-[9px] block opacity-40 uppercase mb-1">{m.role === 'user' ? 'Giriş' : 'QuadriumAI'}</span>
                <div className="text-sm leading-relaxed whitespace-pre-wrap">{m.content}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Input Alanı */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            className="flex-1 bg-black/60 border border-cyan-900/50 rounded p-3 text-cyan-200 focus:outline-none focus:border-cyan-500 transition-all text-sm placeholder:text-cyan-900"
            value={input}
            placeholder="Mesajınızı buraya yazın..."
            onChange={handleInputChange}
          />
          <button 
            type="submit" 
            className="bg-cyan-600 text-black px-6 py-2 rounded font-bold hover:bg-cyan-400 transition-colors uppercase text-xs tracking-tighter"
          >
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
}