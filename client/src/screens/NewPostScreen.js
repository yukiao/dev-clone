import { useRef, useState } from "react";
import useStateCallback from "../hooks/useStateCallback";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  FaTimes,
  FaBold,
  FaItalic,
  FaUnderline,
  FaImage,
} from "react-icons/fa";
import api from "../configs/axiosConfig";
import {
  handleBoldButton,
  handleImageButton,
  handleItalicButton,
  handleUnderlineButton,
} from "../helpers/toolbar";
import acceptedAscii from "../helpers/acceptedAscii";

const NewPostScreen = () => {
  const [isEdit, setIsEdit] = useState(true);
  const [content, setContent] = useStateCallback("");
  const [coverImageUrl, setCoverImageUrl] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [isPreviewExist, setIsPreviewExist] = useState(false);
  const [tags, setTags] = useState("");
  const [title, setTitle] = useState("");
  const [progress, setProgress] = useState(0);
  const [imageContent, setImageContent] = useState(null);

  const textAreaRef = useRef();

  const onCoverChange = (e) => {
    if (e.target.files.length > 0) {
      const cover = e.target.files[0];

      setCoverImage(cover);
      setCoverImageUrl(URL.createObjectURL(cover));
      setIsPreviewExist(true);
    }
  };

  const onImageContentChange = async (e) => {
    if (e.target.files.length > 0) {
      const image = e.target.files[0];
      setImageContent(image);
      const formData = new FormData();
      formData.append("image", image);
      try {
        const res = await api.post("/posts/content-image", formData, {
          onUploadProgress: (progressEvent) => {
            let percentageComplete = progressEvent.loaded / progressEvent.total;
            percentageComplete = parseInt(percentageComplete * 100);
            setProgress(percentageComplete);
          },
        });
        handleImageButton(textAreaRef, content, setContent, res.data.data.url);
        setTimeout(() => {
          setImageContent(null);
          setProgress(0);
        }, 1000);
      } catch (e) {
        setImageContent(null);
      }
    }
  };

  const onCoverRemove = (e) => {
    setCoverImage(null);
    setCoverImageUrl("");
    setIsPreviewExist(false);
  };

  const onTagsInput = (e) => {
    console.log(tags);
    if (acceptedAscii.includes(e.keyCode)) {
      if (e.keyCode === 8) {
        if (tags.length > 0) {
          setTags(tags.slice(0, tags.length - 1));
          return;
        } else {
          return;
        }
      }
      if (e.keyCode === 188) {
        console.log(",");
        const count = (tags.match(/,/g) || []).length;
        if (count < 3) {
          setTags(tags + ", ");
        }
      } else {
        setTags(tags + e.key);
      }
    } else {
      setTags(tags);
    }
  };

  const showFormattedTags = () => {
    let tagList = tags.split(", ");
    tagList = tagList.filter((tag) => tag !== "");
    tagList = tagList.map((tag) => `#${tag}`);

    return tagList;
  };

  return (
    <div
      className="flex flex-col min-h-screen md:p-2 mx-auto max-w-6xl
    "
    >
      {/* Header */}
      <div className="flex h-14 ">
        <div
          className="flex justify-end md:justify-between items-center"
          style={{ flex: 5 }}
        >
          <img
            src="/dev-ecosystem.png"
            alt="logo"
            className="h-10 hidden md:block"
          />
          <div>
            <span
              className="mx-2 cursor-pointer"
              onClick={(e) => setIsEdit(true)}
            >
              Edit
            </span>
            <span
              className="mx-2 cursor-pointer"
              onClick={(e) => {
                setIsEdit(false);
              }}
            >
              Preview
            </span>
          </div>
        </div>
        <div className="hidden md:block" style={{ flex: 2 }}></div>
      </div>
      {/* End of Header */}
      {isEdit ? (
        <div className="flex-1 flex ">
          <div
            className="bg-custom-gray w-full rounded-sm overflow-y-auto lg:ml-20 p-3 md:px-12 md:py-8 flex flex-col"
            style={{ flex: 5 }}
          >
            <div className="my-3">
              {isPreviewExist ? (
                <>
                  <div className="flex w-full items-center">
                    <img
                      className="rounded-t-md w-4/5 flex-1"
                      src={coverImageUrl}
                      alt="cover"
                    />
                    <FaTimes
                      className="w-8 h-8 px-2 cursor-pointer"
                      onClick={onCoverRemove}
                    />
                  </div>
                </>
              ) : (
                <>
                  <label
                    htmlFor="image-upload"
                    className="px-5 py-2 border-gray-400 border-2 rounded-md cursor-pointer hover:bg-gray-400 hover:text-gray-900 inline-block"
                  >
                    Add a cover image
                  </label>
                  <input
                    type="file"
                    id="image-upload"
                    accept="image/*"
                    className="hidden"
                    onChange={onCoverChange}
                  />
                </>
              )}
            </div>
            <input
              type="text"
              required
              className="text-3xl font-bold bg-transparent my-5 outline-none"
              placeholder="New post title here..."
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />

            <input
              placeholder="Add up to 4 tags..."
              className="mt-10 mb-5 bg-transparent outline-none"
              value={tags}
              onKeyDown={onTagsInput}
            />
            <div className="flex justify-center items-center my-5 bg-custom-black py-5 ">
              <FaBold
                className="w-5 h-5 mx-3"
                onClick={(e) =>
                  handleBoldButton(textAreaRef, content, setContent)
                }
              />
              <FaItalic
                className="w-5 h-5 mx-3"
                onClick={(e) =>
                  handleItalicButton(textAreaRef, content, setContent)
                }
              />
              <FaUnderline
                className="w-5 h-5 mx-3"
                onClick={(e) =>
                  handleUnderlineButton(textAreaRef, content, setContent)
                }
              />
              <div>
                <label htmlFor="image-content-upload">
                  <FaImage className="w-5 h-5 mx-3" />
                </label>
                <input
                  type="file"
                  id="image-content-upload"
                  accept="image/*"
                  className="hidden"
                  onChange={onImageContentChange}
                />
              </div>
              {imageContent && <span>{`${progress} %`}</span>}
            </div>
            <textarea
              className="bg-transparent flex-1 outline-none mt-5"
              ref={textAreaRef}
              onChange={(e) => setContent(e.target.value)}
              value={content}
              style={{ resize: "none" }}
              placeholder="Write your content"
            ></textarea>
          </div>
          <div style={{ flex: 2 }} className="hidden md:block"></div>
        </div>
      ) : (
        <div className="flex-1 flex overflow-y-auto ">
          <div
            className="bg-custom-gray w-full rounded-sm overflow-y-auto lg:ml-20 p-3 md:px-12 md:py-8 flex flex-col"
            style={{ flex: 5 }}
          >
            {isPreviewExist && (
              <img
                className="rounded-t-md w-full flex-1 my-3"
                src={coverImageUrl}
                alt="cover"
              />
            )}
            <h1 className="my-3">{title}</h1>
            <div className="flex flex-wrap my-3 ">
              {showFormattedTags().map((tag) => (
                <span className="mr-3 text-gray-400">{tag}</span>
              ))}
            </div>
            <ReactMarkdown
              className="whitespace-pre overflow-y-auto my-3"
              children={content}
              rehypePlugins={[rehypeRaw]}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, "")}
                      style={vscDarkPlus}
                      language={match[1]}
                      PreTag="div"
                      wrapLongLines
                      {...props}
                    />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
              remarkPlugins={[remarkGfm]}
            />
          </div>
          <div style={{ flex: 2 }} className="hidden md:block text"></div>
        </div>
      )}

      <div className="lg:ml-20">
        <button className="py-2 px-5 m-2 md:mx-0 bg-indigo-700 rounded-md cursor-pointer">
          Publish
        </button>
      </div>
    </div>
  );
};

export default NewPostScreen;
