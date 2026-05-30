export default function Footer() {
  return (
    <footer className="w-full bg-zinc-950 mt-16 py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-zinc-400 text-sm">
        <div className="mb-8 text-center">
          <h2 className="text-xl font-bold text-white mb-2">KODWA TECH</h2>
          <p className="max-w-xs text-zinc-500">
            Premium Creative Software House untuk solusi digital kelas dunia.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full border-t border-zinc-800 pt-8 mb-8 text-center md:text-left">
          <div>
            <p className="font-semibold text-white mb-2">Email</p>
            <p>techkodwa@gmail.com</p>
          </div>
          <div>
            <p className="font-semibold text-white mb-2">Alamat</p>
            <p>Jl. Mangga Besar II, Jakarta Barat</p>
          </div>
          <div>
            <p className="font-semibold text-white mb-2">Instagram</p>
            <p>@techkodwa.id</p>
          </div>
        </div>
        <p className="text-center text-zinc-600">
          &copy; {new Date().getFullYear()} KODWA TECH. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
