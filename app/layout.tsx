import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "크루즈야 | 부산 출발 부부 크루즈",
  description: "부산에서 편안하게 시작하는 품격 있는 부부 크루즈 여행",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
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
