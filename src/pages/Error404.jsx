import { Link } from "react-router-dom"
import Layout from "../components/layout/Layout"
import Newsletter from "../components/shared/Newsletter"

const Error404 = () => {
    return (
      <Layout title="Error 404">
        <div class="container-fluid bg-primary hero-header mb-5">
        <div class="container text-center">
            <h1 class="display-4 text-white mb-3 animated slideInDown">404 Error</h1>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center mb-0 animated slideInDown">
                    <li class="breadcrumb-item"><Link class="text-white" to="/">Home</Link></li>
                    <li class="breadcrumb-item"><Link class="text-white" href="#">Pages</Link></li>
                    <li class="breadcrumb-item text-white active" aria-current="page">404 Error</li>
                </ol>
            </nav>
        </div>
    </div>

    <Error404 />
    <Newsletter />
      </Layout>
    )
}

export default Error404