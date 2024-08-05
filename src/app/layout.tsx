import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "prismjs/themes/prism-tomorrow.css";
import ClientProvider from "@/app/components/ClientProvider";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Frontend JGY",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className="container">
      <Header/>
      <ClientProvider>
        {children}
      </ClientProvider>
      <Footer/>
    </body>
    </html>
  );
}
