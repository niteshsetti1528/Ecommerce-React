interface CustomImageProps {
  imageUrl: string;
  className: string;
}

const CustomImage: React.FC<CustomImageProps> = ({ imageUrl, className }) => {
  return (
    <div className={className}>
      <img
        src={imageUrl}
        alt="Product"
        className="object-contain h-full w-full"
      />
    </div>
  );
};

export default CustomImage;
