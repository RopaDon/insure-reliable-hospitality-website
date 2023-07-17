import "./css/style.css";
import { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { ReduxProvider } from "@/src/redux/provider";
import { PageData } from "../config/constants/page-data";
import { Inter, Playfair_Display } from "next/font/google";
import { generateSeoMetadata } from "../components/utils/utils";
import { toastOptions } from "@/src/config/constants/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

const { title, description, path } = PageData.Home;

export const metadata: Metadata = {
  title,
  description,
  ...generateSeoMetadata(title, description, path),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-inter antialiased bg-white text-slate-800 tracking-tight`}>
        <ReduxProvider>
          <Toaster toastOptions={toastOptions} />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
