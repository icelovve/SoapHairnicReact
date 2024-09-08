/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom"
import Layout from "../components/layout/Layout"
import Products from "../components/shared/Products"
import Newsletter from "../components/shared/Newsletter"


const ProductsPage = () => {
  return (
    <Layout title="Products">
        <div class="container-fluid bg-primary hero-header mb-5">
            <div class="container text-center">
                <h1 class="display-4 text-white mb-3 animated slideInDown">Products</h1>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-center mb-0 animated slideInDown">
                        <li class="breadcrumb-item"><Link class="text-white" to="/">Home</Link></li>
                        <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                        <li class="breadcrumb-item text-white active" aria-current="page">Products</li>
                    </ol>
                </nav>
            </div>
        </div>

        <Products />
        <Newsletter />
    </Layout>
  )
}

export default ProductsPage