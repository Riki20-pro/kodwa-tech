import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServicesShowcase() {
  return (
    <section className="py-20 md:py-32 bg-gray-100 dark:bg-zinc-950">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-16">
          Layanan Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                Web Application Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                Aplikasi berbasis web kustom, sistem internal perusahaan, dan
                platform interaktif.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                Mobile Application Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                Aplikasi iOS & Android yang responsif, modern, dan tersedia di
                App Store & Play Store.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                SaaS (Software as a Service)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                Pengembangan produk perangkat lunak berbasis langganan dengan
                arsitektur yang siap berkembang skala besar.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
        <Button
          asChild
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition duration-300 hover:scale-105"
        >
          <Link href="/services">Lihat Semua Layanan</Link>
        </Button>
      </div>
    </section>
  );
}
