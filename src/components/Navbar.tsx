import HeroLogo from '../assets/heroLogo.jpg'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import { setNavbar } from "../redux/counterSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../redux/store';
import { useState } from 'react';

function Navbar() {

    const dispatch = useDispatch()
    const { isNavbarOpen } = useSelector((state: RootState) => state.counter)
    const navigate = useNavigate()


    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div id="navbar">
            <div id="logo-wrapper">
                <img src={HeroLogo} alt="" />
            </div>
            <div id="rightNavbar" className={isNavbarOpen ? "navbarOpen" : ""}>
                <a href="/" onClick={() => navigate("/")}>Home</a>
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

                <a href="" onClick={() => navigate("/services")}>Services</a>
                <a href="" onClick={() => navigate("/projects")}>Projects</a>
                <a href="">Blog</a>
                <a href="" onClick={() => navigate("/contact")}>Contact</a>
            </div>
            <div id="menuBtn" onClick={() => dispatch(setNavbar())} >
                <MenuIcon />
            </div>


        </div>
    )
}

export default Navbar