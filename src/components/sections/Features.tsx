export default function Features() {
  return (
    <section className="py-20 md:py-32 bg-gray-50 dark:bg-zinc-900">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white text-center mb-16">
          Mengapa Memilih KODWA TECH?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              Desain Visual Kelas Dunia
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Kami merancang antarmuka digital yang mewah, modern, dan eksklusif
              untuk memastikan bisnis Anda terlihat paling menonjol di industri.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              Performa Cepat & Andal
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Aplikasi dan sistem Anda dibangun dengan teknologi mutakhir untuk
              memastikan kecepatan maksimal, keamanan ketat, dan kenyamanan
              pengguna.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              Mitra Solutif & Profesional
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Anda tidak perlu pusing memikirkan urusan koding. Sampaikan ide
              Anda, dan tim ahli kami yang akan mewujudkannya menjadi produk
              digital siap pakai.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
