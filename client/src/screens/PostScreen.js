import React from "react";
import Header from "../components/Header";

const PostScreen = () => {
  return (
    <div>
      <Header />
      <div className="pt-14">
        <div className="bg-custom-gray">
          <div>
            <img
              src="/sample-post-cover.jpg"
              alt="cover"
              className="w-full rounded-t-md"
            />
          </div>

          <div className="p-3">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white"></div>
              <div className="flex flex-col ml-2">
                <span className="text-sm">Sony Lembang</span>
                <span className="text-xs text-gray-400">
                  29 Oct (10 hours ago)
                </span>
              </div>
            </div>

            <h1 className="my-5 font-bold text-3xl">
              How to make good commit message on git
            </h1>

            <div className="flex flex-wrap my-2">
              <span className="text-sm text-gray-400 mr-2">#Javascript</span>
              <span className="text-sm text-gray-400 mr-2">#React</span>
              <span className="text-sm text-gray-400 mr-2">#Git</span>
            </div>

            <div>
              Lore provides a simple decorator that allows you to declare what
              data your components need. If this data exists, it will be
              provided to your component. If it doesn't, Lore will automatically
              call the required action and inform your component when the data
              comes back.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostScreen;
