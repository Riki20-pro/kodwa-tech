"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useParams } from "next/navigation";

const blogArticles = [
  {
    slug: "web-app-efficiency",
    title:
      "Mengapa Web App Adalah Kunci Sukses Efisiensi Operasional Perusahaan Modern",
    date: "2026-05-30",
    readTime: "5 min read",
    category: "Web Development",
    content: `
      <p class="mb-4">Di era digital yang serba cepat ini, perusahaan modern dituntut untuk beradaptasi dengan inovasi teknologi demi menjaga daya saing. Salah satu investasi paling strategis yang dapat dilakukan adalah pengembangan aplikasi web (web app) kustom. Web app bukan hanya sekadar website informatif, melainkan sebuah sistem interaktif yang dirancang khusus untuk mengotomatisasi, menyederhanakan, dan mengoptimalkan berbagai proses bisnis.</p>
      <p class="mb-4">Efisiensi operasional adalah jantung dari setiap bisnis yang berkembang. Dengan web app, perusahaan dapat mengintegrasikan berbagai departemen mulai dari HR, keuangan, penjualan, hingga manajemen proyek dalam satu platform terpusat. Ini menghilangkan silo data, mengurangi pekerjaan manual yang repetitif, dan meminimalkan kesalahan manusia. Bayangkan saja, tim penjualan dapat memperbarui status klien secara real-time, departemen HR dapat mengelola data karyawan dengan mudah, dan manajemen dapat memantau KPI secara instan.</p>
      <p class="mb-4">Selain efisiensi internal, web app juga meningkatkan pengalaman pelanggan. Aplikasi pemesanan online, portal self-service, atau dasbor personalisasi pelanggan adalah contoh bagaimana web app dapat menambah nilai dan loyalitas. Dengan akses 24/7 dan antarmuka yang intuitif, pelanggan dapat berinteraksi dengan layanan Anda kapan saja, di mana saja. Investasi pada web app bukan hanya tentang teknologi, tetapi tentang membangun fondasi bisnis yang lebih kuat, adaptif, dan siap menghadapi tantangan masa depan.</p>
    `,
  },
  {
    slug: "mobile-app-choice",
    title:
      "Panduan Memilih Antara Mobile App Native atau Cross-Platform untuk Bisnis Anda",
    date: "2026-05-28",
    readTime: "8 min read",
    category: "Mobile Development",
    content: `
      <p class="mb-4">Memutuskan jenis aplikasi mobile yang tepat untuk bisnis Anda—native atau cross-platform—adalah langkah krusial yang akan mempengaruhi biaya, waktu pengembangan, dan kinerja aplikasi di masa depan. Keduanya memiliki kelebihan dan kekurangan masing-masing, dan pilihan terbaik sangat bergantung pada tujuan spesifik, anggaran, serta target audiens Anda.</p>
      <p class="mb-4">Aplikasi native dikembangkan khusus untuk satu sistem operasi (iOS atau Android) menggunakan bahasa pemrograman asli seperti Swift/Objective-C untuk iOS dan Kotlin/Java untuk Android. Keunggulannya terletak pada performa maksimal, akses penuh ke fitur perangkat keras (kamera, GPS, sensor), dan pengalaman pengguna yang paling responsif dan mulus. Namun, pengembangannya memakan waktu dan biaya lebih tinggi karena memerlukan basis kode terpisah untuk setiap platform.</p>
      <p class="mb-4">Di sisi lain, aplikasi cross-platform memungkinkan satu basis kode untuk digunakan di berbagai sistem operasi, berkat framework seperti React Native atau Flutter. Ini secara signifikan mengurangi waktu dan biaya pengembangan, serta mempercepat waktu pemasaran. Meskipun performanya mungkin sedikit di bawah native pada kasus tertentu, kemajuan teknologi saat ini membuat perbedaan tersebut semakin minimal untuk sebagian besar aplikasi bisnis. Pilihan ini ideal bagi startup atau bisnis yang ingin menjangkau audiens luas dengan cepat dan efisien.</p>
      <p class="mb-4">Untuk membuat keputusan terbaik, pertimbangkan prioritas Anda: apakah performa absolut dan fitur perangkat keras adalah yang utama (native), ataukah kecepatan, efisiensi biaya, dan jangkauan pasar yang luas (cross-platform)? Konsultasi dengan ahli dapat membantu Anda menimbang pro dan kontra sesuai dengan visi bisnis Anda.</p>
    `,
  },
  {
    slug: "understanding-saas",
    title:
      "Mengenal SaaS: Bagaimana Perangkat Lunak Berbasis Langganan Bisa Melejitkan Skala Usaha",
    date: "2026-05-25",
    readTime: "7 min read",
    category: "SaaS",
    content: `
      <p class="mb-4">Software as a Service (SaaS) telah menjadi model bisnis yang dominan di industri perangkat lunak, menawarkan fleksibilitas, skalabilitas, dan efisiensi biaya yang tak tertandingi bagi pengguna maupun penyedia. Bagi perusahaan yang ingin melejitkan skala usahanya, mengembangkan produk berbasis SaaS adalah strategi yang sangat menjanjikan.</p>
      <p class="mb-4">Model SaaS memungkinkan pengguna mengakses perangkat lunak melalui internet berbasis langganan, tanpa perlu menginstal atau memelihara infrastruktur. Ini berarti biaya awal yang lebih rendah, pembaruan otomatis, dan aksesibilitas dari mana saja. Bagi penyedia, SaaS menciptakan aliran pendapatan berulang yang stabil, mempermudah distribusi produk, dan memungkinkan iterasi serta peningkatan fitur yang cepat berdasarkan umpan balik pengguna.</p>
      <p class="mb-4">Skalabilitas adalah salah satu daya tarik utama SaaS. Dengan arsitektur berbasis cloud, produk dapat dengan mudah menangani peningkatan jumlah pengguna dan data tanpa memerlukan investasi hardware besar. Ini memungkinkan perusahaan untuk tumbuh dengan cepat, menjangkau pasar global, dan beradaptasi dengan perubahan kebutuhan pasar. KODWA TECH berfokus pada pembangunan SaaS dengan arsitektur yang kuat dan siap tumbuh, memastikan produk Anda dapat berkembang seiring dengan ambisi bisnis Anda.</p>
      <p class="mb-4">Investasi pada pengembangan SaaS adalah investasi jangka panjang yang dapat mengubah cara bisnis beroperasi, menciptakan nilai baru, dan membuka peluang pasar yang belum terjamah. Dengan perencanaan yang tepat dan eksekusi yang solid, SaaS dapat menjadi mesin pertumbuhan utama bagi perusahaan Anda.</p>
    `,
  },
];

export default function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const unwrappedParams = React.use(params);
  const { slug } = unwrappedParams;

  const article = blogArticles.find((article) => article.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-white dark:bg-black py-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Artikel Tidak Ditemukan
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Maaf, artikel yang Anda cari tidak tersedia.
          </p>
          <Button
            asChild
            variant="outline"
            className="border-purple-600 text-purple-600 hover:bg-purple-50 hover:text-purple-700 font-bold py-3 px-8 rounded-full text-lg"
          >
            <Link href="/blog">← Kembali ke Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black py-20">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <Button
          asChild
          variant="outline"
          className="mb-8 border-purple-600 text-purple-600 hover:bg-purple-50 hover:text-purple-700 font-bold py-2 px-6 rounded-full text-base"
        >
          <Link href="/blog">← Kembali ke Blog</Link>
        </Button>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight mb-4">
          {article.title}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
          {article.date} &bull; {article.readTime} &bull; {article.category}
        </p>
        <div
          className="prose dark:prose-invert max-w-none text-gray-800 dark:text-gray-200 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </div>
  );
}
