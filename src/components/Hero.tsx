import HeroPic from "../assets/heroConstruction.jpg"

import { Button } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import { FaGripLinesVertical } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Hero() {


    const navigate = useNavigate()


    return (
        <div id="mainHero">
            <Navbar />
            <div id="heroPicWrapper">
                <img src={HeroPic} alt="" />
                <div id="middleOfHero">
                    <div id="leftMiddle">
                        <h1>We Strive for Strong Foundations, High Goals!</h1>
                        <p>Entrust your work to reliable hands with economical, fast and accurate service – we carefully manage every detail and provide you with the most optimal solutions.</p>
                        <Button id="middleCta" onClick={() => navigate("/about")}>About us</Button>

                    </div>
                    <div id="rightMiddle">
                        <a href="https://www.instagram.com"><InstagramIcon /></a>
                        <a href="https://www.youtube.com"><YouTubeIcon /></a>
                        <a href="https://www.facebook.com"><FacebookIcon /></a>
                        <FaGripLinesVertical className="line" />
                        <FaGripLinesVertical className="line" />
                        <FaGripLinesVertical className="line" />
                        <FaGripLinesVertical className="line" />
                        <FaGripLinesVertical className="line" />
                        <FaGripLinesVertical className="line" />
                        <FaGripLinesVertical className="line" />
                        <FaGripLinesVertical className="line" />
                        <FaGripLinesVertical className="line" />

                    </div>

                </div>
            </div>


        </div>
    )
}

export default Hero