import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold text-blue-600 tracking-tight">
              OpenCommunity
            </Link>
            <div className="hidden md:flex gap-4">
              <Link href="/" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Accueil</Link>
              <Link href="/communities" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Découvrir</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/profile" className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors">
              
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}