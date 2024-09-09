import { Link } from "react-router-dom"

const HeroSection = ({hero}) => {
    return (
        <div className="container-fluid bg-primary hero-header mb-5">
        <div className="container text-center">
            <h1 className="display-4 text-white mb-3 animated slideInDown">{hero}</h1>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center mb-0 animated slideInDown">
                    <li className="breadcrumb-item"><Link className="text-white" to="/">Home</Link></li>
                    <li className="breadcrumb-item text-white active" aria-current="page">Page</li>
                    <li className="breadcrumb-item text-white active" aria-current="page">{hero}</li>
                </ol>
            </nav>
        </div>
    </div>
    )
}

export default HeroSection