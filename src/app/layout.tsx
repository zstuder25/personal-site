import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import SideNav from "@/components/SideNav/SideNav";
import SideNavItem from "@/components/SideNavItem/SideNavItem";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export const metadata: Metadata = {
  title: "Zachery Studer",
  description: "Zachery Studer's Personal Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans flex flex-row p-8 bg-gradient-to-br from-emerald-300 via-teal-800 to-stone-600 bg-fixed`}
      >
        <SideNav>
          <SideNavItem text="About Me" href="/" />
          <SideNavItem text="My Work" href="/work" />
          <SideNavItem text="Let's Talk Books" href="/books" />
        </SideNav>
        {children}
      </body>
    </html>
  );
}
