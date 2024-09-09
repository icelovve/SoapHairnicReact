import Layout from "../components/layout/Layout";
import Products from "../components/shared/Products";
import Newsletter from "../components/shared/Newsletter";
import HeroSection from "../components/shared/HeroSection";

const ProductsPage = () => {
    return (
        <Layout title="Products">
            <HeroSection hero="Products" />
            <Products />
            <Newsletter />
        </Layout>
    );
};

export default ProductsPage;
