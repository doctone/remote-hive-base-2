export default function Workspace({
  id,
  title,
  description,
  imageUrl,
}: {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}) {
  return (
    <a
      href={`/workspaces/${id}`}
      className="flex w-full items-center bg-white border border-gray-200 shadow flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img className="object-cover w-1/4 h-96" src={imageUrl} alt="" />
      <div className="flex flex-col justify-between p-4 leading-normal w-5/6">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </a>
  );
}
