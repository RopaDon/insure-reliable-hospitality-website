import "./css/style.css";
import { Toaster } from "react-hot-toast";
import { ReduxProvider } from "@/redux/provider";
import { Inter, Playfair_Display } from "next/font/google";
import { toastOptions } from "@/config/constants/constants";

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

export const metadata = {
  title: "Insure Reliable Hospitality",
  description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-inter antialiased bg-white text-slate-800 tracking-tight`}>
        <ReduxProvider>
          <Toaster toastOptions={toastOptions} />
          {children} <Toaster />
        </ReduxProvider>
      </body>
    </html>
  );
}
