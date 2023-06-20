import PriceComponent from "../components/PriceComponent";
import { ProductInterface } from "../interface/ProductInterface";
import { useSelector, useDispatch } from "react-redux";
import {
  AppState,
  decrementItemQuantity,
  incrementItemQuantity,
  removeItemFromCart,
} from "../redux/cartReducer";
import ButtonComponent from "../components/ButtonComponent";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fab } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { useContext } from "react";
import { LoginContext } from "../components/LoginProvider";

export default function CartPage() {
  const cartItems = useSelector((state: AppState) => state.items);
  const cartnumber = useSelector((state: AppState) => state.cart);
  const { user, isLogged } = useContext(LoginContext);

  const dispatch = useDispatch();

  const renderItems = () => {
    console.log(`CT:${cartItems.length}`);
    return cartItems.map((item: ProductInterface, index: number) => (
      <div key={index}>
        <div>
          <div className="bg-white flex px-6 py-6">
            <div className="flex flex-col justify-between">
              <div className="w-112 h-112 flex justify-center">
                <img alt="" src={item.imageUrl[0]} className="h-full" />
              </div>
              <div className="flex space-x-3 items-center">
                <IconComponent
                  iconprops={{
                    icon: <Add />,
                    ariaLabel: "add",
                    onTapHandler: () =>
                      dispatch(incrementItemQuantity(item.id)),
                  }}
                />
                <div className="text-18">{item.quantity}</div>
                <IconComponent
                  iconprops={{
                    icon: <Remove />,
                    ariaLabel: "remove",
                    onTapHandler: () =>
                      dispatch(decrementItemQuantity(item.id)),
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col ml-3">
              <div className="flex justify-between flex-row gap-56 text-16">
                <div>{item.name}</div>
                <div>Delivery by Fri Jun 23 | &#8377;51</div>
              </div>
              <div className="text-14 text-GreyColor">{item.offer}</div>
              <div className="flex space-x-3 mt-3 text-GreyColor">
                <div>Seller: Lafame</div>
                <img
                  alt=""
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                  className="w-14 h-5"
                />
              </div>
              <div className="flex space-x-7 mt-4">
                <div className="line-through text-14 text-GreyColor">
                  &#8377;{item.mrp}
                </div>
                <div className="text-18">&#8377;{item.price}</div>
                <div className="text-14 text-GreenColor">
                  {item.discPercent}% off
                </div>
              </div>
              <div className="flex space-x-5  mt-6 text-16 uppercase">
                <ButtonComponent
                  buttonProps={{
                    title: "Save Later",
                    backgroundColor: "white",
                    textColor: "blueColor",
                    onClick: () => {},
                  }}
                />
                <ButtonComponent
                  buttonProps={{
                    title: "Remove",
                    backgroundColor: "white",
                    textColor: "blueColor",
                    onClick: () => {
                      dispatch(removeItemFromCart(item.id));
                      toast.info("Item Removed From  Cart Successfully");
                    },
                  }}
                />
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
        {index !== 9 && <hr className="border-gray-400 border-opacity-10" />}{" "}
        {/* Gray line separator */}
      </div>
    ));
  };

  return cartItems.length === 0 && isLogged ? (
    <div className="mt-20 flex justify-center items-center h-screen ">
      No Cart Items Found
    </div>
  ) : !isLogged ? (
    <div className="mt-20 flex justify-center items-center h-screen ">
      Please Login To View Cart Items
    </div>
  ) : (
    <div className="flex flex-row">
      <div className="bg-GreyColor bg-opacity-10 w-7/12 mt-20 ml-24 rounded">
        <div className="bg-white w-full h-14 text-blueColor items-center shadow-inner flex px-6">
          FlipKart({cartnumber})
        </div>
        <div className="bg-white w-full h-14 mt-2 items-center flex px-6 shadow">
          <div>From Saved Address</div>
        </div>
        <div className="shadow mt-2 max-h-96 overflow-y-auto ">
          {renderItems()}
        </div>
        <div className="bg-white items-center flex justify-end  shadow-custom">
          <div className="w-250 h-51 uppercase bg-orangeColor my-5 mx-5  flex justify-center items-center   text-white">
            <ButtonComponent
              buttonProps={{
                title: "Place Order",
                onClick: () => {
                  console.log(user.id);
                  console.log(isLogged);
                },
              }}
            />
          </div>
        </div>
      </div>
      <PriceComponent />
    </div>
  );
}

interface IconProps {
  icon: React.ReactNode;
  ariaLabel: string;
  onTapHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const IconComponent: React.FC<{ iconprops: IconProps }> = ({ iconprops }) => {
  return (
    <Fab
      color="primary"
      aria-label={iconprops.ariaLabel}
      style={{ width: "24px", height: "24px" }}
      onClick={iconprops.onTapHandler}
    >
      {iconprops.icon}
    </Fab>
  );
};
