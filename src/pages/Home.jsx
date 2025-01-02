import React from 'react'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer"
import Hero from "../components/Hero";
import Services from "../components/Services"
import Work from "../components/Work"
import Articles from "../components/Articles"
import Contact from "../components/ContactUs";

function Home() {
  return (
    <div>
      <div className="hero">
      <NavBar />
     <Hero />
     </div>
     <div className='Floatingbuttons z-40 fixed bottom-[-4px] right-0 mb-4 mr-4 '>
      <div className='whatsapp hover:bg-[#25D366] hover:text-white p-2 rounded-full icon-hover ' >
        <a href="https://wa.me/01156647497" target="_blank" rel="noreferrer">
          <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="whatsapp" />
        </a>
        </div>
        <div className='phone hover:bg-white p-2 rounded-full icon-hover rotate-[-3deg]'>
        <a href="tel:01156647497">
          <img src="https://img.icons8.com/color/48/000000/phone.png" alt="phone" />
        </a>
        </div>
     </div>
     <Services />
     <Work />
     <Articles />
     <Contact />
      <Footer />
    </div>
  )
}

export default Home
