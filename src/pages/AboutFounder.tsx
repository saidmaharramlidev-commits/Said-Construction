import AboutHero from "../AboutComps/AboutHero"
import Navbar from "../components/Navbar"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProjectPic from "../assets/projectPic.jpg"

import { useState } from "react";
import Footer from "../components/Footer";





interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}





function AboutFounder() {





    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        console.log(event)
        setValue(newValue);
    };


    return (
        <div id="mainAboutFounder">
            <Navbar />
            <AboutHero header="Founder of Company" url="Home > About > Leader" />


            <div id="containerOfFounder">
                <h1>Said Maharramli</h1>

                <div id="educationOfFounder">
                    <h2>Education</h2>
                    <p>Azerbaijan University,Social Work</p>

                </div>

                <div id="techskills">
                    <h2>Technical Skills</h2>
                    <p>Engineer</p>
                    <p>Project Manager</p>
                    <p>Civil Engineer</p>
                    <p>Quality Control Engineer</p>
                    <p>Field Engineer</p>
                    <p>Planning</p>
                    <p>Work Executioner</p>
                    <p>Supervisor</p>

                </div>


                <div id="personalProjects">
                    <h2>Personal Projects</h2>


                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="All Projects" {...a11yProps(0)} />
                                <Tab label="Continuing" {...a11yProps(1)} />
                                <Tab label="Finished" {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>

                            <div className="projects">
                                <div className="project"><img src={ProjectPic} alt="Project" /></div>
                                <div className="project"><img src={ProjectPic} alt="Project" /></div>
                                <div className="project"><img src={ProjectPic} alt="Project" /></div>
                                <div className="project"><img src={ProjectPic} alt="Project" /></div>
                                <div className="project"><img src={ProjectPic} alt="Project" /></div>
                                <div className="project"><img src={ProjectPic} alt="Project" /></div>
                            </div>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <div className="projects">
                                <div className="project"><img src={ProjectPic} alt="Project" /></div>
                                <div className="project"><img src={ProjectPic} alt="Project" /></div>
                                <div className="project"><img src={ProjectPic} alt="Project" /></div>
                                <div className="project"><img src={ProjectPic} alt="Project" /></div>
                            </div>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            <div className="projects">
                                <div className="project"><img src={ProjectPic} alt="Project" /></div>
                                <div className="project"><img src={ProjectPic} alt="Project" /></div>
                            </div>
                        </CustomTabPanel>
                    </Box>

                </div>

            </div>
            <Footer />

        </div>
    )
}

export default AboutFounder