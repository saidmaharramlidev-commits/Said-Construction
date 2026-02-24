import AboutHero from "../AboutComps/AboutHero"
import Navbar from "../components/Navbar"
import Pic from "../assets/aboutHeroSec.jpg"

import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Button, TextField } from "@mui/material";
import Footer from "../components/Footer";

function Contact() {
    return (
        <div id="mainContact">
            <Navbar />
            <AboutHero header="Contact" url="Home > Contact" pic={Pic} />

            <div id="containerContact">
                <div id="location">
                    <div id="leftLocation">
                        <h3><LocationOnIcon sx={{ color: "blue" }} />Location</h3>
                        <p>Somewhere of the world</p>
                        <h3><EmailIcon sx={{ color: "blue" }} />Email</h3>
                        <p>random@gmail.com</p>
                        <h3><LocalPhoneIcon sx={{ color: "blue" }} />Phone</h3>
                        <p>+123456789</p>
                    </div>
                    <div id="rightLocation">
                        <iframe
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            src="https://www.google.com/maps?q=40.4093,49.8671&z=13&output=embed"
                        ></iframe>
                    </div>

                </div>


                <div id="contactForm">
                    <h3>We are ready to help you.</h3>
                    <div id="fields">
                        <TextField className="field" label="Name" />
                        <TextField className="field" label="Surname" />
                        <TextField className="field" label="Email" />
                        <TextField className="field" label="Company" />

                    </div>
                    <div id="message-wrapper">
                        <TextField sx={{ width: "100%" }} id="message" label="Message" multiline rows={3} />
                    </div>


                    <div>
                        <Button variant="contained" color="primary">Send Form</Button>
                    </div>

                </div>





            </div>

            <Footer />


        </div>
    )
}

export default Contact