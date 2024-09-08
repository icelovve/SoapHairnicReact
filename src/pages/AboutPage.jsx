/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom"
import Layout from "../components/layout/Layout"
import Feature from "../components/shared/Feature"
import Benefits from "../components/shared/Benefits "
import Newsletter from "../components/shared/Newsletter"

const AboutPage = () => {
    return (
        <Layout title="About Us">
            <div className="container-fluid bg-primary hero-header mb-5">
                <div className="container text-center">
                    <h1 className="display-4 text-white mb-3 animated slideInDown">About Us</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center mb-0 animated slideInDown">
                            <li className="breadcrumb-item"><Link className="text-white" to="/">Home</Link></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Page</li>
                            <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <Feature />
            <Benefits />
            <Newsletter />
        </Layout>
    )
}

export default AboutPage