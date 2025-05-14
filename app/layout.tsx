import { DM_Sans as Font } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

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
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body
        className={`${font.className} antialiased`}
      >
        <NextTopLoader
          color="#D4A10F"
          showSpinner={false}
        />
        {children}
      </body>
    </html>
  );
}
