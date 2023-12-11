"use client";
import { useRouter } from "next/navigation";
import { FavouriteIcon } from "../../../components/Icons/FavouriteIcon";
import { notify } from "../../../components/Notification";

export default function ToggleFavourite({
  toggleFavourite,
  isFavourite,
  userId,
  id,
}: {
  toggleFavourite: (
    userId: string | undefined,
    workspaceId: string,
    action: "add" | "remove"
  ) => Promise<void>;
  isFavourite: boolean;
  userId: string | undefined;
  id: string;
}) {
  const router = useRouter();

  const handleAddToFavourites = async (action: "add" | "remove") => {
    toggleFavourite(userId, id, action)
      .then(() => {
        notify("Added to favourites", "success");
        router.refresh();
      })
      .catch((error) =>
        notify(`there was a problem: ${error.message}`, "error")
      );
  };

  return (
    <div className="flex justify-start">
      <button
        onClick={() => {
          const action = isFavourite ? "remove" : "add";
          handleAddToFavourites(action);
        }}
        className="w-1/8 flex flex-col items-center bg-transparent text-red-700 font-semibold hover:text-white py-2 px-4 rounded"
      >
        <FavouriteIcon favourite={isFavourite} />
        {isFavourite ? "Remove from favourites" : "Add to favourites"}
      </button>
    </div>
  );
}
