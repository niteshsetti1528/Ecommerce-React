const OrderComponent = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex">
        <div className="w-40 h-40 flex justify-center">
          <img
            alt=""
            src="https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/2/y/o/iphone-13-mlpk3hn-a-apple-original-imag6vpyur6hjngg.jpeg?q=70"
            className="h-full"
          />
        </div>
        <div className="flex flex-col ml-3 justify-between">
          <div className="flex justify-between text-2xl">
            <div>Dummy 1</div>
            <div>Delivery by Fri Jun 23 | &#8377;51</div>
          </div>
          <div className="text-xl text-gray-500">12%</div>
          <div className="flex items-center space-x-3 mt-3 text-gray-500">
            <div>Seller: Lafame</div>
            <img
              alt=""
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
              className="w-14 h-5"
            />
          </div>
          <div className="flex space-x-7 mt-4">
            <div className="line-through text-xl text-gray-500">
              &#8377; 200000
            </div>
            <div className="text-3xl">&#8377; 10000</div>
            <div className="text-xl text-green-500">15% off</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderComponent;
