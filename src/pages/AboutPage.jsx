/* eslint-disable jsx-a11y/anchor-is-valid */
import Layout from "../components/layout/Layout"
import Feature from "../components/shared/Feature"
import Benefits from "../components/shared/Benefits "
import Newsletter from "../components/shared/Newsletter"
import HeroSection from "../components/shared/HeroSection"

const AboutPage = () => {
    return (
        <Layout title="About Us">
            <HeroSection hero="About Us" />
            <Feature />
            <Benefits />
            <Newsletter />
        </Layout>
    )
}

export default AboutPage