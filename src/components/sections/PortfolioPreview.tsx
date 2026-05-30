import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PortfolioPreview() {
  const projects = [
    {
      title: "SaaS Enterprise HR Solution",
      description: "Platform manajemen karyawan skala besar.",
      techStack: ["Next.js", "TypeScript", "PostgreSQL"],
      link: "/portfolio/hr-solution",
    },
    {
      title: "E-Commerce Mobile App",
      description:
        "Aplikasi belanja online iOS & Android dengan interaksi super mulus.",
      techStack: ["React Native", "Tailwind CSS", "Node.js"],
      link: "/portfolio/ecommerce-app",
    },
    {
      title: "Fintech Dashboard Web App",
      description: "Aplikasi web analitik keuangan dengan grafik interaktif.",
      techStack: ["Next.js", "Shadcn UI", "Supabase"],
      link: "/portfolio/fintech-dashboard",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white dark:bg-black">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-16">
          Portofolio Pilihan Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-0 bg-gray-50 dark:bg-zinc-800 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl group overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-purple-500 to-indigo-600 dark:from-purple-800 dark:to-indigo-900 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition duration-500">
                [Preview Image]
              </div>
              <CardHeader className="px-6 pt-6 pb-2">
                <CardTitle className="text-xl font-bold text-gray-800 dark:text-white">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400 mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
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
        <Button
          asChild
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition duration-300 hover:scale-105"
        >
          <Link href="/portfolio">Lihat Semua Portofolio</Link>
        </Button>
      </div>
    </section>
  );
}
