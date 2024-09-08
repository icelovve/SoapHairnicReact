/* eslint-disable jsx-a11y/alt-text */
const Products = () => {
    const productData = [
        { id: 1, img: "assets/img/product-1.png", name: "Hair Shining Shampoo", price: "$99.99" },
        { id: 2, img: "assets/img/product-2.png", name: "Anti-dandruff Shampoo", price: "$99.99" },
        { id: 3, img: "assets/img/product-1.png", name: "Anti Hair Fall Shampoo", price: "$99.99" },
        { id: 4, img: "assets/img/product-2.png", name: "Hair Growing Shampoo", price: "$99.99" },
        { id: 5, img: "assets/img/product-1.png", name: "Hair Shining Shampoo", price: "$99.99" },
        { id: 6, img: "assets/img/product-2.png", name: "Anti-dandruff Shampoo", price: "$99.99" },
        { id: 7, img: "assets/img/product-1.png", name: "Anti Hair Fall Shampoo", price: "$99.99" },
        { id: 8, img: "assets/img/product-2.png", name: "Hair Growing Shampoo", price: "$99.99" }
    ];

    const renderProduct = (product, delay) => (
        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay={`${delay}s`} key={product.id}>
            <div className="product-item text-center border h-100 p-4">
                <img className="img-fluid mb-4" src={product.img} alt />
                <div className="mb-2">
                    {[...Array(5)].map((_, i) => (
                        <small className="fa fa-star text-primary" key={i} />
                    ))}
                    <small>(99)</small>
                </div>
                <a href className="h6 d-inline-block mb-2">{product.name}</a>
                <h5 className="text-primary mb-3">{product.price}</h5>
                <a href className="btn btn-outline-primary px-3">Add To Cart</a>
            </div>
        </div>
    );

    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
                    <h1 className="text-primary mb-3"><span className="fw-light text-dark">Our Natural</span> Hair Products</h1>
                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
                </div>
                <div className="row g-4">
                    {productData.map((product, index) => renderProduct(product, 0.1 + index * 0.2))}
                    <div className="col-12 text-center">
                        <a className="btn btn-primary py-2 px-4" href>Load More Products</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
