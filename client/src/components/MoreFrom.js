import React from "react";

const MoreFrom = () => {
  return (
    <div className="pt-3 bg-custom-gray rounded-md mt-5 flex flex-col">
      <div className="flex items-center border-b-2 border-custom-black px-3 py-1">
        <span className="text-lg font-bold">
          More From{" "}
          <span className="text-lg font-bold text-indigo-500">
            Silverius Sony Lembang
          </span>
        </span>
      </div>

      <div className="p-3 cursor-pointer group hover:bg-custom-black border-b-2 border-custom-black">
        <h1 className="font-bold text-xl group-hover:text-indigo-500">
          Whatever
        </h1>
        <div className="flex flex-wrap mt-1 ">
          <span className="mr-2">#web</span>
          <span className="mr-2">#dev</span>
          <span className="mr-2">#simplified</span>
        </div>
      </div>

      <div className="p-3 cursor-pointer group hover:bg-custom-black border-b-2 border-custom-black">
        <h1 className="font-bold text-xl group-hover:text-indigo-500">
          Whatever
        </h1>
        <div className="flex flex-wrap mt-1 ">
          <span className="mr-2">#web</span>
          <span className="mr-2">#dev</span>
          <span className="mr-2">#simplified</span>
        </div>
      </div>

      <div className="p-3 cursor-pointer group hover:bg-custom-black">
        <h1 className="font-bold text-xl group-hover:text-indigo-500">
          Whatever
        </h1>
        <div className="flex flex-wrap mt-1 ">
          <span className="mr-2">#web</span>
          <span className="mr-2">#dev</span>
          <span className="mr-2">#simplified</span>
        </div>
      </div>
    </div>
  );
};

export default MoreFrom;
