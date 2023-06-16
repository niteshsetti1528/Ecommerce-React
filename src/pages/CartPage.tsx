import React from "react";
import PriceComponent from "../components/PriceComponent";

export default function CartPage() {
  const renderItems = () => {
    return Array.from({ length: 15 }, (_, index) => (
      <div key={index}>
        <div className="bg-white flex px-6 py-6">
          <div className="w-112 h-112 flex justify-center">
            <img
              alt=""
              src="https://rukminim1.flixcart.com/image/224/224/xif0q/shampoo/y/r/w/100-anti-dandruff-shampoo-lafame-original-imaghnyhckqdrrgf.jpeg"
              className="h-full w-11"
            />
          </div>
          <div className="flex flex-col ml-3">
            <div className="flex justify-between flex-row gap-56 text-16">
              <div>lafame Anti Dandruff Shampoo</div>
              <div>Delivery by Fri Jun 23 | &#8377;51</div>
            </div>
            <div className="text-14 text-GreyColor">100 ml</div>
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
                &#8377;190
              </div>
              <div className="text-18">&#8377;46</div>
              <div className="text-14 text-GreenColor">75% off</div>
            </div>
            <div className="flex space-x-5 mt-6 text-16">
              <div>SAVE FOR LATER</div>
              <div>REMOVE</div>
            </div>
          </div>
        </div>
        {index !== 9 && <hr className="border-gray-400 border-opacity-10" />}{" "}
        {/* Gray line separator */}
      </div>
    ));
  };

  return (
    <div className="flex flex-row">
      <div className="bg-GreyColor bg-opacity-10 w-7/12 mt-20 ml-24 rounded">
        <div className="bg-white w-full h-14 text-blueColor items-center shadow-inner flex px-6">
          FlipKart(3)
        </div>
        <div className="bg-white w-full h-14 mt-2 items-center flex px-6 shadow">
          <div>From Saved Address</div>
        </div>
        <div className="shadow mt-2 h-30  overflow-y-auto ">
          {renderItems()}
        </div>
        <div className="bg-white items-center flex justify-end  shadow-inner">
          <div className="w-250 h-51 uppercase bg-orangeColor my-5 mx-5  flex justify-center items-center   text-white">
            place Order
          </div>
        </div>
      </div>
      <PriceComponent />
    </div>
  );
}
