import BestComponent from "../components/BestComponent";
import { ProductInterface } from "../interface/ProductInterface";

const BestPage: React.FC<{ items: ProductInterface[] }> = ({ items }) => {
  return (
    <div className="w-full border border-yellow mt-6 shadow">
      <div className="flex overflow-x-auto">
        {items.map((item, index) => (
          <div key={index} className="flex-none">
            <BestComponent item={item}></BestComponent>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestPage;
