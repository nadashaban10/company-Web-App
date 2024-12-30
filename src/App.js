import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Services from "./components/Services"
import Footer from "./components/Footer"


function App() {
    return (
      <>
   <div className="hero">
     <NavBar />
     <Hero />
     </div>
     <Services />
     <Footer />
      </>
    );
}

export default App;
