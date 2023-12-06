import { FavouriteIcon } from "../../components/Icons/FavouriteIcon";

export const AddToFavourites = () => {
  return (
    <div className="flex justify-center">
      <button className="w-1/5 flex flex-col items-center bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
        <FavouriteIcon />
        Add to favourites
      </button>
    </div>
  );
};
