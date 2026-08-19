export const Loader = () => {
  return (
    <div className=" rounded-2xl max-w-150 w-full overflow-hidden border border-white/5 transition-colors">
      <div className="bg-gray-400 w-full h-[200px] animate-pulse"></div>
      <div className="flex flex-col gap-3 p-3">
        <div className="bg-gray-400 w-[90px] p-2 rounded-2xl animate-pulse"></div>
        <div className="bg-gray-400 w-full p-3 rounded-2xl animate-pulse"></div>
        <div className="bg-gray-400 w-full p-3 rounded-2xl animate-pulse"></div>
        <div className="p-1 max-w-50 w-full rounded-2xl bg-gray-200 animate-pulse"></div>
        <div className="p-1 max-w-50 w-full rounded-2xl bg-gray-200 animate-pulse"></div>
        <div className="p-1 max-w-50 w-full rounded-2xl bg-gray-200 animate-pulse"></div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gray-400 p-5 rounded-full animate-pulse"></div>
            <div className="bg-gray-400 w-[50px] p-2 rounded-2xl animate-pulse"></div>
          </div>
          <div className="bg-gray-400 w-[50px] p-2 rounded-2xl animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};
