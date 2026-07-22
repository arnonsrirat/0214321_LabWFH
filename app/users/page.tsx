import type { Metadata } from "next";
import LikeButton from "../../components/LikeButton";
import { Users } from "lucide-react";

export const metadata: Metadata = {
  title: "รายชื่อผู้ใช้งาน | CIS Blog",
};

interface User {
  id: number;
  name: string;
  email: string;
  company: { name: string };
  phone?: string;
  website?: string;
}

export default async function UsersPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await res.json();

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-800 dark:text-white mb-2 flex items-center gap-3">
            <span>รายชื่อผู้ใช้งาน</span>
            <Users className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-mono">
            // Fetching active API users
          </p>
        </div>
        <div className="glass-panel px-4 py-3 rounded-2xl border border-slate-200/50 dark:border-slate-800/50">
          <LikeButton />
        </div>
      </div>

      {/* Users Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {users.map((user: User) => {
          // Generate a soft gradient background for user avatar
          const gradients = [
            "from-indigo-400 to-cyan-400",
            "from-pink-400 to-rose-400",
            "from-purple-400 to-indigo-400",
            "from-emerald-400 to-teal-400",
            "from-amber-400 to-orange-400",
          ];
          const gradient = gradients[user.id % gradients.length];
          const initials = user.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2);

          return (
            <div
              key={user.id}
              className="glass-panel p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300"
            >
              <div>
                {/* User avatar simulation */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center font-bold text-white shadow-sm`}>
                    {initials}
                  </div>
                  <div>
                    <h2 className="font-extrabold text-slate-800 dark:text-slate-100 text-sm tracking-tight line-clamp-1">
                      {user.name}
                    </h2>
                    <p className="text-[10px] text-indigo-600 dark:text-indigo-400 font-mono">
                      ID: #{user.id}
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-2 text-xs">
                  <div className="flex justify-between items-center text-slate-500 dark:text-slate-400">
                    <span className="font-mono">Email:</span>
                    <span className="font-medium text-slate-800 dark:text-slate-350 truncate max-w-[150px]">
                      {user.email}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-slate-500 dark:text-slate-400">
                    <span className="font-mono">Company:</span>
                    <span className="font-medium text-slate-800 dark:text-slate-350 truncate max-w-[150px]">
                      {user.company.name}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/30 dark:border-slate-800/30 flex justify-between items-center text-[10px] font-mono text-slate-400">
                <span>Active User</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
