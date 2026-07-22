import Link from "next/link";
import type { Metadata } from "next";
import LikeButton from "../components/LikeButton";
import {
  Terminal,
  ArrowRight,
  GraduationCap,
  BookOpen,
  Target,
  Sparkles,
  Search,
  BookText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "หน้าแรก | CIS Blog",
};

interface Post {
  id: number;
  title: string;
  body: string;
}

async function getRecentPosts(): Promise<Post[]> {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=3",
    { cache: "no-store" }
  );
  return res.json();
}

export default async function Home() {
  const posts: Post[] = await getRecentPosts();

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Top Header Marquee (Expressive Typography Animation) */}
      <div className="overflow-hidden glass-panel py-2 rounded-xl border border-slate-200/50 dark:border-slate-800/50 text-xs font-mono tracking-widest text-indigo-600 dark:text-indigo-400">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="mx-4">CIS STUDENT PORTFOLIO • ARNON SRIRAT • COMPUTER SCIENCE & INFORMATION SCIENCE</span>
          <span className="mx-4">NEXT.JS 16 • REACT 19 • TAILWIND CSS V4 • TYPESCRIPT</span>
          <span className="mx-4">CIS STUDENT PORTFOLIO • ARNON SRIRAT • COMPUTER SCIENCE & INFORMATION SCIENCE</span>
          <span className="mx-4">NEXT.JS 16 • REACT 19 • TAILWIND CSS V4 • TYPESCRIPT</span>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* 1. Hero Welcome Card (Spans 2 columns) */}
        <div className="md:col-span-2 glass-panel p-8 rounded-3xl relative overflow-hidden cyber-border shadow-sm flex flex-col justify-between min-h-[300px]">
          {/* Neon decorative background glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />
          
          <div>
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-mono text-sm mb-3">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Status: Active & Coding...</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-none">
              สวัสดีครับ
            </h1>
            
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
              ผมชื่อ <strong className="text-slate-950 dark:text-white font-extrabold text-glow">นายอานนท์ ศรีรัฐ</strong>
              <br />
              นิสิตชั้นปีที่ 3 สาขาวิทยาการคอมพิวเตอร์และสารสนเทศ (CIS)
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 items-center justify-between">
            <p className="text-xs text-slate-400 dark:text-slate-500 font-mono flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" />
              <span>cd portfolio && npm run dev</span>
            </p>
            <Link
              href="/posts"
              className="group flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-2xl transition-all duration-300 font-semibold shadow-md shadow-indigo-500/10 hover:shadow-indigo-500/20 transform hover:-translate-y-0.5"
            >
              อ่านบทความทั้งหมด
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 2. CIS Tech Stack Card (1 column) */}
        <div className="glass-panel p-6 rounded-3xl flex flex-col justify-between border border-slate-200/50 dark:border-slate-800/50">
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
              // Tech Stack & Skills
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "Next.js", color: "bg-black text-white dark:bg-white dark:text-black" },
                { name: "React 19", color: "bg-blue-500/10 text-blue-600 dark:text-blue-400" },
                { name: "TypeScript", color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400" },
                { name: "Tailwind v4", color: "bg-teal-500/10 text-teal-600 dark:text-teal-400" },
                { name: "SQL", color: "bg-amber-500/10 text-amber-600 dark:text-amber-400" },
                { name: "Python", color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className={`px-3 py-2.5 rounded-xl text-xs font-semibold text-center transition-all duration-300 hover:scale-105 hover:shadow-sm ${tech.color}`}
                >
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-6 border-t border-slate-200/40 dark:border-slate-800/40 pt-4">
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono leading-relaxed">
              มุ่งเน้นการสร้างเว็บด้วยโครงสร้าง Clean Code และสไตล์การตอบสนองที่รวดเร็ว
            </p>
          </div>
        </div>

        {/* 3. Academic Profile Card (1 column) */}
        <div className="glass-panel p-6 rounded-3xl flex flex-col justify-between border border-slate-200/50 dark:border-slate-800/50">
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
              // Education & Goal
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mt-0.5">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 dark:text-slate-500">คณะ / สาขา</p>
                  <p className="text-sm font-bold text-slate-850 dark:text-slate-200 leading-snug">
                    วิทยาการคอมพิวเตอร์และสารสนเทศ (CIS)
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mt-0.5">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 dark:text-slate-500">วิชาที่สนใจพิเศษ</p>
                  <p className="text-sm font-bold text-slate-850 dark:text-slate-200 leading-snug">
                    0214321 Web App Design & Dev
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mt-0.5">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 dark:text-slate-500">เป้าหมายสูงสุด</p>
                  <p className="text-sm font-medium italic text-slate-600 dark:text-slate-300 leading-snug">
                    "เป้าหมายมีไว้พุ่งชน สร้างสรรค์เทคโนโลยีเพื่อสังคม"
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200/40 dark:border-slate-800/40">
            <Link
              href="/about"
              className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1.5"
            >
              <span>ดูประวัติของฉันทั้งหมด</span>
              <Search className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 4. Interactive Like Sandbox (1 column) */}
        <div className="glass-panel p-6 rounded-3xl flex flex-col items-center justify-center text-center border border-slate-200/50 dark:border-slate-800/50">
          <div className="mb-4">
            <div className="w-10 h-10 mx-auto rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center animate-pulse">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-extrabold text-slate-800 dark:text-slate-200 mt-3">
              Microinteractions
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-[200px] mx-auto">
              ลองโหวตให้กำลังใจเจ้าของบล็อกผ่านปุ่มพิเศษด้านล่างได้ครับ
            </p>
          </div>

          <div className="py-2">
            <LikeButton />
          </div>
        </div>

        {/* 5. Custom Dynamic Course Quick Link (1 column) */}
        <div className="glass-panel p-6 rounded-3xl flex flex-col justify-between border border-slate-200/50 dark:border-slate-800/50">
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
              // Courses Details
            </h2>
            <div className="space-y-3">
              <Link
                href="/courses/0214321"
                className="block p-3 rounded-2xl bg-slate-100/50 dark:bg-slate-900/50 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 border border-slate-200/50 dark:border-slate-800/50 transition-colors"
              >
                <div className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">
                  0214321
                </div>
                <div className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Web App Design & Dev
                </div>
              </Link>
              <Link
                href="/courses/0214101"
                className="block p-3 rounded-2xl bg-slate-100/50 dark:bg-slate-900/50 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 border border-slate-200/50 dark:border-slate-800/50 transition-colors"
              >
                <div className="text-xs font-mono font-bold text-slate-500">
                  0214101
                </div>
                <div className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Programming Fundamentals
                </div>
              </Link>
            </div>
          </div>
          
          <div className="mt-4 text-right">
            <Link
              href="/courses"
              className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 justify-end"
            >
              <span>รายวิชาเรียนทั้งหมด</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>

      {/* Recent Posts Section */}
      <div className="mt-12">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-2xl font-black text-slate-800 dark:text-white flex items-center gap-2">
            <BookText className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <span>บทความแนะนำล่าสุด</span>
            <span className="text-xs font-mono bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 px-2 py-1 rounded">
              LATEST
            </span>
          </h2>
          <Link
            href="/posts"
            className="text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            ดูทั้งหมด
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post: Post) => (
            <Link
              key={post.id}
              href={`/posts/${post.id}`}
              className="group glass-panel p-6 rounded-3xl flex flex-col justify-between min-h-[180px] border border-slate-200/50 dark:border-slate-800/50 transform hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <span className="text-[10px] font-mono text-indigo-500/80 dark:text-indigo-400 bg-indigo-500/5 dark:bg-indigo-400/5 px-2.5 py-1 rounded-full border border-indigo-500/10 dark:border-indigo-400/10">
                  Post #{post.id}
                </span>
                <h3 className="font-extrabold text-slate-800 dark:text-slate-100 mt-3 line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs mt-2 line-clamp-3 leading-relaxed">
                  {post.body}
                </p>
              </div>
              <div className="mt-4 text-xs font-bold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1.5 transition-transform flex items-center gap-1">
                <span>อ่านบทความนี้</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
