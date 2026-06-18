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
                <div className="sectionDiv" id="hero"><Hero /></div>
                
                <Brand />
                <div className="sectionDiv" id="about"><About /></div>
                <div className="sectionDiv" id="services"><Services /></div>
                <Cta />
                <div className="sectionDiv" id="contact"><Contact /></div>
            </div>
            {/* Footer Code */}
            <Footer />
        </>
    );
}

export default Home;