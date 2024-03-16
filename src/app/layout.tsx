import type { Metadata } from "next";
import "./globals.css";
import "@/styles/common.scss";

export const metadata: Metadata = {
  title: "A-doc",
  description: "A-doc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
