import { DM_Sans as Font } from "next/font/google";
import "./globals.css";

const font = Font({
  subsets: ['latin'],
  weight: [ '300', '400', '500', '600', '700', '800' ]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
