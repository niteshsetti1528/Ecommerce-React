import { ProductInterface } from "../interface/ProductInterface";

const BestComponent: React.FC<{ item: ProductInterface }> = ({ item }) => {
  return (
    <div className="bg-white box-border cursor-pointer gap-2 py-25 px-15 flex flex-col text-center">
      <img alt={item.name} src={item.imageUrl} className="w-200 h-200" />
      <div className="font-bold text-14">{item.name}</div>
      <div className="text-GreenColor">{item.price}</div>
      <div className="text-14 text-GreyColor">{item.text}</div>
    </div>
  );
};

export default BestComponent;
