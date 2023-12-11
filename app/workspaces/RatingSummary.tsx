export default function RatingSummary() {
  return (
    <>
      <div className="flex items-center mb-5">
        <p className="bg-purple-100 text-purple-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-purple-200 dark:text-purple-800">
          8.7
        </p>
        <p className="ms-2 font-medium text-gray-900 dark:text-white">
          Excellent
        </p>
        <span className="w-1 h-1 mx-2 bg-gray-900 rounded-full dark:bg-gray-500"></span>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          376 reviews
        </p>
        <a
          href="#"
          className="ms-auto text-sm font-medium text-purple-600 hover:underline dark:text-purple-500"
        >
          Read all reviews
        </a>
      </div>
      <div className="gap-8 sm:grid sm:grid-cols-2">
        <div>
          <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Staff
            </dt>
            <dd className="flex items-center mb-3">
              <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                <div className="bg-purple-600 h-2.5 rounded dark:bg-purple-500"></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                8.8
              </span>
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Comfort
            </dt>
            <dd className="flex items-center mb-3">
              <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                <div className="bg-purple-600 h-2.5 rounded dark:bg-purple-500"></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                8.9
              </span>
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Free WiFi
            </dt>
            <dd className="flex items-center mb-3">
              <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                <div className="bg-purple-600 h-2.5 rounded dark:bg-purple-500"></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                8.8
              </span>
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Facilities
            </dt>
            <dd className="flex items-center">
              <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                <div className="bg-purple-600 h-2.5 rounded dark:bg-purple-500"></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                5.4
              </span>
            </dd>
          </dl>
        </div>
        <div>
          <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Value for money
            </dt>
            <dd className="flex items-center mb-3">
              <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                <div className="bg-purple-600 h-2.5 rounded dark:bg-purple-500"></div>
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
            <dd className="flex items-center mb-3">
              <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                <div className="bg-purple-600 h-2.5 rounded dark:bg-purple-500"></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                7.0
              </span>
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Location
            </dt>
            <dd className="flex items-center">
              <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                <div className="bg-purple-600 h-2.5 rounded dark:bg-purple-500"></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                8.9
              </span>
            </dd>
          </dl>
        </div>
      </div>
    </>
  );
}
