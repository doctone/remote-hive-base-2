import Link from "next/link";

export default function WorkspaceButton() {
  return (
    <Link
      className="py-2 px-3 flex justify-center rounded-md no-underline hover:bg-btn-background-hover border"
      href="/workspaces"
    >
      <path
        d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
        fill="currentColor"
      ></path>
      Check out your workspaces
    </Link>
  );
}
