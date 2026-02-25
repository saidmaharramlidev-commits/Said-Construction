import AboutHero from "../AboutComps/AboutHero"
import Navbar from "../components/Navbar"
import { useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
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




















function ServicesPage() {



  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(event)
    setValue(newValue);
  };
  return (
    <div id="servicesPage">
      <Navbar />
      <AboutHero header="Services" url="Home > Services" />



      <div id="container">
        <Box sx={{ width: '100%', marginTop: "50px" }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab className="tab" label="Designing" {...a11yProps(0)} sx={{
                "@media (max-width:600px)": {
                  fontSize: "0.6rem",
                  width: "80px",
                },
              }} />
              <Tab className="tab" label="Construction and İnstallation" {...a11yProps(1)} sx={{
                "@media (max-width:600px)": {
                  fontSize: "0.6rem",
                  width: "80px",
                },
              }} />
              <Tab className="tab" label="Service" {...a11yProps(2)} sx={{
                "@media (max-width:600px)": {
                  fontSize: "0.6rem",
                  width: "80px",
                },
              }} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>

            <div className="services">
              <div className="service">
                <h3>Demolition</h3>
                <p>
                  We provide architectural and master plan solutions for aesthetic, functional and environmentally friendly projects.</p>
              </div>
              <div className="service">
                <h3>Excavation and Piling</h3>
                <p>

                  We provide precise excavation and reliable piling services for durable foundations.</p>
              </div>
              <div className="service">
                <h3>Formwork and Reinforced Concrete</h3>
                <p>

                  We perform quality formwork and reinforced concrete work for strong and long-lasting structures.</p>
              </div>
              <div className="service">
                <h3>Plaster-Masonry</h3>
                <p>

                  We perform quality formwork and reinforced concrete work for strong and long-lasting structures.</p>
              </div>
              <div className="service">
                <h3>Facade</h3>
                <p>

                  We provide quality facade work that gives your buildings an aesthetic and durable appearance.</p>
              </div>
              <div className="service">
                <h3>Electricity-Lighting</h3>
                <p>

                  We provide perfect lighting with safe and efficient electrical and lighting systems.</p>
              </div>
              <div className="service">
                <h3>Ventilation Systems</h3>
                <p>

                  We provide efficient and reliable ventilation solutions for a healthy and comfortable environment.</p>
              </div>
              <div className="service">
                <h3>Interior Decoration</h3>
                <p>

                  We provide exquisite interior decoration and design solutions for tasteful and functional interiors.</p>
              </div>
            </div>
          </CustomTabPanel>


          <CustomTabPanel value={value} index={1}>
            <div className="services">
              <div className="service">
                <h3>Demolition</h3>
                <p>
                  We provide architectural and master plan solutions for aesthetic, functional and environmentally friendly projects.</p>
              </div>
              <div className="service">
                <h3>Excavation and Piling</h3>
                <p>

                  We provide precise excavation and reliable piling services for durable foundations.</p>
              </div>
              <div className="service">
                <h3>Electricity-Lighting</h3>
                <p>

                  We provide perfect lighting with safe and efficient electrical and lighting systems.</p>
              </div>

            </div>
          </CustomTabPanel>


          <CustomTabPanel value={value} index={2}>
            <div className="services">
            </div>
          </CustomTabPanel>
        </Box>
      </div>

      <Footer />

    </div>
  )
}

export default ServicesPage