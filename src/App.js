import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Services from "./components/Services"
import Footer from "./components/Footer"
import Work from "./components/Work"


function App() {
    return (
      <>
   <div className="hero">
     <NavBar />
     <Hero />
     </div>
     <Services />
     <Work />
     <Footer />
      </>
    );
}

export default App;
