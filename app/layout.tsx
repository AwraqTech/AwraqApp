import type { Metadata } from "next";
import "./globals.css";
import PrelineScript from "./components/PrelineScript";
import Header from "./ui/Header";
import 'remixicon/fonts/remixicon.css'
import { IBM_Plex_Sans_Arabic } from 'next/font/google';
import Footer from "./ui/Footer";
import PinnedHeader from "./ui/PinnedHeader";
import { ThemeProvider } from "./context/ThemeContext";
import SideBarMobileMenu from "./ui/SideBarMobileMenu";
import { SidebarProvider } from "./context/SidebarContext";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "منصة أوراق | منصتك الأفضل لإدارة تجارتك",
  description: "منصة أوراق هي منصة تمكن التجار من إدارة أنشطتهم التجارية بكل سهولة و تيسيير",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <html lang="en">
          <body
            className={ibmPlexSansArabic.className}
          >
            <PrelineScript />
            <PinnedHeader />
            <Header />
            <SideBarMobileMenu />
            {children}
            <Footer />
          </body>
        </html>
      </SidebarProvider>
    </ThemeProvider>
  );
}
