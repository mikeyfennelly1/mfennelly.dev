import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { GeistSans } from 'geist/font/sans'
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Mikey Fennelly | Trainee Software Engineer",
  description: "I am currently studying Immersive Software Engineering [ISE] at the University of Limerick. I am a passionate technologist with a keen interest in Software Engineering, Artificial Intelligence and video creation and graphics.",
    icons: {
        icon: "/mf.png",
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
      <Navbar
          links={[
              {
                  text: "Home",
                  href: "/"
              },
              {
                  text: "Product Mockups",
                  href: "/product"
              },
              {
                  text: "Linux Kernel Projects",
                  href: "/linux-kernel-projects"
              },
              {
                  text: "Other Software Projects",
                  href: "/other-software-projects"
              },
              {
                  text: "Content Creation",
                  href: "/content-creation"
              },
              {
                  text: "About Me",
                  href: "/about-me"
              },
              {
                  text: "Bookshelf",
                  href: "/bookshelf"
              }
          ]}></Navbar>
        {children}
      <Footer></Footer>
      </body>
    </html>
  );
}
