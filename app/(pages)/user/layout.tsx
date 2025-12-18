import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import ClientSideBar from "@/app/components/SideBars/ClientSideBar";
import TopBar from "@/app/components/TopBar/TopBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "User Dashboard - JustHair",
  description: "Manage your appointments and profile on JustHair platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-screen max-h-dvh flex fixed top-0 left-0">
          <ClientSideBar />

          <div className="w-full">
            <TopBar />
            <div className="no-scrollbar page-content flex flex-col gap-6">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
