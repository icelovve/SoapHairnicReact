import { Link } from "react-router-dom"

/* eslint-disable jsx-a11y/anchor-is-valid */
const Navbar = () => {
  return (
    <div class="container-fluid sticky-top">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light p-0">
                <Link to="/" class="navbar-brand">
                    <h2 class="text-white">Hairnic</h2>
                </Link>
                <button type="button" class="navbar-toggler ms-auto me-0" data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto">
                        <Link to="/" class="nav-item nav-link">Home</Link>
                        <Link to="/about" class="nav-item nav-link">About</Link>
                        <Link to="/product" class="nav-item nav-link">Products</Link>
                        <Link to="/contact" class="nav-item nav-link">Contact</Link>
                    </div>
                    <a href="" class="btn btn-dark py-2 px-4 d-none d-lg-inline-block">Shop Now</a>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Navbar