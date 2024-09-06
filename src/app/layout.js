import localFont from "next/font/local";
import "./globals.css";
import { Header } from "../components/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Dewangkara Maetala 2024 John Tjandra Utomo",
  description: "A Overcomplicated Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark hidescroll">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Header />
        {children}
      </body>
    </html>
  );
}
