import DocumentTitle from 'react-document-title'
import Footer from '../shared/Footer'
import Navbar from '../shared/Navbar';

const Layout = ({children , title = "Home"}) => {
    return (
        <>
            <DocumentTitle title = {title + ' | Hairnic Natural & OrganicHair Shampoo'} />
            <div className='d-flex flex-column min-vh-100'>
                <header>
                    <Navbar />
                </header>
                <main  main id="main" className="main flex-grow-1" >
                    {children}
                </main>
                <footer id="footer" className="footer bg-light text-center">
                    <Footer />
                </footer>
            </div>
            
        </>
    )
}

export default Layout