import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseTrail from "@/components/MouseTrail";

export const metadata = {
  title: "Optimus AI - Intelligent Automation Solutions",
  description: "Transform your business with AI-powered automation. Voice agents, chat agents, website development, and workflow automation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
        <MouseTrail />
      </body>
    </html>
  );
}
