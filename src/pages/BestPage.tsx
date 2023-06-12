import BestComponent from "../components/BestComponent";
import { ProductInterface } from "../interface/ProductInterface";

const BestPage: React.FC<{ items: ProductInterface[] }> = ({ items }) => {
  return (
    <div className="w-full border border-yellow mt-6 shadow">
      <div className="flex overflow-x-auto">
        <div className=" w-230 flex flex-col  bg-white">
          <div className="bg-white box-border flex flex-col mt-16 mx-3 space-y-5">
            <div className="text-30 text-black text-center">
              Best of Electronics
            </div>
            <div className="flex justify-center">
              <button className="bg-blueColor px-3 py-3 w-28 rounded text-13 text-white">
                VIEW ALL
              </button>
            </div>
          </div>

          <img
            alt="best"
            src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            className="mt-auto"
          />
        </div>

        {items.map((item, index) => (
          <div key={index} className="flex-none">
            <BestComponent item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestPage;
