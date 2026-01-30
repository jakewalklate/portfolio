
'use client';

import { useChat } from '@ai-sdk/react';
import { useState, useEffect, useRef } from 'react';
import { Brain, X, Send, Terminal, Loader2, Minus } from 'lucide-react';

interface Message {
  id: string;
  role: 'function' | 'system' | 'user' | 'assistant' | 'data' | 'tool';
  content: string;
}

export default function DigitalTwin() {
  const [isOpen, setIsOpen] = useState(false);

  // Use useChat ONLY for messages and streaming. Manage input manually to avoid "undefined" fighting.
  const { messages, isLoading, sendMessage } = useChat({
    api: '/api/chat',
    messages: [
      {
        id: 'welcome',
        role: 'system',
        content: "Systems online. I am the Digital Twin of svnty. Query the architecture or the philosophy."
      }
    ]
  } as any) as any;

  const [localInput, setLocalInput] = useState('');

  const handleLocalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!localInput.trim() || isLoading) return;

    // Append user message directly
    // Using sendMessage (which is what useChat returns in this SDK version likely).
    // If sendMessage is also undefined, we have a bigger problem (incorrect imports).
    if (sendMessage) {
      try {
        await sendMessage({ role: 'user', content: localInput });
        setLocalInput('');
      } catch (e) {
        console.error("Error sending message:", e);
      }
    } else {
      console.error("No sendMessage function available from useChat hook", { messages, isLoading });
    }
  };

  // Auto-scroll to bottom
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-black/90 backdrop-blur-xl border border-zinc-800 rounded-lg shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-200">

          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-zinc-200 text-sm font-bold font-mono">DIGITAL TWIN_</span>
            </div>
            {/* <div className="flex items-center gap-2">
              <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white transition-colors cursor-pointer">
                <Minus size={16} />
              </button>
            </div> */}
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
            {messages.length === 0 && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center shrink-0 border border-white/5">
                  <Terminal size={14} className="text-green-400" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-zinc-500 font-mono">svnty_twin</div>
                  <div className="p-3 bg-zinc-900 rounded-lg rounded-tl-none border border-zinc-800 text-sm text-zinc-300 shadow-sm">
                    Systems online. I am the Digital Twin of svnty. Query the architecture or the philosophy.
                  </div>
                </div>
              </div>
            )}

            {messages.map((m: any) => (
              m.role === 'user' ? (
                <div key={m.id} className="flex justify-end gap-3">
                  <div className="space-y-1 max-w-[80%]">
                    <div className="p-3 bg-zinc-100 text-black rounded-lg rounded-tr-none text-sm shadow-sm font-medium">
                      {m.content}
                    </div>
                  </div>
                </div>
              ) : (
                <div key={m.id} className="flex gap-3">
                  <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center shrink-0 border border-white/5">
                    <Terminal size={14} className="text-green-400" />
                  </div>
                  <div className="space-y-1 max-w-[85%]">
                    <div className="text-xs text-zinc-500 font-mono">svnty_twin</div>
                    <div className="p-3 bg-zinc-900 rounded-lg rounded-tl-none border border-zinc-800 text-sm text-zinc-300 shadow-sm leading-relaxed whitespace-pre-wrap">
                      {m.content}
                    </div>
                  </div>
                </div>
              )
            ))}

            {isLoading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center shrink-0 border border-white/5">
                  <Terminal size={14} className="text-green-400" />
                </div>
                <div className="p-3 bg-zinc-900 rounded-lg rounded-tl-none border border-zinc-800">
                  <Loader2 size={16} className="text-zinc-500 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Footer / Input */}
          <div className="p-3 bg-zinc-900 border-t border-zinc-800">
            <form onSubmit={handleLocalSubmit} className="relative">
              <input
                className="w-full bg-black border border-zinc-800 text-white text-sm rounded-md pl-3 pr-10 py-2.5 focus:outline-none focus:border-zinc-700 placeholder:text-zinc-600 font-mono"
                value={localInput}
                onChange={(e) => setLocalInput(e.target.value)}
                placeholder="Ask me anything..."
              />
              <button
                type="submit"
                disabled={isLoading || !localInput.trim()}
                className="absolute right-2 top-2 p-1 text-zinc-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={14} />
              </button>
            </form>
            <div className="flex justify-center mt-2">
              <span className="text-[10px] text-zinc-600 font-mono">RUNNING ON LLAMA-3.3-70B • GROQ</span>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group cursor-pointer flex items-center justify-center w-12 h-12 rounded-full shadow-lg border border-white/10 transition-all duration-300 ${isOpen ? 'bg-zinc-800 text-zinc-400 rotate-90' : 'bg-white text-black hover:scale-110'}`}
      >
        {isOpen ? <X size={20} className='text-red-300 group-hover:text-red-400 transition-all' /> : <Brain size={20} className="group-hover:text-purple-600 transition-colors" />}
      </button>
    </div>
  );
}
