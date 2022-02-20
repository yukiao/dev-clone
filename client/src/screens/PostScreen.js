import React from "react";
import CommentSection from "../components/CommentSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LineSeparator from "../components/LineSeparator";
import MoreFrom from "../components/MoreFrom";
import PostButtonGroup from "../components/PostButtonGroup";
import PostProfile from "../components/PostProfile";
import ReadNext from "../components/ReadNext";

const PostScreen = () => {
  return (
    <div>
      <Header />
      <div className="flex max-w-6xl xl:mx-auto relative">
        <PostButtonGroup />
        <div className="pt-14 pb-8  md:mt-5 md:mr-2 lg:flex ">
          <div style={{ flex: 6 }}>
            <div className="bg-custom-gray">
              <div>
                <img
                  src="/sample-post-cover.jpg"
                  alt="cover"
                  className="w-full rounded-t-md"
                />
              </div>

              <div className="p-3 md:p-10">
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
                  <span className="text-sm text-gray-400 mr-2">
                    #Javascript
                  </span>
                  <span className="text-sm text-gray-400 mr-2">#React</span>
                  <span className="text-sm text-gray-400 mr-2">#Git</span>
                </div>

                <div className="mb-5">
                  Lore provides a simple decorator that allows you to declare
                  what data your components need. If this data exists, it will
                  be provided to your component. If it doesn't, Lore will
                  automatically call the required action and inform your
                  component when the data comes back. Lore provides a simple
                  decorator that allows you to declare what data your components
                  need. If this data exists, it will be provided to your
                  component. If it doesn't, Lore will automatically call the
                  required action and inform your component when the data comes
                  back.
                </div>
                <LineSeparator />
                <CommentSection />
              </div>
            </div>
            <ReadNext />
          </div>
          <div className="lg:ml-5 lg:max-w-sm" style={{ flex: 3 }}>
            <PostProfile />
            <MoreFrom />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostScreen;
