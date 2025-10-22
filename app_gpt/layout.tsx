import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Script from "next/script";

export const metadata = {
  title: "AJM Global — The Assembly Of Jesus Messiah Global Pilgrimage",
  description: "AJM Global — Worship • Discipleship • Outreach — Harare, Zimbabwe",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#050617] text-white antialiased selection:bg-ajm-500 selection:text-white">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
