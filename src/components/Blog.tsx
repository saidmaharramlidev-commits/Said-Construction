import firstPic from "../assets/blogFirst.avif"
import secondPic from "../assets/blogSecond.jpg"
import thirdPic from "../assets/blogThird.webp"


function Blog() {
    return (
        <div id="mainBlog">
            <div id="container">
                <h1 >Blog</h1>
                <div id="blogs">
                    <div className="blog">
                        <img src={firstPic} alt="Blog" />
                        <p>Safety in Home Construction: From Design to Completion</p>
                        <div className="dateOfBlog">12.12.2025</div>
                    </div>
                    <div className="blog">
                        <img src={secondPic} alt="Blog" />
                        <p>Modern Architecture: New Trends and Innovations in the Construction Industry
                        </p>
                        <div className="dateOfBlog">11.01.2026</div>
                    </div>
                    <div className="blog">

                        <img src={thirdPic} alt="Blog" />
                        <p>Latest Technologies in Construction: Automation and Digital Solutions</p>
                        <div className="dateOfBlog">05.02.2025</div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Blog