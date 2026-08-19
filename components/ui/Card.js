'use client';

import { CiHeart } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { LuBedDouble, LuSquareArrowUpRight } from "react-icons/lu";
import { TbBath } from "react-icons/tb";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useState } from "react";
import { TbBuildings } from "react-icons/tb";

export default function Card() {
  const [isSale, setSale] = useState(true);

  return (
    <div className="group relative flex w-full max-w-sm flex-col overflow-hidden rounded-2xl bg-dark1 border border-white/10 shadow-md transition-all duration-300 hover:shadow-blue/20 hover:shadow-xl font-syne">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG4mp4VPCmydXrQR5ytYfwxDf87p3FO2b0T9_2bXi1eA&s=10"
          alt="Modern 3 Bedroom Apartment"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3">
          <span className={`rounded-full ${isSale ? "bg-blue" : "bg-dark"} px-3 py-1 text-xs font-semibold text-off-white shadow-sm`}>
            {isSale ? "For Sale" : "For Rent"}
          </span>
          <button
            type="button"
            aria-label="Add to favorites"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-dark/80 text-off-white shadow-sm backdrop-blur-sm transition-colors hover:bg-dark hover:text-blue"
          >
            <CiHeart className="text-xl" />
          </button>
        </div>
        {isSale && (
          <div className="absolute bottom-0 left-0 p-2 px-3 bg-dark/80 backdrop-blur-sm rounded-tr-xl m-0 text-off-white font-bold">
            PKR 38,000,000
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4 p-5">
        <div className="flex flex-col gap-1">
          <p className="flex items-center gap-1.5 text-sm font-medium text-blue">
            <IoLocationSharp className="text-xl text-blue" />
            DHA Phase 5, Karachi
          </p>
          <h3 className="text-lg font-bold text-off-white">
            Modern 3 Bedroom Apartment
          </h3>
        </div>

        <div className="flex items-center justify-between text-xs font-medium text-gray border-b border-white/10 py-3">
          <span className="flex items-center gap-1.5">
            <LuBedDouble className="text-base text-gray" /> 3 Beds
          </span>
          <span className="flex items-center gap-1.5">
            <TbBath className="text-base text-gray" /> 3 Baths
          </span>
          <span className="flex items-center gap-1.5">
            <LuSquareArrowUpRight className="text-base text-gray" /> 1,250 Sq Ft
          </span>
        </div>

        <div className="flex items-center justify-between pt-1">
          {isSale ? (
            <div className="flex items-center text-off-white gap-3">
              <div className="bg-blue/10 rounded-xl">
                <TbBuildings className="text-blue text-2xl m-1.5 rounded-xl" />
              </div>
              <div>
                <p className="text-[13px] text-gray">Built-up Area</p>
                <p className="font-semibold text-[14px] text-off-white">5,500 Sq Ft</p>
              </div>
            </div>
          ) : (
            <p className="flex items-baseline gap-1 text-xs text-gray">
              <span className="text-xl font-extrabold text-off-white">
                PKR 12,000
              </span>
              / Month
            </p>
          )}

          <button
            type="button"
            className="flex items-center gap-1.5 text-sm font-semibold text-blue leading-none transition-colors hover:text-opacity-80"
          >
            <span>View Details</span>
            <HiOutlineArrowNarrowRight className="text-lg transition-transform group-hover:translate-x-1 shrink-0" />
          </button>
        </div>
      </div>
    </div>
  );
}