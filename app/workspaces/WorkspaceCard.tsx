import RatingSummary from "./RatingSummary";

export default function WorkspaceCard({
  id,
  description,
  title,
  imageUrl,
}: {
  id: string;
  description: string;
  title: string;
  imageUrl?: string;
}) {
  return (
    <a
      href={`/workspaces/${id}`}
      className="relative flex flex-row flex-col-reverse lg:flex-row overflow-hidden rounded-lg border border-gray-100"
    >
      <div className="w-2/3 lg:w-1/3 p-6">
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-purple-300 via-white to-purple-800"></span>

        <div className="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 className="text-lg font-bold text-white sm:text-xl">{title}</h3>

            <p className="mt-1 text-xs font-medium text-gray-600">
              More details
            </p>
          </div>
        </div>
        <div className="mt-4">
          <p className="max-w-[40ch] text-sm text-gray-500">{description}</p>
        </div>

        <dl className="mt-6 flex gap-4 sm:gap-6">
          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-gray-600">Published</dt>
            <dd className="text-xs text-gray-500">31st June, 2021</dd>
          </div>
        </dl>
      </div>
      <div className="hidden lg:flex w-1/3 p-4">
        <div className="w-full">
          <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Staff
            </dt>
            <dd className="flex items-center mb-1">
              <div className="w-1/4 bg-gray-200 rounded h-1.5 dark:bg-gray-700 me-1">
                <div className="bg-purple-600 h-1.5 rounded dark:bg-purple-500"></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                4
              </span>
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Comfort
            </dt>
            <dd className="flex items-center mb-1">
              <div className="w-full bg-gray-200 rounded h-1.5 dark:bg-gray-700 me-1">
                <div className="bg-purple-600 h-1.5 rounded dark:bg-purple-500"></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                8.9
              </span>
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
              WiFi
            </dt>
            <dd className="flex items-center mb-1">
              <div className="w-1/3 bg-gray-200 rounded h-1.5 dark:bg-gray-700 me-1">
                <div className="bg-purple-600 h-1.5 rounded dark:bg-purple-500"></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                5.1
              </span>
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Facilities
            </dt>
            <dd className="flex items-center">
              <div className="w-full bg-gray-200 rounded h-1.5 dark:bg-gray-700 me-1">
                <div className="bg-purple-600 h-1.5 rounded dark:bg-purple-500"></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                8.9
              </span>
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Cleanliness
            </dt>
            <dd className="flex items-center">
              <div className="w-3/4 bg-gray-200 rounded h-1.5 dark:bg-gray-700 me-1">
                <div className="bg-purple-600 h-1.5 rounded dark:bg-purple-500"></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                7.5
              </span>
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Location
            </dt>
            <dd className="flex items-center">
              <div className="w-4/5 bg-gray-200 rounded h-1.5 dark:bg-gray-700 me-1">
                <div className="bg-purple-600 h-1.5 rounded dark:bg-purple-500"></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                8.0
              </span>
            </dd>
          </dl>
        </div>
      </div>
      <div className="sm:shrink-0 lg:w-1/3">
        <img
          alt="Workspace"
          src={imageUrl ?? "https://picsum.photos/500/400"}
          className="rounded-r-lg object-cover shadow-sm"
        />
      </div>
    </a>
  );
}
