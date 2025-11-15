import React from 'react'
import Head from "next/head";

import AboutContact from '@/components/aboutcontact';
import ContactSection from '@/components/contactsection';
import FormSection from '@/components/formsection';
import ContactHero from '@/components/contacthero';

export default function contact() {
  return (
    <>
      <Head>
        <title>Contact AZG</title>
        <meta name="description" content="AZG Portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      
      <ContactHero/>
      <FormSection/>
      <AboutContact />
      <ContactSection />
      
      </>
  )
}
