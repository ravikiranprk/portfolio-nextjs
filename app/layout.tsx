import type { Metadata } from "next";
import "./globals.css";

import Menu from "@/components/Menu";

export const metadata: Metadata = {
  title: "Ravi Kiran Palaparthi",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
      >
        <Menu />
        {children}
      </body>
    </html>
  );
}
