"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

export default function LikeButton() {
  const [liked, setLiked] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [animate, setAnimate] = useState<boolean>(false);

  const handleLike = (): void => {
    setLiked((prev: boolean) => !prev);
    setCount((prev: number) => prev + (liked ? -1 : 1));
    setAnimate(true);
    setTimeout(() => setAnimate(false), 500);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <button
        onClick={handleLike}
        className={`group relative flex items-center justify-center gap-3 px-6 py-3 rounded-full text-base font-bold overflow-hidden transition-all duration-300 transform active:scale-95 border ${
          liked
            ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white border-transparent shadow-lg shadow-rose-500/20 scale-105"
            : "bg-white/50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-800"
        }`}
      >
        {/* Heart Icon with Microinteraction Animations */}
        <div
          className={`transition-transform duration-300 ${
            liked ? "scale-125 text-white" : "text-rose-500 group-hover:scale-120 group-hover:rotate-12"
          } ${animate ? "animate-bounce" : ""}`}
        >
          <Heart className={`w-5 h-5 ${liked ? "fill-current" : ""}`} />
        </div>

        {/* Counter */}
        <span className="font-mono text-sm tabular-nums tracking-wide">
          {count} Likes
        </span>

        {/* CSS Sparkles Effect when Liked */}
        {liked && (
          <span className="absolute inset-0 pointer-events-none">
            <span className="absolute w-1 h-1 bg-white rounded-full animate-ping top-2 left-6 opacity-75" />
            <span className="absolute w-1.5 h-1.5 bg-white rounded-full animate-ping bottom-2 right-8 opacity-75" />
            <span className="absolute w-1 h-1 bg-white rounded-full animate-ping top-6 right-3 opacity-50" />
          </span>
        )}
      </button>
      
      <p className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">
        {liked ? "ขอบคุณสำหรับกำลังใจครับ!" : "กดถูกใจบล็อกนี้"}
      </p>
    </div>
  );
}
