import Logo from "../assets/sliderLogo.jpg"
import Logo2 from "../assets/heroLogo.jpg"
import Pic from "../assets/heroConstructionComp.jpg"


function Companies() {
    return (
        <div id="mainCompanies">
            <div id="container">
                <h1 id="headerOfCompanies">Our Partners</h1>
                <div className="logo-slider">
                    <div className="logo-track">
                        <img src={Logo} />
                        <img src={Logo2} />
                        <img src={Logo} />
                        <img src={Logo2} />
                        <img src={Logo} />
                        <img src={Logo2} />
                        <img src={Logo} />
                        <img src={Logo2} />
                        <img src={Logo} />
                        <img src={Logo2} />
                    </div>
                </div>



            </div>
            <div id="picDiv">
                <img src={Pic} alt="Photo" />
                <div id="textDiv">
                    <h1>Our Goal is to Create Safe and Comfortable Spaces for You</h1>
                </div>
            </div>

        </div>
    )
}

export default Companies