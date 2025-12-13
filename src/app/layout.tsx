import type { Metadata } from "next";
import { Kalnia, Sora, Gwendolyn } from "next/font/google";
import "@/assets/css/global.css";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import AOS from "@/components/shared/aos";
import Preloader from "@/components/shared/preloader";
import { Toaster } from 'react-hot-toast';
import SmoothScroll from "@/components/shared/lenis";
import Favicon from "@/assets/images/logo/favicon.png";

const kalnia = Kalnia({
  variable: "--font-kalnia",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const gwendolyn = Gwendolyn({
  variable: "--font-gwendolyn",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  robots: "noindex, nofollow",
  icons: {
    icon: Favicon.src
  },
  openGraph: {
    title: "YummiYaam - Premium Restaurant Next.js Template",
    description: "Restaurant Next.js Website Template- Discover YummiYaam - Premium Restaurant Next.js Template built for modern dining experiences. Purchase now!",
    images: [
      {
        url: "https://designtocodes.com/wp-content/uploads/2025/05/YummiYaam-Premium-Restaurant-Nextjs-Template.jpg",
      },
    ],
  },
  title: "YummiYaam - Premium Restaurant Next.js Template",
  description: "Restaurant Next.js Website Template- Discover YummiYaam - Premium Restaurant Next.js Template built for modern dining experiences. Purchase now!"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${kalnia.variable} ${sora.variable} ${gwendolyn.variable} antialiased lenis lenis-smooth`}
        suppressHydrationWarning={true}
      >
        <SmoothScroll />
        <Header />
        <Preloader />
        <AOS />
        <Toaster position="top-center" />
        {children}
        <Footer />
      </body>
    </html>
  );
}