import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { AlertCircle, ChevronLeft } from "lucide-react";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    return { title: "ไม่พบบทความ" };
  }

  const post = await res.json();
  return {
    title: `${post.title} | CIS Blog`,
    description: post.body?.slice(0, 160) || "",
  };
}

interface Post {
  id: number;
  title: string;
  body: string;
}

export default async function PostDetail({ params }: Props) {
  const { id } = await params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return (
      <div className="max-w-2xl mx-auto space-y-6 animate-fade-in text-center py-12">
        <div className="w-12 h-12 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="w-6 h-6" />
        </div>
        <h1 className="text-2xl font-black text-rose-500">ไม่พบบทความ #{id}</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          กรุณาตรวจสอบลิงก์บทความใหม่อีกครั้ง
        </p>
        <Link
          href="/posts"
          className="inline-block mt-4 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          ย้อนกลับไปหน้าบทความทั้งหมด
        </Link>
      </div>
    );
  }

  const post: Post = await res.json();

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
      <Link
        href="/posts"
        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
      >
        <ChevronLeft className="w-3.5 h-3.5" />
        ย้อนกลับไปบทความทั้งหมด
      </Link>

      <article className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 relative overflow-hidden">
        {/* Decorative corner glows */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl animate-pulse-glow" />

        <header className="space-y-4">
          <span className="text-xs font-mono font-bold px-2.5 py-1 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full border border-indigo-500/10 dark:border-indigo-400/10">
            ARTICLE #{post.id}
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-800 dark:text-white leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-xs text-slate-400 dark:text-slate-500 font-mono border-y border-slate-200/30 dark:border-slate-800/30 py-3">
            <span>By: JSONPlaceholder</span>
            <span>•</span>
            <span>Category: Computer Science</span>
          </div>
        </header>

        <section className="mt-8 text-slate-600 dark:text-slate-350 text-sm sm:text-base leading-relaxed space-y-4">
          <p>{post.body}</p>
          <p className="text-slate-400 dark:text-slate-500 italic text-xs mt-12 font-mono">
            // บทความนี้ถูกดึงผ่าน RESTful API เพื่อประกอบการเรียนรู้ในวิชาการพัฒนาเว็บแอปพลิเคชัน
          </p>
        </section>
      </article>
    </div>
  );
}
