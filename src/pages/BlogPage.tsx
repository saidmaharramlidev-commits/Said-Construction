import { useSelector } from "react-redux"
import AboutHero from "../AboutComps/AboutHero"
import Blog from "../components/Blog"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import type { RootState } from "../redux/store"
import Blog1 from "../components/Blog1"
import Blog2 from "../components/blog2"
import Blog3 from "../components/Blog3"

function BlogPage() {
    const { blog } = useSelector((state: RootState) => state.counter)




    return (
        <div id="mainBlogPage">
            <Navbar />
            <AboutHero header="Blog" url="Home > Blog" />
            {blog == 1 ? <Blog1 /> : ''}
            {blog == 2 ? <Blog2 /> : ''}
            {blog == 3 ? <Blog3 /> : ''}

            <Blog />
            <Footer />

        </div>
    )
}

export default BlogPage