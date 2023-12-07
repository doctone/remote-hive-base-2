"use client";
import Link from "next/link";
import { User } from "@supabase/supabase-js";

export default function AuthButton({
  user,
  signOut,
}: {
  user: User | null;
  signOut: () => Promise<void>;
}) {
  return user ? (
    <div className="flex gap-2 items-center">
      Hey, {user.email}!
      <Link
        href="/login"
        onClick={signOut}
        className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
      >
        Logout
      </Link>
    </div>
  ) : (
    <Link
      href="/login"
      className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
    >
      Login
    </Link>
  );
}
