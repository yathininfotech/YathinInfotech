import React from 'react'
import Hero from './Hero'
import Companies from './Companies'
import WhyUs from './WhyUs'
import Services from './OurServices'
import Capabilities from './Capabilities'
import AboutUs from './AboutUs'
import ContactSection from './ContactUs'
import ProcessCards from './ProcessCards'
import FAQSection from './Faqs'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <AboutUs/>
      <Services/>
      <WhyUs/>
      <ContactSection/>
      <Companies/>
      <Capabilities/>
      <ProcessCards/>
      <FAQSection/>
    </div>
  )
}

export default HomePage
