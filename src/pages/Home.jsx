/* eslint-disable jsx-a11y/anchor-is-valid */
import Layout from "../components/layout/Layout"
import About from "../components/shared/About"
import Feature from "../components/shared/Feature"
import Hero from "../components/shared/Hero"
import Deal from "../components/shared/Deal"
import Benefits from "../components/shared/Benefits "
import HowToUse from "../components/shared/HowToUse"
import Product from "../components/shared/Product"
import Testimonial from "../components/shared/Testimonial"
import Blog from "../components/shared/Blog"
import Newsletter from "../components/shared/Newsletter"

const Home = () => {
    return (
        <Layout title="Home">
            <>
                <Hero />
                <Feature />
                <About />
                <Deal />
                <Benefits />
                <HowToUse />
                <Product />
                <Testimonial />
                <Blog />
                <Newsletter />
            </>
        </Layout>
    )
}

export default Home