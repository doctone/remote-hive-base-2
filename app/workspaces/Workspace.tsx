import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { FavouriteIcon } from "../../components/Icons/FavouriteIcon";
import { notify } from "../../components/Notification";

export default function Workspace({
  id,
  title,
  description,
  imageUrl,
  addToFavourites,
  userId,
}: {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  userId: string;
  addToFavourites: (userId: string, workspaceId: string) => Promise<void>;
}) {
  const handleAddToFavourites = async () => {
    addToFavourites(userId, id)
      .then(() => notify("Added to favourites", "success"))
      .catch((error) =>
        notify(`there was a problem: ${error.message}`, "error")
      );
  };
  return (
    <div className="flex w-full items-center bg-white border border-gray-200 shadow flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img className="object-cover w-1/4 h-96" src={imageUrl} alt="" />
      <div className="flex flex-col justify-between p-4 leading-normal w-5/6 gap-5">
        <a href={`/workspaces/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className="flex justify-start">
          <button
            onClick={handleAddToFavourites}
            className="w-1/8 flex flex-col items-center bg-transparent text-red-700 font-semibold hover:text-white py-2 px-4 rounded"
          >
            <FavouriteIcon />
            Add to favourites
          </button>
        </div>
      </div>
    </div>
  );
}
