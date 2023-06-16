// import { useNavigate } from "react-router-dom";
import { GoStar } from "react-icons/go";
import { ProductInterface } from "../interface/ProductInterface";

interface BestComponentInterface {
  item: ProductInterface;
  onProductClicked: (id: string) => void;
}

const BestComponent: React.FC<BestComponentInterface> = ({
  item,
  onProductClicked,
}) => {
  const handleClick = () => {
    onProductClicked(item.id);
  };

  return (
    <div onClick={handleClick}>
      <div className="bg-white box-border cursor-pointer gap-2 py-25 px-15 flex flex-col text-center items-center max-w-100">
        <img alt={item.name} src={item.imageUrl[0]} className="w-auto h-44" />
        <div className="font-bold text-14 w-52 truncate">{item.name}</div>
        <div className="flex items-center gap-2">
          <div className="text-14 text-GreyColor">{item.offer}</div>
          <div className="bg-green-700 text-white text-12 flex items-center px-1 rounded">
            {item.rating}
            <GoStar className="ml-1" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-GreenColor font-bold">₹{item.price}</div>
          <div className="text-GreyColor text-sm line-through">₹{item.mrp}</div>
          <div className="text-GreenColor text-sm mr-2">
            {item.discPercent}% Off
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestComponent;
