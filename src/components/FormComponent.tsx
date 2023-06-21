import React, { useState, useEffect, useRef } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import DeleteIcon from "@mui/icons-material/Delete";

interface FormComponentProps {
  fields: { label: string; name: string; type: string }[];
  handleAddImageUrl: (imageUrl: string) => void;
  handleSubmit: (form: { [key: string]: string }) => void;
  imageUrls: string[];
  handleDeleteImage: (index: number) => void;
}

const FormComponent: React.FC<FormComponentProps> = ({
  fields,
  handleAddImageUrl,
  handleSubmit,
  imageUrls,
  handleDeleteImage,
}) => {
  const [form, setForm] = useState<{ [key: string]: string }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      imageUrl: value,
    }));
  };

  const handleAddImageUrlClick = () => {
    if (form.imageUrl) {
      handleAddImageUrl(form.imageUrl);
      setForm((prevForm) => ({
        ...prevForm,
        imageUrl: "",
      }));
    }
  };

  const handleDeleteImageUrl = (index: number) => {
    handleDeleteImage(index);
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    fields.forEach((field) => {
      if (!form[field.name]) {
        newErrors[field.name] = `Required ${field.label}`;
      }
    });

    // Check if imageUrl field is empty
    if (imageUrls.length === 0) {
      newErrors.imageUrl = "Required Image URL";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      handleSubmit(form);
    }
  };

  const renderFields = () => {
    const remainingFields = fields.filter(
      (field) => field.name !== "description" && field.name !== "imageUrl"
    );
    const rows = Math.ceil((remainingFields.length + 1) / 3); // +1 for the description field

    const renderedFields = [];
    for (let i = 0; i < rows; i++) {
      const fieldsInRow = remainingFields.slice(i * 3, (i + 1) * 3);

      const rowFields = fieldsInRow.map((field) => (
        <div className="w-1/3 pr-4 mb-4" key={field.name}>
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor={field.name}
          >
            {field.label}
          </label>
          {field.type === "textarea" ? (
            <textarea
              className="w-full px-3 py-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              id={field.name}
              name={field.name}
              value={form[field.name] || ""}
              onChange={handleChange}
            ></textarea>
          ) : (
            <input
              className="w-full px-3 py-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type={field.type}
              id={field.name}
              name={field.name}
              value={form[field.name] || ""}
              onChange={handleChange}
            />
          )}
          {errors[field.name] && (
            <p className="text-red-500 text-sm mt-2">{errors[field.name]}</p>
          )}
        </div>
      ));

      renderedFields.push(
        <div className="flex mb-4" key={i}>
          {rowFields}
        </div>
      );
    }

    return renderedFields;
  };

  const renderImageList = () => {
    return (
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="imageUrl"
        >
          Image URL
        </label>
        <div className="flex">
          <input
            className="w-full px-3 py-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={form.imageUrl || ""}
            onChange={handleImageUrlChange}
          />
          <button
            className="px-3 py-2 ml-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="button"
            onClick={handleAddImageUrlClick}
          >
            +
          </button>
        </div>
        {errors.imageUrl && (
          <p className="text-red-500 text-sm mt-2">{errors.imageUrl}</p>
        )}

        {imageUrls.length > 0 && (
          <ImageList cols={3} rowHeight={200}>
            {imageUrls.map((imageUrl, index) => (
              <ImageListItem className="mt-4 w-40 h-24" key={index}>
                <img
                  src={imageUrl}
                  alt={` ${index}`}
                  className="w-full h-full object-cover"
                />
                <DeleteIcon
                  className="absolute top-2 right-2 text-black cursor-pointer"
                  onClick={() => handleDeleteImageUrl(index)}
                />
              </ImageListItem>
            ))}
          </ImageList>
        )}
      </div>
    );
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <form ref={formRef}>
        {renderFields()}
        <div className="w-full pr-4 mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="w-full px-3 py-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="description"
            name="description"
            value={form.description || ""}
            onChange={handleChange}
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm mt-2">{errors.description}</p>
          )}
        </div>
        {renderImageList()}
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="submit"
          onClick={handleSubmitClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
