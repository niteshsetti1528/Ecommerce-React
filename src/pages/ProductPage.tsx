import React from "react";
import { useParams } from "react-router-dom";
import { ProductInterface } from "../interface/ProductInterface";
import { productItems } from "../constants/ProductConstants";
import { GoStar } from "react-icons/go";

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const filteredProduct = productItems.find(
    (product: ProductInterface) => product.id === id
  );

  if (!filteredProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex container mx-auto mt-28 ml-8">
      <div className="w-1/2 border rounded-lg p-10 md:shrink-0 flex justify-center">
        <img
          src={filteredProduct.imageUrl}
          alt="Product"
          className="object-cover h-full w-48"
        />
      </div>
      <div className="flex flex-col ml-4 w-1/2">
        <div key={id}>
          <h1 className="text-2xl font-bold">{filteredProduct.name}</h1>
          <div className="bg-green-700 text-white text-12 flex items-center px-1 w-10 rounded">
            {filteredProduct.rating}
            <GoStar className="ml-1" />
          </div>
          <div className="text-14 text-GreyColor">{filteredProduct.offer}</div>
          <div className="flex items-center gap-2">
            <div className="text-GreenColor font-bold">
              ₹{filteredProduct.price}
            </div>
            <div className="text-GreyColor text-sm line-through">
              ₹{filteredProduct.mrp}
            </div>
            <div className="text-GreenColor text-sm mr-2">
              {filteredProduct.discPercent}% Off
            </div>
          </div>
          <div className="mt-2 ">
            <div className="font-normal text-neutral-600 mb-1">Description</div>
            <div className="text-sm font-light text-GreyColor">
              {filteredProduct.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
