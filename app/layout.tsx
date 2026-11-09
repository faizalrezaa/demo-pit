import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workshop PIT",
  description: "Blabla workshop PIT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
