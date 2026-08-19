import Link from 'next/link';
import Card from '@/components/ui/Card';

export default function Hero() {
  return (
    <section className="bg-dark px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="mb-4 font-syne text-sm font-semibold uppercase tracking-wide text-blue">
            Find your next address
          </p>
          <h1 className="max-w-3xl font-syne text-5xl font-extrabold leading-tight text-off-white md:text-7xl">
            Spaces that feel like home.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-gray">
            Discover carefully selected homes and apartments in the locations you love.
          </p>
          <Link
            href="/properties"
            className="mt-8 inline-flex rounded-full bg-blue px-7 py-3.5 font-semibold text-off-white transition hover:brightness-110"
          >
            Browse properties
          </Link>
        </div>
        <Card />
      </div>
    </section>
  );
}