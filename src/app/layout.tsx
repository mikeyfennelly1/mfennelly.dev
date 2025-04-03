import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Mikey Fennelly | Trainee Software Engineer",
  description: "I am currently studying Immersive Software Engineering [ISE] at the University of Limerick. I am a passionate technologist with a keen interest in Software Engineering, Artificial Intelligence and video creation and graphics.",
};

const profilePhoto = "/";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Navbar
          centerItems={[{
              text: "Software Projects",
              href: "/"
          },
          {
              text: "Content Creation",
              href: "/"
          }]}
          topLeftImage={profilePhoto}
      ></Navbar>
        {children}
      </body>
    </html>
  );
}
