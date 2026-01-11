import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cartel MVP",
  description: "MVP & Learning Project",
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
