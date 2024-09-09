import DocumentTitle from 'react-document-title';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';
import BackToTop from '../shared/BackToTop'
import 'animate.css';  

const Layout = ({ children, title = "Home" }) => {
    return (
        <>
            <DocumentTitle title={title + ' | Hairnic Natural & Organic Hair Shampoo'} />
            <div className='d-flex flex-column min-vh-100'>
                <header className="fixed-top animate__animated animate__bounceInDown">
                    <Navbar />
                </header>
                <main id="main" className="main flex-grow-1" style={{ paddingTop: '60px' }}>
                    {children}
                    <BackToTop />
                </main>
                <footer id="footer" className="footer bg-light text-center">
                    <Footer />
                </footer>
            </div>
        </>
    );
}

export default Layout;
