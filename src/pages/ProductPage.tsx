import React from "react";
import { useParams } from "react-router-dom";
import { ProductInterface } from "../interface/ProductInterface";
import PriceAndOffer from "../components/productComponents/PriceAndOfferComponent";
import DiscountComponent from "../components/productComponents/DiscountComponent";
import DescriptionComponent from "../components/productComponents/DescriptionComponent";
import { offerItems } from "../constants/OfferConstants";
import { RiPriceTagFill } from "react-icons/ri";
import ImageListComponent from "../components/productComponents/ImageListComponent";
import { useGetAllProducts } from "../hooks/useProducts.hook";

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data } = useGetAllProducts();

  const filteredProduct: ProductInterface = data?.data.find(
    (product: ProductInterface) => product.id.toString() === id
  );

  if (!filteredProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex container mx-auto mt-28">
      <div className="max-w mx-auto flex">
        <ImageListComponent
          imageList={filteredProduct.imageUrl}
          item={{ ...filteredProduct, quantity: 1 }}
        />
        <div className="flex flex-col ml-10 w-1/2">
          <div key={id}>
            <h1 className="text-2xl font-bold">{filteredProduct.name}</h1>
            <DiscountComponent rating={filteredProduct.rating} />
            <div className="text-14 text-GreyColor">
              {filteredProduct.offer}
            </div>
            <PriceAndOffer
              price={filteredProduct.price}
              mrp={filteredProduct.mrp}
              discountPercent={filteredProduct.discPercent}
            />
            <DescriptionComponent description={filteredProduct.description} />
            <div className="mt-4">
              <div className="font-bold items-top">Available Offers:</div>
              {offerItems.map((offerItem, index) => (
                <div key={index} className="flex flex-row rounded">
                  <RiPriceTagFill
                    className="text-green-700 mr-2"
                    style={{ transform: "rotate(-90deg)", fontSize: "20px" }}
                  />
                  <div className="font-bold mr-2">{offerItem.title}</div>
                  <div className="text-light">{offerItem.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
