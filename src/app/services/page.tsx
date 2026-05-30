import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight mb-4">
          Layanan Profesional KODWA TECH
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-16">
          Kami menghadirkan ekosistem pengembangan perangkat lunak berskala
          internasional untuk membantu transformasi digital bisnis, instansi,
          dan organisasi Anda.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
          {/* Service 1: Web Application Development */}
          <div className="p-6 bg-gray-50 dark:bg-zinc-800 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Web Application Development
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Pengembangan sistem aplikasi berbasis web kustom yang dirancang
              khusus sesuai alur bisnis Anda. Mulai dari sistem internal
              perusahaan, dasbor analitik data, hingga platform interaktif yang
              kompleks.
            </p>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Fitur Utama:
            </h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
              <li>Teknologi Next.js/React</li>
              <li>Database Relasional</li>
              <li>Integrasi API Pihak Ketiga</li>
              <li>Keamanan Enkripsi Ketat</li>
            </ul>
          </div>

          {/* Service 2: Mobile Application Development */}
          <div className="p-6 bg-gray-50 dark:bg-zinc-800 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Mobile Application Development
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Solusi pembuatan aplikasi mobile native maupun cross-platform
              untuk Android dan iOS. Menghadirkan performa aplikasi yang gegas,
              hemat baterai, dan antarmuka yang sangat intuitif.
            </p>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Fitur Utama:
            </h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
              <li>Dukungan penuh publikasi App Store & Play Store</li>
              <li>Push Notifications</li>
              <li>Fitur Offline-Mode</li>
              <li>Desain UI/UX Seamless</li>
            </ul>
          </div>

          {/* Service 3: SaaS Production */}
          <div className="p-6 bg-gray-50 dark:bg-zinc-800 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              SaaS (Software as a Service) Production
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Kami membantu para founder dan perusahaan membangun produk digital
              berbasis langganan (SaaS) dari nol. Mulai dari manajemen
              arsitektur multi-tenant, sistem pembayaran otomatis, hingga
              skalabilitas server cloud.
            </p>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Fitur Utama:
            </h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
              <li>Arsitektur Cloud Skalabel</li>
              <li>Sistem Billing/Subscription (Stripe/Midtrans)</li>
              <li>Manajemen Akses User (RBAC)</li>
              <li>Sistem Dasbor Multi-User</li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 py-12 px-6 bg-white dark:bg-zinc-800 rounded-lg shadow-lg">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
            Punya Kebutuhan Spesifik atau Proyek Kustom?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Jangan ragu untuk berdiskusi dengan tim ahli kami.
          </p>
          <Button
            asChild
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            <Link href="https://wa.me/6285924155519" target="_blank">
              Hubungi Kami
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
