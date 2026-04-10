import { Section } from "lucide-react";
import Navbar from "../components/nabvar/Navbar";
import Hero from "../components/main/Hero"
import About from "../components/main/About";
import Services from "../components/main/Services";
import Contact from "../components/main/Contact";
import Brand from "../components/main/Brand";
import Cta from "../components/main/Cta";
import Footer from "../components/footer/Footer";
const Home = () =>{
    return(
        <>
            {/* Navbar Code */}
            <Navbar />

            {/* Main Section Code */}
            <div> 
                <section id="hero"><Hero /></section>
                
                <Brand />
                <section id="about"><About /></section>
                <section id="services"><Services /></section>
                <Cta />
                <section id="contact"><Contact /></section>
            </div>
            {/* Footer Code */}
            <Footer />
        </>
    );
}

export default Home;