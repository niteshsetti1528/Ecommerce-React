import Carousel from "../components/CarouselComponent";
import { GridBannerItems } from "../constants/GridConstants";
import BestPage from "./BestPage";
import FooterPage from "./FooterPage";
import StoriesPage from "./StoriesPage";

const HomePage: React.FC = () => {
  return (
    <>
      <GridBanner />

      <Carousel />
      <BestPage />
      <BestPage />
      <StoriesPage />
      <FooterPage />
    </>
  );
};

const GridBanner: React.FC = () => {
  return (
    <div className="flex mt-16 justify-around overflow-auto">
      {GridBannerItems.map((e) => (
        <div key={e.id} className="flex flex-col items-center flex-wrap m-3 ">
          <img
            src={e.imageSource}
            alt={e.title}
            className="w-16 h-16  min-w-min object-contain"
          />
          <h4 className="font-bold text-sm ">
            <p>{e.title}</p>
          </h4>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
