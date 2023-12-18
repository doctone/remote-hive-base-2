import { GeistSans } from "geist/font/sans";
import "./globals.css";
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
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <nav className="md:px-20 w-full flex justify-between border-b border-b-foreground/10 h-16 items-center gap-10">
          <Link
            className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
            href="/"
          >
            Mike
          </Link>
          {/* @ts-ignore */}
          <AuthButton />
        </nav>
        <main className="min-h-[90vh] flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
