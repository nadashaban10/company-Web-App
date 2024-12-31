import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Services from "./components/Services"
import Footer from "./components/Footer"
import Work from "./components/Work"
import Articles from "./components/Articles"
import Contact from "./components/ContactUs";


function App() {
    return (
      <>
   <div className="hero">
     <NavBar />
     <Hero />
     </div>
     <Services />
     <Work />
     <Articles />

     <Contact />
     <Footer />
      </>
    );
}

export default App;
