/* eslint-disable jsx-a11y/anchor-is-valid */
import Layout from '../components/layout/Layout'
import ContactInto from '../components/shared/ContactInto'
import Contact from '../components/shared/Contact'
import Newsletter from '../components/shared/Newsletter'
import HeroSection from '../components/shared/HeroSection'

const ContactPage = () => {
    return (
        <Layout title='Contact'>
            <HeroSection hero="Contact" />
            <ContactInto />
            <Contact />
            <Newsletter />

        </Layout>
    )
}

export default ContactPage