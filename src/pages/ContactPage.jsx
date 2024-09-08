/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import ContactInto from '../components/shared/ContactInto'
import Contact from '../components/shared/Contact'
import Newsletter from '../components/shared/Newsletter'

const ContactPage = () => {
    return (
        <Layout title='Contact'>
            <div className="container-fluid bg-primary hero-header mb-5">
                <div className="container text-center">
                    <h1 className="display-4 text-white mb-3 animated slideInDown">Contact</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center mb-0 animated slideInDown">
                            <li class="breadcrumb-item"><Link class="text-white" to="/">Home</Link></li>
                            <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Contact</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <ContactInto />
            <Contact />
            <Newsletter />

        </Layout>
    )
}

export default ContactPage