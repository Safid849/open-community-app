import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600 tracking-tight">
          OpenCommunity
        </Link>

        <div className="flex items-center gap-6">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-700 shadow-sm transition-all active:scale-95">
                Se connecter
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <div className="flex items-center gap-5">
              <Link 
                href="/profile" 
                className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
              >
                Mon Profil
              </Link>
              <UserButton />
            </div>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}