import { GoStar } from "react-icons/go";

interface DiscountInterface {
  rating: string;
}

const DiscountComponent: React.FC<DiscountInterface> = ({ rating }) => {
  return (
    <div className="bg-green-700 text-white text-12 flex items-center px-1 w-10 rounded">
      {rating}
      <GoStar className="ml-1" />
    </div>
  );
};

export default DiscountComponent;
