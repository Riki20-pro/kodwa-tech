import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PortfolioPage() {
  const portfolioItems = [
    {
      title: "SaaS Enterprise HR Solution",
      description:
        "Platform manajemen karyawan skala besar untuk efisiensi operasional.",
      techStack: ["Next.js", "TypeScript", "PostgreSQL"],
      link: "/portfolio/hr-solution-case-study",
    },
    {
      title: "E-Commerce Mobile App",
      description:
        "Aplikasi belanja online iOS & Android dengan interaksi super mulus dan fitur personalisasi.",
      techStack: ["React Native", "Tailwind CSS", "Node.js"],
      link: "/portfolio/ecommerce-app-case-study",
    },
    {
      title: "Fintech Dashboard Web App",
      description:
        "Aplikasi web analitik keuangan dengan grafik interaktif dan laporan real-time.",
      techStack: ["Next.js", "Shadcn UI", "Supabase"],
      link: "/portfolio/fintech-dashboard-case-study",
    },
    {
      title: "Custom CRM System",
      description:
        "Sistem CRM yang disesuaikan untuk mengelola hubungan pelanggan dan meningkatkan penjualan.",
      techStack: ["Remix", "Prisma", "SQLite"],
      link: "/portfolio/crm-system-case-study",
    },
    {
      title: "Healthcare Booking Platform",
      description:
        "Platform booking online untuk layanan kesehatan dengan fitur janji temu dan rekam medis.",
      techStack: ["Gatsby", "GraphQL", "Firebase"],
      link: "/portfolio/healthcare-platform-case-study",
    },
    {
      title: "Educational Portal",
      description:
        "Portal edukasi interaktif dengan modul pembelajaran, kuis, dan sertifikasi online.",
      techStack: ["Next.js", "MongoDB", "Stripe"],
      link: "/portfolio/educational-portal-case-study",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight mb-4">
          Karya & Studi Kasus Terpilih
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-16">
          Jelajahi bagaimana KODWA TECH membantu berbagai usaha, instansi, dan
          organisasi mewujudkan produk digital kustom berkinerja tinggi.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioItems.map((item, index) => (
            <Card
              key={index}
              className="p-0 bg-gray-50 dark:bg-zinc-800 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl group overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-purple-500 to-indigo-600 dark:from-purple-800 dark:to-indigo-900 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition duration-500">
                [Preview Image]
              </div>
              <CardHeader className="px-6 pt-6 pb-2 text-left">
                <CardTitle className="text-xl font-bold text-gray-800 dark:text-white">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400 mt-2">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 pb-6 text-left">
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={item.link}
                  className="text-purple-600 hover:text-purple-800 font-semibold flex items-center group"
                >
                  Lihat Studi Kasus
                  <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
