/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom"

const About = () => {
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <img className="img-fluid animated pulse infinite" src="assets/img/shampoo-1.png" />
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <h1 className="text-primary mb-4">Healthy Hair <span className="fw-light text-dark">Is A Symbol Of Our
                            Beauty</span></h1>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus, vitae porttitor purus nisl vitae purus. Praesent tristique odio ut rutrum pellentesque. Fusce eget molestie est, at rutrum est.</p>
                        <p className="mb-4">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no
                            labore lorem sit. Sanctus clita duo justo et tempor.</p>
                        <Link className="btn btn-primary py-2 px-4" to="/product">Shop Now</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About