import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import SubscribeForm from "@/components/SubscribeForm/SubscribeForm";

const open_sans = Open_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Booking Rooms",
  description: "Created by Mr. Andrew Artemov",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <Header />
        {children}
        <SubscribeForm />
        <Footer />
      </body>
    </html>
  );
}
