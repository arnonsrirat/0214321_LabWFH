import {
  GraduationCap,
  User,
  School,
  BookOpen,
  Target,
  Cpu,
} from "lucide-react";

export default function About() {
  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-black text-slate-800 dark:text-white mb-2 flex items-center gap-3">
          <span>เกี่ยวกับฉัน</span>
          <GraduationCap className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 font-mono">
          // Profile & Academic Timeline
        </p>
      </div>

      {/* Profile Card */}
      <div className="glass-panel p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 relative overflow-hidden">
        {/* Subtle decorative color circles */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl" />
        
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md text-white">
            <User className="w-10 h-10" />
          </div>
          
          <div className="text-center sm:text-left space-y-2">
            <h2 className="text-2xl font-black text-slate-800 dark:text-white">
              นายอานนท์ ศรีรัฐ
            </h2>
            <p className="text-sm text-indigo-600 dark:text-indigo-400 font-mono font-semibold">
              Computer Science & Information Science (CIS) • Year 3
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              มหาวิทยาลัยผู้ให้บริการด้านการพัฒนาซอฟต์แวร์และแอปพลิเคชัน
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-slate-200/30 dark:border-slate-800/30 pt-6">
          <div className="flex gap-3">
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 h-fit">
              <School className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <p className="text-xs text-slate-400 dark:text-slate-500">คณะ/สถาบัน</p>
              <p className="text-sm font-bold text-slate-700 dark:text-slate-200">
                วิทยาการคอมพิวเตอร์และสารสนเทศ
              </p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 h-fit">
              <BookOpen className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <p className="text-xs text-slate-400 dark:text-slate-500">รายวิชาที่ชอบเป็นพิเศษ</p>
              <p className="text-sm font-bold text-slate-700 dark:text-slate-200">
                0214321 Web App Design & Development
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 h-fit">
              <Target className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <p className="text-xs text-slate-400 dark:text-slate-500">เป้าหมาย (Goal)</p>
              <p className="text-sm font-bold text-slate-700 dark:text-slate-200">
                "เป้าหมายมีไว้พุ่งชน" มุ่งมั่นศึกษาหาความรู้เพื่อสร้างประโยชน์
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 h-fit">
              <Cpu className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <p className="text-xs text-slate-400 dark:text-slate-500">ทักษะหลัก (Skills)</p>
              <p className="text-sm font-bold text-slate-700 dark:text-slate-200">
                TypeScript, Next.js, Frontend Architecture, SQL
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-black text-slate-800 dark:text-white">เส้นทางการเรียนรู้ (Timeline)</h3>
        
        <div className="relative border-l border-indigo-200 dark:border-indigo-900 ml-4 pl-6 space-y-6 text-sm">
          {/* Item 1 */}
          <div className="relative">
            <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-white dark:border-slate-900" />
            <h4 className="font-extrabold text-slate-800 dark:text-white">ปี 3: พัฒนาทักษะเชิงลึก (ปัจจุบัน)</h4>
            <p className="text-slate-500 dark:text-slate-400 mt-1">
              ศึกษาการทำ Web Application แบบ Full-stack ด้วย React, Next.js, การใช้ฐานข้อมูล, และแนวทางการทำ UI/UX ที่ส่งมอบประสบการณ์ที่ดีเยี่ยมให้ผู้ใช้
            </p>
          </div>

          {/* Item 2 */}
          <div className="relative">
            <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-700 border-4 border-white dark:border-slate-900" />
            <h4 className="font-extrabold text-slate-800 dark:text-white">ปี 2: โครงสร้างข้อมูลและระบบ</h4>
            <p className="text-slate-500 dark:text-slate-400 mt-1">
              เน้นวิชา Data Structures และการเขียนโปรแกรมเชิงวัตถุ (OOP) เรียนรู้กระบวนการแก้ปัญหาอย่างมีระบบและเข้าใจกระบวนการทำงานของอัลกอริทึม
            </p>
          </div>

          {/* Item 3 */}
          <div className="relative">
            <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-700 border-4 border-white dark:border-slate-900" />
            <h4 className="font-extrabold text-slate-800 dark:text-white">ปี 1: จุดเริ่มต้นการเป็นโปรแกรมเมอร์</h4>
            <p className="text-slate-500 dark:text-slate-400 mt-1">
              เริ่มก้าวแรกในการเขียนโค้ดด้วยภาษา C/C++ เรียนรู้ Programming Fundamentals และปรับเปลี่ยนแนวคิดเพื่อการแก้ไขปัญหาเชิงคำนวณ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
