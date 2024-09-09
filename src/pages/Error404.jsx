import Layout from "../components/layout/Layout"
import Newsletter from "../components/shared/Newsletter"
import Error from "../components/shared/Error"
import HeroSection from "../components/shared/HeroSection"

const Error404 = () => {
    return (
        <Layout title="404 ERROR">
            <HeroSection hero="404 ERROR" />
            <Error />
            <Newsletter />
        </Layout>
    )
}

export default Error404