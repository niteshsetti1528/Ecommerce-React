import React from "react";
import { AiFillDelete } from "react-icons/ai";

interface ImageListProps {
  imageUrls: string[];
  handleDeleteImage: (index: number) => void;
}

const ImageList: React.FC<ImageListProps> = ({
  imageUrls,
  handleDeleteImage,
}) => {
  const isImageUrl = (url: string): boolean => {
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".svg"];
    const lowerCaseUrl = url.toLowerCase();
    return imageExtensions.some((extension) =>
      lowerCaseUrl.endsWith(extension)
    );
  };

  return (
    <div className="flex flex-wrap mt-10">
      {imageUrls.map((imageUrl, index) => (
        <div className="w-1/3 px-2 mb-4" key={index}>
          {isImageUrl(imageUrl) ? (
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex">
                <div className="w-20 h-20 relative">
                  <img
                    alt=""
                    src={imageUrl}
                    className="w-full h-full object-cover"
                  />
                  <button
                    className="absolute top-2 right-2 text-black hover:text-red-500"
                    onClick={() => handleDeleteImage(index)}
                  >
                    <AiFillDelete size={20} />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-red-500">Invalid image URL</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageList;
