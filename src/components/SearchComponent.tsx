import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchComponent = () => {
  return (
    <div className="flex w-2/5 h-9 px-4 py-2 border border-gray-300 bg-white justify-between rounded-sm">
      <input
        type="text"
        placeholder="Search for products, brands, and more"
        className=" w-4/5 border border-none focus:outline-none focus:border-transparent "
      />
      <FontAwesomeIcon icon={faSearch} className="w-5 h-5 text-blue-500 " />
    </div>
  );
};
export default SearchComponent;
