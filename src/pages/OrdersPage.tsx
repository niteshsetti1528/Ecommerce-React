import React from "react";
import OrderComponent from "../components/OrderComponent";

const OrdersPage = () => {
  const orders = [1, 2, 3, 4, 5]; // Array of orders
  const minDisplayItems = 4;
  const itemHeight = 128; // Adjust this value based on your desired item height

  // Calculate the container height
  const containerHeight = Math.max(
    minDisplayItems * itemHeight,
    orders.length * itemHeight
  );

  return (
    <div className="mt-20 flex justify-center items-top h-screen">
      <div className="w-2/3">
        <h1 className="text-4xl mb-8">Orders Page</h1>
        <div
          className={`space-y-5 ${
            orders.length > minDisplayItems
              ? "max-h-[calc(100vh-8rem)] overflow-y-auto"
              : ""
          }`}
          style={{ height: `${containerHeight}px` }}
        >
          {orders.map((order) => (
            <React.Fragment key={order}>
              <OrderComponent />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
