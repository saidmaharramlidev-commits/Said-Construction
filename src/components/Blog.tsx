import { useDispatch } from "react-redux"
import firstPic from "../assets/blogFirst.avif"
import secondPic from "../assets/blogSecond.jpg"
import thirdPic from "../assets/blogThird.webp"
import { setBlog } from "../redux/counterSlice"
import { useNavigate } from "react-router-dom"


function Blog() {


    const dispatch = useDispatch()
    const navigate = useNavigate()




    return (
        <div id="mainBlog">
            <div id="container">
                <h1 >Blog</h1>
                <div id="blogs">
                    <div className="blog" onClick={() => {
                        dispatch(setBlog(1))
                        navigate("/blogs")

                    }}>
                        <img src={firstPic} alt="Blog" />
                        <p>Safety in Home Construction: From Design to Completion</p>
                        <div className="dateOfBlog">12.12.2025</div>
                    </div>
                    <div className="blog" onClick={() => {
                        dispatch(setBlog(2))
                        navigate("/blogs")

                    }}>
                        <img src={secondPic} alt="Blog" />
                        <p>Modern Architecture: New Trends and Innovations in the Construction Industry
                        </p>
                        <div className="dateOfBlog">11.01.2026</div>
                    </div>
                    <div className="blog" onClick={() => {
                        dispatch(setBlog(3))
                        navigate("/blogs")

                    }}>

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