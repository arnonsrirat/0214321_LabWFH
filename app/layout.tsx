import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";
import ThemeToggle from "../components/ThemeToggle";
import { Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: { template: "%s | My Blog", default: "My Blog" },
  description: "บล็อกส่วนตัว สร้างด้วย Next.js + TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="bg-grid-pattern min-h-screen text-slate-900 dark:text-slate-100 transition-colors duration-300">
        {/* Ambient Decorative Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-400/10 dark:bg-indigo-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute top-[40%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-blue-400/10 dark:bg-purple-500/5 blur-[120px] pointer-events-none" />

        <div className="relative flex flex-col min-h-screen">
          {/* Glassmorphism Sticky Navbar */}
          <nav className="sticky top-0 z-50 glass-panel border-b border-slate-200/50 dark:border-slate-800/50 backdrop-blur-md px-6 py-4 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="text-xl font-extrabold text-indigo-600 dark:text-indigo-400 hover:scale-105 transition-transform flex items-center gap-2"
              >
                <Terminal className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span>CIS.Blog</span>
              </Link>
              <div className="hidden sm:flex gap-6 ml-6 text-sm font-semibold">
                <Link
                  href="/posts"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  บทความ
                </Link>
                <Link
                  href="/users"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  ผู้ใช้
                </Link>
                <Link
                  href="/about"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  เกี่ยวกับฉัน
                </Link>
                                <Link
                  href="/blog-spa"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  blog-spa
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Mobile menu link shortcuts */}
              <div className="flex sm:hidden gap-3 text-xs font-semibold mr-2">
                <Link
                  href="/posts"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  บทความ
                </Link>
                <Link
                  href="/users"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  ผู้ใช้
                </Link>
                <Link
                  href="/about"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  เกี่ยวกับ
                </Link>
                <Link
                  href="/blog-spa"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  blog-spa
                </Link>
              </div>
              <ThemeToggle />
            </div>
          </nav>

          {/* Main Content Area */}
          <main className="flex-grow max-w-4xl w-full mx-auto py-10 px-4 sm:px-6">
            {children}
          </main>

          {/* Footer */}
          <footer className="text-center py-8 text-slate-400 dark:text-slate-500 text-xs border-t border-slate-200/50 dark:border-slate-800/50 mt-12 bg-white/20 dark:bg-slate-900/20 backdrop-blur-sm">
            <p className="font-semibold text-slate-500 dark:text-slate-400">
              © 2026 My Blog — สร้างด้วย Next.js + TypeScript
            </p>
            <p className="mt-2 text-slate-400 dark:text-slate-500">
              0214321 Web App Design & Development • CIS Year 3
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
