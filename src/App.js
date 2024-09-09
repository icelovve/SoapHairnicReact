import AboutPage from './pages/AboutPage';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage'
import Error404 from './pages/Error404';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from './components/shared/ScrollToTop';


function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path='/' exact={true} element={<Home/>} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/product' element={<ProductsPage />} />
                <Route path='/contact' element={<ContactPage />} />

                {/* Error 404 */}
                <Route path='*' element={<Error404/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
