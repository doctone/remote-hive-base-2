"use client";

import { usePathname } from "next/navigation";

function Tabs({ userId }: { userId: string }) {
  const path = usePathname();

  const isFavouriteActive = path.includes("user");

  const activeClass =
    "bg-gray-100 text-purple-600 dark:bg-gray-800 dark:text-purple-500";

  return (
    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
      <li className="me-2">
        <a
          href="/workspaces"
          aria-current="page"
          className={`inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 ${
            !isFavouriteActive && activeClass
          }`}
        >
          All Workspaces
        </a>
      </li>
      <li className="me-2">
        <a
          href={`workspaces/user/${userId}`}
          className={`inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 ${
            isFavouriteActive && activeClass
          }`}
        >
          My Workspaces
        </a>
      </li>
    </ul>
  );
}

export default Tabs;
