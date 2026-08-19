import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full border-b border-white/10 bg-dark px-6 py-5 md:px-12">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="font-syne text-2xl font-bold text-off-white">
          IR<span className="text-blue">Property</span>
        </Link>
        <div className="flex items-center gap-6 font-syne text-sm text-gray">
          <Link href="/" className="transition-colors hover:text-blue">Home</Link>
          <Link href="/properties" className="transition-colors hover:text-blue">Properties</Link>
        </div>
      </nav>
    </header>
  );
}