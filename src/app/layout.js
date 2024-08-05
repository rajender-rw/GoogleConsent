import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";
import CookieBanner from "./components/cookiebanner";
import { Suspense } from "react";
import ProgressBarProvider from "./components/ProgressBarProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Suspense fallback={<div>Loading...</div>}>
        <GoogleAnalytics GA_MEASUREMENT_ID='G-2H7DPL0YEV' />
      </Suspense>
      <body className={inter.className}>
        <Suspense>
          <ProgressBarProvider>{children}</ProgressBarProvider>
        </Suspense>
        <CookieBanner />
      </body>
    </html>
  );
}
