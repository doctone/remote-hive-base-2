import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { canInitSupabaseClient } from "../utils/supabase/client";
import { cookies } from "next/headers";
import AuthButton from "../components/AuthButton";
import Link from "next/link";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : process.env.BASE_URL ?? "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "RemoteHive",
  description: "Discover workspaces in your area",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();

  const isSupabaseConnected = canInitSupabaseClient(cookieStore);

  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <nav className="px-20 mb-10 w-full flex justify-between border-b border-b-foreground/10 h-16 items-center gap-10">
          <Link
            className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
            href="/"
          >
            Home
          </Link>
          {isSupabaseConnected && <AuthButton />}
        </nav>
        <main className="min-h-screen flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
