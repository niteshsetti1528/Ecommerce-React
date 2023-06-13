interface PriceAndOfferInterface {
  price: string;
  mrp: string;
  discountPercent: string;
}

const PriceAndOffer: React.FC<PriceAndOfferInterface> = ({
  price,
  mrp,
  discountPercent,
}) => {
  return (
    <div className="flex items-center gap-2">
      <div className="text-GreenColor font-bold">₹{price}</div>
      <div className="text-GreyColor text-sm line-through">₹{mrp}</div>
      <div className="text-GreenColor text-sm mr-2">{discountPercent}% Off</div>
    </div>
  );
};

export default PriceAndOffer;
