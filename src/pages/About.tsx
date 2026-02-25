import AboutHero from "../AboutComps/AboutHero"
import Middle from "../components/Middle"
import Navbar from "../components/Navbar"
import HeroPic from "../assets/aboutHeroSec.jpg"
import Footer from "../components/Footer"


function About() {
    return (
        <div id="mainAbout">
            <Navbar />
            <AboutHero header="About" url="Home > About" />
            <Middle />


            <div id="container">
                <div id="infoHorizontalDivs">
                    <div className="infoHorizontalDiv">
                        <h1>Professional Climate and Ventilation Solutions</h1>
                        <p>We provide ideal climate conditions for your living and working spaces with central air conditioning and ventilation systems. We offer energy efficiency and maximum comfort thanks to VRF air conditioning systems, chillers and fan coil solutions.</p>
                    </div>
                    <div className="infoHorizontalDiv">
                        <h1>Heating and Water Filtration Systems</h1>
                        <p>Create a healthier and safer environment with central heating systems, water softeners and filtration equipment. Our water quality solutions and efficient heating systems will ensure your comfort every season.</p>
                    </div>
                    <div className="infoHorizontalDiv">
                        <h1>Design, Installation and Service</h1>
                        <p>Our specialists provide engineering solutions tailored to your facility, professional installation and long-term service. We provide full support and maintenance to ensure the reliable and efficient operation of each system.</p>
                    </div>
                </div>





            </div>

            <div id="statistic">
                <h1>Said Construction – The name of quality and trust!</h1>
                <img src={HeroPic} alt="" />
                <div id="numbers">
                    <div className="number">
                        <h2>20+</h2>
                        <h2>Successful Projects</h2>
                    </div>
                    <div className="number">
                        <h2>35+</h2>
                        <h2>Customer Consent</h2>

                    </div>
                    <div className="number">
                        <h2>50+</h2>
                        <h2>Personal</h2>
                    </div>

                </div>

            </div>
            <Footer />

        </div>
    )
}

export default About