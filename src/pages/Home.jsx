import { Section } from "lucide-react";
import Navbar from "../components/nabvar/Navbar";

import Hero from "../components/main/Hero"
import About from "../components/main/About";
import Services from "../components/main/Services";
import WhyUs from "../components/main/WhyUs";
import Cta from "../components/main/Cta";
import Contact from "../components/main/Contact";
import FAQ from "../components/main/FAQ";
import Brand from "../components/main/Brand";
import FloatingActions from "../components/ui/FloatingActions";


import Footer from "../components/footer/Footer";
const Home = () =>{
    return(
        <>
            {/* Navbar Code */}
            <Navbar />

            {/* Main Section Code */}
            <div> 
                <Hero />
                <About />
                <Services />
                <WhyUs />
                <Cta />
                <Contact />
                <FAQ />
            </div>
            {/* Footer Code */}
            <Footer />
            <FloatingActions />
           
            
        </>
    );
}

export default Home;