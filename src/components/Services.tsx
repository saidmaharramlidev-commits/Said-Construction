import { Button } from "@mui/material"
import firstPic from "../assets/serviceFirst.jpeg"
import secondPic from "../assets/serviceSecond.avif"
import thirdPic from "../assets/serviceThird.jpeg"
import { useState } from "react"
import type { Service } from "../types/types"
import { useNavigate } from "react-router-dom"
import { Select, MenuItem } from "@mui/material";


function Services() {

    const [service, setservice] = useState<number>(1)


    const serviceData: Service = {
        1: {
            h1: "Design Services",
            p: "We carry out all projects with a professional, safe and functional approach. We provide reliable and aesthetic solutions from idea to result.",
            img: firstPic
        },
        2: {
            h1: "Construction Installation Services",
            p: "We carry out construction and installation works in accordance with quality and modern standards. We ensure safe and sustainable results.",
            img: secondPic
        },
        3: {
            h1: "Shuttle Services",
            p: "We provide prompt, reliable and professional service. We provide quality technical support and sustainable solutions.",
            img: thirdPic
        }
    }

    const navigate = useNavigate()













    return (
        <div id="mainServices">
            <div id="container">
                <div id="topOfServices">
                    <h1>Services</h1>
                    <div>
                        <Button id="ctaServices" sx={{ backgroundColor: "white", color: "black" }} onClick={() => navigate("/services")} variant="contained">display all</Button>

                    </div>

                </div>
                <div id="servicesPart">
                    <Select
                        id="serviceOptions"
                        value={service}
                        onChange={(e) => setservice(Number(e.target.value))}
                        sx={{
                            width: "100%",
                            "& .MuiPaper-root": { width: "100%" },
                            display: "none",
                            "@media (max-width:1200px)": {
                                display: "block"
                            }
                        }}
                    >
                        <MenuItem value={1}>Design Services</MenuItem>
                        <MenuItem value={2}>Construction Installation Services</MenuItem>
                        <MenuItem value={3}>Shuttle Services</MenuItem>
                    </Select>
                    <div id="servicesButtons">
                        <Button

                            onClick={() => { setservice(1) }}
                            sx={{
                                backgroundColor: "white",
                                color: service === 1 ? "darkblue" : "black",
                                borderRadius: "10px"
                            }}
                            className={`serviceBtn`}>Design Services</Button>


                        <Button
                            onClick={() => { setservice(2) }}
                            sx={{
                                backgroundColor: "white",
                                color: service === 2 ? "darkblue" : "black",
                                borderRadius: "10px"
                            }}
                            className={`serviceBtn`}>Construction Installation Services</Button>



                        <Button
                            onClick={() => { setservice(3) }}
                            sx={{
                                backgroundColor: "white",
                                color: service === 3 ? "darkblue" : "black",
                                borderRadius: "10px"
                            }}
                            className={`serviceBtn`}>Shuttle Services</Button>
                    </div>
                    <div id="rightPart-wrapper" key={service}>
                        <div id="rightText">
                            <h2>{serviceData[service].h1}</h2>
                            <p>{serviceData[service].p}</p>
                        </div>
                        <div id="rightPicture" >
                            <img src={serviceData[service].img} alt="Photo" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Services