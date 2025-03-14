import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopMenu from "@/components/TopMenu";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import TopMenuItem from "@/components/TopMenuItem";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Venue Booking",
  description: "A Venue Booking Web-Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-100`}>
        <TopMenu />
        <AppRouterCacheProvider>
          <div className="mt-16">{children}</div>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
