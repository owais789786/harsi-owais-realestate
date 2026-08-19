import { Loader } from "./Loader";

export const SkeletonLoader = () => {
  return (
    <section className="w-full p-10 flex justify-center @container">
      <div className="grid grid-cols-1 @max-[1000px]:max-w-150 w-full border @min-[1000px]:grid-cols-3  gap-8 ">
        <Loader />
        <Loader />
        <div className="hidden md:flex">  <Loader /></div>
      </div>
    </section>
  );
};
