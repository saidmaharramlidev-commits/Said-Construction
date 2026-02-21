import HeroPic from "../assets/heroConstruction.jpg"
import HeroLogo from '../assets/heroLogo.jpg'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import { FaGripLinesVertical } from "react-icons/fa";
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from "react-redux";
import { setNavbar } from "../redux/counterSlice";
import type { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";

function Hero() {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const dispatch = useDispatch()
    const { isNavbarOpen } = useSelector((state: RootState) => state.counter)
    const navigate = useNavigate()


    return (
        <div id="mainHero">
            <div id="navbar">
                <div id="logo-wrapper">
                    <img src={HeroLogo} alt="" />
                </div>
                <div id="rightNavbar" className={isNavbarOpen ? "navbarOpen" : ""}>
                    <a href="/">Home</a>
                    <p
                        id="aboutBtn"
                        onClick={handleOpen}
                        style={{ cursor: "pointer" }}
                    >
                        About {anchorEl ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
                    </p>

                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "center",
                        }}

                    >
                        <MenuItem onClick={() => {
                            navigate("/about")
                            handleClose()
                        }}>History and Goals</MenuItem>
                        <MenuItem onClick={() => {
                            navigate("/about/leader")
                            handleClose()
                        }}>Founder of Company</MenuItem>
                    </Menu>

                    <a href="">Services</a>
                    <a href="">Projects</a>
                    <a href="">Blog</a>
                    <a href="">Contact</a>
                </div>
                <div id="menuBtn" onClick={() => dispatch(setNavbar())} >
                    <MenuIcon />
                </div>


            </div>
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