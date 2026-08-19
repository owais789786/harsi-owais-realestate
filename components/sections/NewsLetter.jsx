import { FaRegEnvelope } from "react-icons/fa";
import { BsEnvelopePaper } from "react-icons/bs";
import { MdOutlineLock } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";

export const NewsLetter = () => {
  return (
    <section className="w-full bg-dark px-4 py-16 font-syne text-off-white md:px-8 md:py-24">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center rounded-2xl border border-gray/15 bg-dark1 px-5 py-16 text-center sm:px-10 md:py-20">
        
        <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-blue/10">
          <BsEnvelopePaper className="text-3xl text-blue" />
        </div>

        <h1 className="mb-5 text-4xl font-extrabold text-off-white sm:text-5xl md:text-6xl">
          Stay Updated
        </h1>
        <p className="mb-9 max-w-2xl text-base leading-relaxed text-gray sm:text-lg">
          Subscribe to our newsletter and get the latest updates, news, and
          exclusive offers straight to your inbox.
        </p>

        <form className="mb-6 flex w-full max-w-2xl flex-col overflow-hidden rounded-lg border border-gray/30 bg-dark sm:flex-row sm:items-center">
          <div className="flex min-w-0 flex-1 items-center gap-3 px-4 py-3">
            <FaRegEnvelope className="flex-shrink-0 text-xl text-gray" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full bg-transparent py-2 text-off-white outline-none placeholder:text-gray"
            />
          </div>
          <button
            type="submit"
            className="flex flex-shrink-0 items-center justify-center gap-2 bg-blue px-6 py-3.5 text-base font-semibold text-off-white transition hover:brightness-110"
          >
            Subscribe <GoArrowRight className="text-lg" />
          </button>
        </form>

        <div className="flex items-center gap-2 text-sm text-gray">
          <MdOutlineLock className="text-blue" />
          <p>We respect your privacy. Unsubscribe anytime.</p>
        </div>

      </div>
    </section>
  );
};