import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { PiHouseLineLight } from "react-icons/pi";

import { Cards } from "./Cards";
import { useState } from "react";

export const ForRent = () => {
  const [isSale, setSale] = useState(true);
  return (
    <section className="w-full bg-dark1 px-6 py-20 font-syne text-off-white md:px-12 md:py-24">
      <div
        className={`mx-auto flex items-center justify-center gap-3 text-sm font-semibold tracking-[0.18em] ${isSale ? "text-blue" : "text-gray"}`}
      >
        <span className="h-px w-10 bg-blue/50" />
        <p className="flex items-center gap-2">
          {isSale ? (
            <>
              <PiHouseLineLight className="text-xl" /> PREMIUM PROPERTIES
            </>
          ) : (
            "PREMIUM LIVING SPACES"
          )}
        </p>
        <span className="h-px w-10 bg-blue/50" />
      </div>
      <div className="mx-auto mt-6 max-w-2xl text-center">
        <h1 className="text-4xl font-extrabold leading-tight text-off-white sm:text-5xl md:text-6xl">
          Properties For Rent
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray sm:text-lg">
          Discover a wide range of handpicked rental properties that offer
          comfort, convenience, and exceptional value.
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Cards isSale={isSale} />
        <Cards isSale={isSale} />
        <Cards isSale={isSale} />
      </div>
      <div className="mt-12 flex justify-center">
        <button
          type="button"
          className="flex items-center gap-3 rounded-lg bg-blue px-7 py-3.5 text-sm font-semibold text-off-white transition hover:brightness-110"
        >
          View All Properties <HiOutlineArrowNarrowRight className="text-lg" />
        </button>
      </div>
    </section>
  );
};
