import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <section className="py-20 md:py-32 bg-gray-100 dark:bg-zinc-950">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white text-center mb-16">
          Pertanyaan yang Sering Diajukan
        </h2>
        <div className="max-w-3xl mx-auto shadow-sm rounded-lg overflow-hidden">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="item-1"
              className="bg-white dark:bg-zinc-800 p-6"
            >
              <AccordionTrigger className="text-xl font-bold text-gray-800 dark:text-white text-left">
                Apakah saya harus paham koding atau urusan teknis?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-400 mt-2">
                Sama sekali tidak. Anda cukup membawa ide atau kebutuhan bisnis
                Anda, dan tim ahli KODWA TECH yang akan mengurus seluruh proses
                desain, koding, hingga aplikasi Anda siap digunakan.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="bg-white dark:bg-zinc-800 p-6 border-t"
            >
              <AccordionTrigger className="text-xl font-bold text-gray-800 dark:text-white text-left">
                Berapa lama proses pembuatan sebuah web app atau mobile app?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-400 mt-2">
                Waktu pengerjaan sangat bergantung pada kompleksitas fitur
                sistem yang Anda butuhkan. Kami akan memberikan estimasi
                linimasa yang transparan dan profesional setelah sesi konsultasi
                gratis awal.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="bg-white dark:bg-zinc-800 p-6 border-t"
            >
              <AccordionTrigger className="text-xl font-bold text-gray-800 dark:text-white text-left">
                Apakah KODWA TECH menyediakan layanan perawatan (maintenance)
                setelah aplikasi selesai?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-400 mt-2">
                Ya, tentu saja. Kami menyediakan garansi performa dan paket
                maintenance berkala untuk memastikan aplikasi atau SaaS Anda
                selalu berjalan cepat, aman, dan tanpa kendala di masa depan.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
