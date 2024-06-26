import type { Metadata } from "next";
import { gilroy } from "../utils/fonts";
import "./globals.css";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Solana block explorer",
  description: "Check list of blocks and detailed view.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gilroy.className}>
        <div className="w-full h-full max-w-inner mx-auto p-5 pt-[72px]">
          {children}
        </div>

        <ToastContainer />
      </body>
    </html>
  );
}
