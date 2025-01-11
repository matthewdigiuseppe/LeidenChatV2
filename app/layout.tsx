import { Inter } from "next/font/google";
import "./globals.css";
import Warnings from "./components/warnings";
import { assistantId } from "./assistant-config";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Leiden Political Science Chat",
  description: "Ask me a question about our policies!",
  icons: {
    icon: "/favicon.ico", // Update this if you have a new favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {assistantId ? children : <Warnings />}
        <img className="logo" src="/leiden.png" alt="Leiden Logo" />
      </body>
    </html>
  );
}