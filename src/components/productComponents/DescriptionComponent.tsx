import { useState } from "react";

interface DescriptionInterface {
  description: string;
}

const DescriptionComponent: React.FC<DescriptionInterface> = ({
  description,
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const getDescriptionText = () => {
    return showFullDescription ? description : description.substring(0, 120);
  };
  return (
    <div className="mt-2">
      <div className="font-normal text-neutral-600 mb-1">Description</div>
      <div className="text-sm font-light text-GreyColor">
        {getDescriptionText()}
        <button
          className="text-blue-500 underline mt-1 focus:outline-none ml-1"
          onClick={toggleDescription}
        >
          {showFullDescription ? "less" : "more"}
        </button>
      </div>
    </div>
  );
};

export default DescriptionComponent;
