import { useRef, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import CustomImage from "./ImageComponent";

interface ImageListInterface {
  imageList: string[];
}

const ImageListComponent: React.FC<ImageListInterface> = ({ imageList }) => {
  const defaultImageIndex = 0;
  const [hoveredImageIndex, setHoveredImageIndex] = useState(defaultImageIndex);
  const listRef = useRef<HTMLDivElement>(null);

  const handleImageHover = (index: number) => {
    setHoveredImageIndex(index);
  };

  const scrollToTop = () => {
    if (listRef.current) {
      listRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const scrollToBottom = () => {
    if (listRef.current) {
      listRef.current.scrollTo({
        top: listRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  const shouldShowScrollButtons = imageList.length > 7;

  return (
    <div className="flex">
      <div className="relative mr-5">
        <div
          className={`h-96 overflow-y-hidden ${
            shouldShowScrollButtons ? "overflow-x-hidden" : "overflow-x-scroll"
          }`}
          ref={listRef}
        >
          <div className="flex flex-col gap-2">
            {imageList.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${index}`}
                className={`w-12 h-12 mr-0 p-1 object-contain cursor-pointer ${
                  index === hoveredImageIndex
                    ? "border border-blue-500 rounded"
                    : "border border-black-500 rounded"
                }`}
                onMouseEnter={() => handleImageHover(index)}
              />
            ))}
          </div>
        </div>
        {shouldShowScrollButtons && listRef.current && (
          <>
            {listRef.current.scrollHeight > listRef.current.clientHeight && (
              <button
                className="absolute bottom-0 left-0 w-full h-7 bg-slate-800 opacity-80 flex justify-center items-center cursor-pointer"
                onClick={scrollToBottom}
              >
                <FaArrowUp className="w-5 h-5 text-white" />
              </button>
            )}
            {listRef.current.scrollTop > 0 && (
              <button
                className="absolute top-0 left-0 w-full h-7 bg-slate-800 opacity-80 flex justify-center items-center cursor-pointer"
                onClick={scrollToTop}
              >
                <FaArrowDown className="w-5 h-5 text-white" />
              </button>
            )}
          </>
        )}
      </div>
      <CustomImage
        imageUrl={
          hoveredImageIndex !== null
            ? imageList[hoveredImageIndex]
            : imageList[defaultImageIndex]
        }
        className="w-96 h-96 border border-box rounded-lg p-5 flex justify-center items-center"
      />
    </div>
  );
};

export default ImageListComponent;
