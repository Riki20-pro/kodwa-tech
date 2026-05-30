import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function BlogPage() {
  const blogPosts = [
    {
      title:
        "Mengapa Web App Adalah Kunci Sukses Efisiensi Operasional Perusahaan Modern",
      date: "2026-05-30",
      readTime: "5 min read",
      summary:
        "Memahami bagaimana aplikasi web khusus dapat merevolusi alur kerja dan produktivitas bisnis Anda.",
      link: "/blog/web-app-efficiency",
    },
    {
      title:
        "Panduan Memilih Antara Mobile App Native atau Cross-Platform untuk Bisnis Anda",
      date: "2026-05-28",
      readTime: "8 min read",
      summary:
        "Perbandingan mendalam untuk membantu Anda memutuskan teknologi aplikasi mobile terbaik untuk kebutuhan bisnis.",
      link: "/blog/mobile-app-choice",
    },
    {
      title:
        "Mengenal SaaS: Bagaimana Perangkat Lunak Berbasis Langganan Bisa Melejitkan Skala Usaha",
      date: "2026-05-25",
      readTime: "7 min read",
      summary:
        "Jelajahi potensi SaaS dalam menciptakan pendapatan berulang dan ekspansi pasar yang cepat.",
      link: "/blog/understanding-saas",
    },
    {
      title: "Strategi Digitalisasi Bisnis dengan Solusi Kustom",
      date: "2026-05-20",
      readTime: "6 min read",
      summary:
        "Langkah-langkah esensial untuk mengintegrasikan teknologi kustom demi pertumbuhan bisnis yang berkelanjutan.",
      link: "/blog/digitalisasi-strategi",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight mb-4">
          Blog KODWA TECH
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-16">
          Pusat edukasi dan wawasan terbaru seputar teknologi, pengembangan
          perangkat lunak, dan digitalisasi bisnis.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="p-6 bg-gray-50 dark:bg-zinc-800 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl text-left"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
                  {post.date} &bull; {post.readTime}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {post.summary}
                </p>
                <Link
                  href={post.link}
                  className="text-purple-600 hover:text-purple-800 font-semibold flex items-center group"
                >
                  Baca Selengkapnya
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
