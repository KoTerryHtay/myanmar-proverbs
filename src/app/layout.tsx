import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Myanmar Proverbs",
  description: "Myanmar Proverbs. Data by burma-project-ideas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-col h-screen">
            <NavBar />
            <div className="overflow-auto bg-[#79AC78] flex-grow">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
