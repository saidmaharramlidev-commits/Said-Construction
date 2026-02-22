import Blog from "../components/Blog"
import Companies from "../components/Companies"
import Features from "../components/Features"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Middle from "../components/Middle"
import Services from "../components/Services"

function Home() {
    return (
        <>
            <Hero />
            <Middle />
            <Services />
            <Blog />
            <Features />
            <Companies />
            <Footer />


        </>
    )
}

export default Home