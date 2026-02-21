import { Button } from "@mui/material"
import MiddlePic from "../assets/middlePic.jpg"
import { useNavigate } from "react-router-dom"

function Middle() {
    const navigate = useNavigate()



    return (
        <div id="mainMiddle">
            <div id="container">
                <div id="topOfMiddle">
                    <div id="leftTop">
                        <h1>Business Name</h1>
                        <p>A professional construction company offering an innovative approach and reliable partnership</p>
                    </div>
                    <div>
                        <Button variant="contained" sx={{ backgroundColor: "white", color: "black" }} onClick={() => navigate("/about")}>About more</Button>
                    </div>

                </div>
                <div id="infoMiddle-wrapper">
                    <div id="infoMiddle">
                        <h3>Representative of Trust and Quality in the Construction Sector</h3>
                        <p>We proudly serve as a trusted partner in Azerbaijan’s construction industry, delivering exceptional residential developments, modern office environments, and sustainable infrastructure solutions. Every project we undertake is shaped by innovation, premium-quality materials, and the expertise of our dedicated professionals. We don’t just build structures — we build long-term value. Your vision drives our success.</p>
                        <a href="" onClick={() => navigate("/about")}>{"Expanded  >"}</a>
                    </div>
                    <div id="middle-pic-wrapper">
                        <img src={MiddlePic} alt="" />

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Middle