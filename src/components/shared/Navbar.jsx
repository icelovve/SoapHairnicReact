/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

const Navbar = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" 
        });
    };

    return (
        <div className="container-fluid sticky-top">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light p-0">
                    <Link to="/" className="navbar-brand" onClick={handleScrollToTop}>
                        <h2 className="text-white">Hairnic</h2>
                    </Link>
                    <button type="button" className="navbar-toggler ms-auto me-0" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto">
                            <Link to="/" className="nav-item nav-link">Home</Link>
                            <Link to="/about" className="nav-item nav-link">About</Link>
                            <Link to="/product" className="nav-item nav-link">Products</Link>
                            <Link to="/contact" className="nav-item nav-link">Contact</Link>
                        </div>
                        <a href="#" className="btn btn-dark py-2 px-4 d-none d-lg-inline-block">Shop Now</a>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
