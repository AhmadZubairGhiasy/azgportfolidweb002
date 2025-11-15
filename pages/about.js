import React from 'react'



import AboutSection from '@/components/aboutsection';
import AboutHero from '@/components/aboutHero';
import AboutContact from '@/components/aboutcontact';
import ContactSection from '@/components/contactsection';
import ToolSection from '@/components/toolsSection';


import Head from "next/head";

export default function page() {
  return (
    <>
      
      <Head>
        <title>Know AZG</title>
       <meta name="description" content="AZG Portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>

      
      <AboutHero />
      <AboutSection />
      <ToolSection />
      <AboutContact />
      <ContactSection />
      
      </>
  )
}
