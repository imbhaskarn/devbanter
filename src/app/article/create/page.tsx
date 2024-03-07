"use client";
import Editor from "@/components/article/Editor";

const createArticle = () => {
  return (
    <div className="pb-12 pt-12 sm:pb-16 lg:pb-24">
      <div className="px-5 lg:px-0">
        <div className="prose mx-auto sm:prose-lg first-letter:text-4xl first-letter:font-bold first-letter:tracking-[.15em] prose-a:transition prose-a:duration-300 prose-a:ease-in-out hover:prose-a:text-red-700 prose-img:rounded-xl">
          <Editor />
        </div>
      </div>
    </div>
  );
};

export default createArticle;
