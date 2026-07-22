import type { Metadata } from "next";
import Link from "next/link";
import { BookText, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "บทความทั้งหมด | CIS Blog",
  description: "รวมบทความทั้งหมดในบล็อก",
};

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default async function PostsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("โหลดข้อมูลไม่สำเร็จ");
  const posts: Post[] = await res.json();

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-black text-slate-800 dark:text-white mb-2 flex items-center gap-3">
          <span>บทความทั้งหมด</span>
          <BookText className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 font-mono">
          // Fetching from jsonplaceholder.typicode.com/posts
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {posts.map((post: Post) => (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            className="group glass-panel p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 block transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm"
          >
            <span className="text-[10px] font-mono text-indigo-500/80 dark:text-indigo-400 bg-indigo-500/5 dark:bg-indigo-400/5 px-2.5 py-1 rounded-full border border-indigo-500/10 dark:border-indigo-400/10">
              POST #{post.id}
            </span>
            <h2 className="text-lg font-extrabold text-slate-800 dark:text-slate-100 mt-3 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {post.title}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
              {post.body}
            </p>
            <div className="mt-4 text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
              <span>อ่านรายละเอียด</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
