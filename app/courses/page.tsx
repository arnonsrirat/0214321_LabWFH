import Link from "next/link";
import { BookOpen, ChevronRight } from "lucide-react";

interface Course {
  id: string;
  name: string;
  credits: number;
}

const courses: Course[] = [
  { id: "0214321", name: "Web App Design & Dev", credits: 3 },
  { id: "0214101", name: "Programming Fundamentals", credits: 3 },
  { id: "0214201", name: "Data Structures", credits: 3 },
];

export default function Courses() {
  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-black text-slate-800 dark:text-white mb-2 flex items-center gap-3">
          <span>รายวิชาเรียนของฉัน</span>
          <BookOpen className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 font-mono">
          // Courses enrolled in CIS curriculum
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {courses.map((c: Course) => (
          <Link
            key={c.id}
            href={`/courses/${c.id}`}
            className="group glass-panel p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 flex flex-col sm:flex-row justify-between sm:items-center gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm"
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold px-2 py-0.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-md">
                  {c.id}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {c.credits} หน่วยกิต
                </span>
              </div>
              <h2 className="text-lg font-black text-slate-800 dark:text-slate-100 mt-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {c.name}
              </h2>
            </div>
            
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform self-end sm:self-auto">
              <span>รายละเอียดเพิ่มเติม</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
