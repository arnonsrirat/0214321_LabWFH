import Link from "next/link";
import { AlertCircle, ChevronLeft } from "lucide-react";

interface CourseDetail {
  name: string;
  desc: string;
  instructor: string;
  details?: string[];
}

const courseData: Record<string, CourseDetail> = {
  "0214321": {
    name: "Web App Design & Dev",
    desc: "ศึกษาการพัฒนาแอปพลิเคชันบนเว็บยุคใหม่แบบ Full-stack",
    instructor: "อ.คณิดา",
    details: ["Next.js (App Router)", "React 19 & Hooks", "Tailwind CSS v4", "TypeScript Types"],
  },
  "0214101": {
    name: "Programming Fundamentals",
    desc: "ปูพื้นฐานการเขียนโปรแกรมเชิงโครงสร้างและการจัดทำอัลกอริทึมแก้ปัญหา",
    instructor: "อ.ประจำ",
    details: ["ภาษา C/C++", "Control Flows & Loops", "Functions & Arrays", "Pointers & Memory"],
  },
  "0214201": {
    name: "Data Structures",
    desc: "ศึกษาโครงสร้างข้อมูลสำคัญและการวิเคราะห์ประสิทธิภาพอัลกอริทึม",
    instructor: "อ.ประจำ",
    details: ["Linked Lists", "Stacks & Queues", "Trees & Graphs", "Sorting & Searching"],
  },
};

export default async function CourseDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = courseData[id];

  if (!course) {
    return (
      <div className="max-w-2xl mx-auto space-y-6 animate-fade-in text-center py-12">
        <div className="w-12 h-12 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="w-6 h-6" />
        </div>
        <h1 className="text-2xl font-black text-rose-500">ไม่พบรายวิชา {id}</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          ไม่พบข้อมูลวิชานี้ในประวัติหลักสูตร
        </p>
        <Link
          href="/courses"
          className="inline-block mt-4 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          ย้อนกลับไปหน้ารายวิชา
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
      <Link
        href="/courses"
        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
      >
        <ChevronLeft className="w-3.5 h-3.5" />
        ย้อนกลับไปหน้ารายวิชา
      </Link>

      <div className="glass-panel p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 relative overflow-hidden">
        {/* Glow decoration */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl" />

        <div className="space-y-4">
          <span className="text-xs font-mono font-bold px-2 py-0.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-md">
            รหัสวิชา: {id}
          </span>
          <h1 className="text-3xl font-black text-slate-800 dark:text-white leading-tight">
            {course.name}
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            {course.desc}
          </p>
          <div className="text-xs text-slate-400 dark:text-slate-500 font-mono">
            ผู้สอน: {course.instructor}
          </div>
        </div>

        {course.details && (
          <div className="mt-8 border-t border-slate-200/40 dark:border-slate-800/40 pt-6">
            <h2 className="text-sm font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
              // หัวข้อการเรียนรู้หลัก
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
              {course.details.map((topic, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
