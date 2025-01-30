import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/utilities/Header/Header";
import QuoteFormLoader from "./QuoteFormLoader"; // Import the new component
import FooterPage from "@/components/utilities/Footer/FooterPage";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Sarasvate",
  description: "Build the Future",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <QuoteFormLoader /> {/* Use the new loader component */}
        <FooterPage />
      </body>
    </html>
  );
}
