import { useContext, useRef, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import CustomImage from "./ImageComponent";
import ButtonComponent from "../ButtonComponent";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch } from "react-redux";
import {
  AppState,
  addItemToCart,
  removeItemFromCart,
  updateCartCount,
} from "../../redux/cartReducer";
import { ProductInterface } from "../../interface/ProductInterface";
import { LoginContext, LoginProvider } from "../LoginProvider";
import { AppContext } from "../AppContext";

interface ImageListInterface {
  imageList: string[];
  item: ProductInterface;
}

const ImageListComponent: React.FC<ImageListInterface> = ({
  imageList,
  item,
}) => {
  const defaultImageIndex = 0;
  const [hoveredImageIndex, setHoveredImageIndex] = useState(defaultImageIndex);
  const listRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  const handleImageHover = (index: number) => {
    setHoveredImageIndex(index);
  };

  const cartCount = useSelector((state: AppState) => state.cart);
  const items = useSelector((state: AppState) => state.items);
  const { isLogged } = useContext(LoginContext);
  const { setOpenState } = useContext(AppContext);

  const newItem: ProductInterface = item;
  const isItemExists = items.some(
    (existingItem) => existingItem.id === newItem.id
  );

  const handleButtonClick = () => {
    if (!isItemExists) {
      if (isLogged) {
        dispatch(addItemToCart(newItem));
        dispatch(updateCartCount(cartCount + 1));
        toast.success("Item Added to Cart Successfully");
      } else {
        setOpenState(true);
      }
    }
  };

  const removeButtonHandler = () => {
    dispatch(removeItemFromCart(item.id!));
    toast.info("Item Removed From  Cart Successfully");
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
      <div className="flex flex-col">
        <CustomImage
          imageUrl={
            hoveredImageIndex !== null
              ? imageList[hoveredImageIndex]
              : imageList[defaultImageIndex]
          }
          className="w-96 h-96 border border-box rounded-lg p-5 flex justify-center items-center"
        />
        <div className="mt-5">
          <ButtonComponent
            buttonProps={{
              title: isItemExists ? "Remove From Cart" : "Add to Cart",
              onClick: isItemExists ? removeButtonHandler : handleButtonClick,
            }}
          />
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ImageListComponent;
