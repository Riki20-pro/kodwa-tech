import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-white dark:bg-black py-20 md:py-32 lg:py-48 flex items-center justify-center min-h-[calc(100vh-4rem)]">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
          Transformasikan Ide Anda Menjadi Web App, Mobile App, dan SaaS Kelas
          Dunia
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          KODWA TECH menghadirkan solusi pengembangan perangkat lunak premium
          dan profesional untuk bisnis, instansi, serta organisasi. Kami
          merancang sistem digital yang memikat visualnya, andal performanya,
          dan siap melejitkan skala usaha Anda tanpa Anda perlu pusing urusan
          teknis.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            <Link href="https://wa.me/6285924155519" target="_blank">
              Konsultasi Gratis
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-purple-600 text-purple-600 hover:bg-purple-50 hover:text-purple-700 font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            <Link href="/portfolio">Lihat Hasil Kerja</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
