import { useSelector } from "react-redux";
import { AppState } from "../redux/cartReducer";
import { formatCurrency, getNumberFromCurrency } from "../utils/utils";

const PriceComponent = () => {
  const cartItems = useSelector((state: AppState) => state.items);
  const cartnumber = useSelector((state: AppState) => state.cart);

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + (item.quantity ?? 1) * getNumberFromCurrency(item.price),
    0
  );

  return (
    <>
      <div className="w-96 h-fit mt-20 ml-7  shadow shadow-lightWhiteColor">
        <div className="w-full bg-white h-12 flex items-center uppercase text-16 text-GreyColor">
          <div className="ml-7"> price details</div>
        </div>
        <hr className="border-gray-400 border-opacity-10 " />
        <div className="flex flex-col py-7 space-y-2">
          <div className="flex justify-between mx-7 my-3">
            <div>Price ({cartnumber} items)</div>
            <div>{formatCurrency(totalPrice)}</div>
          </div>
          <div className="border-y border-dashed mx-7 border-gray-400 py-2">
            <div className="flex justify-between mx-0 my-3">
              <div>Total Amount</div>
              <div>{formatCurrency(totalPrice)}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceComponent;
