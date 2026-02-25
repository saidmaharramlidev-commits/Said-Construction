import pic from "../assets/aboutHeroSec.jpg"

export interface heroProps {
    header: string,
    url: string,
}


function AboutHero({ header, url }: heroProps) {
    return (
        <div id="mainAbout">
            <div id="heroOfAbout">
                <img src={pic} alt="" />
                <div id="infoOfHero">
                    <h1>{header}</h1>
                    <p>{url}</p>
                </div>
            </div>


        </div>
    )
}

export default AboutHero