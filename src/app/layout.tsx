import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Providers from "./provider";

const dm_Sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HNGX movie box",
  description: "Discover movies and TV shows",
  keywords: "movies, tv shows, discover, popular, trending, top rated",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={dm_Sans.className}>{children}</body>
      </Providers>
    </html>
  );
}
