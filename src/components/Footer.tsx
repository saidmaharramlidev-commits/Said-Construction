import Logo from "../assets/heroLogo.jpg"





function Footer() {
    return (
        <div id="mainFooter">
            <div id="container">
                <div id="topFooter">
                    <div id="foooterLogo">
                        <img src={Logo} alt="" />
                    </div>
                    <h2>Strong Foundations, High Goals!</h2>
                    <div id="endpointsFooter">
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Services</a>
                        <a href="">Projects</a>
                        <a href="">Partners</a>
                        <a href="">Blog</a>
                        <a href="">Contact</a>
                    </div>
                    <div id="contactThings">
                        <p>Somewhere in world</p>
                        <p>+12345789</p>
                    </div>

                </div>
                <div id="bootomFooter">
                    <p>Said Construction.All rights reserved.</p>

                </div>

            </div>

        </div>
    )
}

export default Footer