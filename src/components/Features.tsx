import { Button } from "@mui/material"
import firstPic from "../assets/featFirst.webp"
import secondPic from "../assets/featSecond.jpeg"
import thirdPic from "../assets/featThird.jpg"
import fourthPic from "../assets/featFourth.jpg"
import { useState } from "react"
import type { Service } from "../types/types"
import { Select, MenuItem } from "@mui/material";
import "../css/features.css"





function Features() {


    const [service, setservice] = useState<number>(1)


    const serviceData: Service = {
        1: {
            h1: "Quality",
            p: "We adhere to high standards in all construction work and complete our projects accurately and reliably.",
            img: firstPic
        },
        2: {
            h1: "Health",
            p: "We protect the health of employees and customers and provide safe and healthy conditions.",
            img: secondPic
        },
        3: {
            h1: "Occupational Safety",
            p: "We ensure the protection of every employee by creating a safe and comfortable working environment.",
            img: thirdPic
        },
        4: {
            h1: "Environmental Protection",
            p: "We protect the environment, use resources efficiently, and minimize waste.",
            img: fourthPic
        }
    }

    return (
        <div id="mainFeatures">
            <div id="container">
                <div id="topOfServices">
                    <h1>Features</h1>

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
                        <MenuItem value={1}>Quality</MenuItem>
                        <MenuItem value={2}>Health</MenuItem>
                        <MenuItem value={3}>Occupational Safety</MenuItem>
                        <MenuItem value={4}>Environmental Protection</MenuItem>
                    </Select>
                    <div id="servicesButtons">
                        <Button

                            onClick={() => { setservice(1) }}
                            sx={{
                                backgroundColor: "white",
                                color: service === 1 ? "darkblue" : "black",
                                borderRadius: "10px"
                            }}
                            className={`serviceBtn`}>Quality</Button>


                        <Button
                            onClick={() => { setservice(2) }}
                            sx={{
                                backgroundColor: "white",
                                color: service === 2 ? "darkblue" : "black",
                                borderRadius: "10px"
                            }}
                            className={`serviceBtn`}>Health</Button>



                        <Button
                            onClick={() => { setservice(3) }}
                            sx={{
                                backgroundColor: "white",
                                color: service === 3 ? "darkblue" : "black",
                                borderRadius: "10px"
                            }}
                            className={`serviceBtn`}>Occupational Safety</Button>
                        <Button
                            onClick={() => { setservice(4) }}
                            sx={{
                                backgroundColor: "white",
                                color: service === 4 ? "darkblue" : "black",
                                borderRadius: "10px"
                            }}
                            className={`serviceBtn`}>Environmental Protection</Button>
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

        </div>
    )
}

export default Features