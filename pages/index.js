import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";




import HeroSection from "@/components/herosection";
import AboutSection from "@/components/aboutsection";
import ToolSection from "@/components/toolsSection";
import ContactSection from "@/components/contactsection";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Ahmad Zubair Ghiasi</title>
        <meta name="description" content="AZG Portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >

      
       
        <HeroSection />
        <AboutSection />
        <ToolSection />
        <ContactSection />
        
        

      </div>
    </>
  );
}
