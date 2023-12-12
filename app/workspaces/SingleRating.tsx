export default function SingleRating({ id }: { id: string }) {
  const rating = Math.floor(Math.random() * 10) + 1;
  const reviews = Math.floor(Math.random() * 100) + 1;
  const descriptor: Record<number, string> = {
    1: "Poor",
    2: "Poor",
    3: "Needs Improvement",
    4: "Okay",
    5: "Average",
    6: "Not Bad",
    7: "Good",
    8: "Very Good",
    9: "Excellent",
    10: "Superb",
  };
  return (
    <div className="flex items-center mb-5">
      <p className="bg-purple-100 text-purple-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-purple-200 dark:text-purple-800">
        {rating}
      </p>
      <p className="ms-2 font-medium text-gray-900 dark:text-white">
        {descriptor[rating]}
      </p>
      <span className="w-1 h-1 mx-2 bg-gray-900 rounded-full dark:bg-gray-500"></span>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
        {reviews}
      </p>
      <a
        href={`reviews/${id}`}
        className="ms-auto text-sm font-medium text-purple-600 hover:underline dark:text-purple-500"
      >
        Read all reviews
      </a>
    </div>
  );
}
