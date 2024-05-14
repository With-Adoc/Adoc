import type { Metadata } from "next";
import "./globals.css";
import "@/styles/common.scss";
import ReducerProvider from "./reducerProvider";

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
      <body>
        <ReducerProvider>{children}</ReducerProvider>
      </body>
    </html>
  );
}
