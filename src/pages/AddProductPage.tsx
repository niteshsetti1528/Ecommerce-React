import React, { useState } from "react";
import FormComponent from "../components/FormComponent";
import { ProductInterface } from "../interface/ProductInterface";
import { useNavigate } from "react-router-dom";
import { addProduct, useAddProduct } from "../hooks/useProducts.hook";

const AddProductPage: React.FC = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const navigate = useNavigate();

  const handleAddImageUrl = (imageUrl: string) => {
    setImageUrls((prevImageUrls) => [...prevImageUrls, imageUrl]);
  };

  const handleDeleteImage = (index: number) => {
    setImageUrls((prevImageUrls) =>
      prevImageUrls.filter((_, i) => i !== index)
    );
  };

  const { mutate } = useAddProduct();

  const handleSubmit = (form: { [key: string]: string }) => {
    const productData: ProductInterface = {
      name: form.name,
      imageUrl: imageUrls,
      imageUrls: "", // You can remove this field if it's not required
      offer: form.offer,
      rating: form.rating,
      mrp: form.mrp,
      price: form.price,
      discPercent: form.discPercent,
      description: form.description,
      category: form.category,
    };

    // Handle form submission
    console.log(productData);
    mutate(productData);
    navigate("/");
  };

  const fields = [
    { label: "Category", name: "category", type: "text" },
    { label: "Name", name: "name", type: "text" },
    { label: "Offer", name: "offer", type: "text" },
    { label: "MRP", name: "mrp", type: "text" },
    { label: "Discount Percentage", name: "discPercent", type: "text" },
    { label: "Price", name: "price", type: "text" },
    { label: "Rating", name: "rating", type: "text" },
    { label: "Description", name: "description", type: "textarea" },
  ];

  return (
    <div className={`flex items-center justify-center mt-20`}>
      <div className="w-3/5">
        <h2 className="text-center">Add Product</h2>
        <FormComponent
          fields={fields}
          handleAddImageUrl={handleAddImageUrl}
          handleDeleteImage={handleDeleteImage}
          handleSubmit={handleSubmit}
          imageUrls={imageUrls}
        />
      </div>
    </div>
  );
};

export default AddProductPage;
