/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
const Blog = () => {
    const blogs = [
        {
            id: 1,
            title: "Foods that are good for your hair growing",
            image: "assets/img/blog-1.jpg",
            views: 9999,
            comments: 9999,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat."
        },
        {
            id: 2,
            title: "How to take care of hair naturally",
            image: "assets/img/blog-2.jpg",
            views: 9999,
            comments: 9999,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat."
        },
        {
            id: 3,
            title: "How to use our natural & organic shampoo",
            image: "assets/img/blog-3.jpg",
            views: 9999,
            comments: 9999,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat."
        }
    ];

    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
                    <h1 className="text-primary mb-3">
                        <span className="fw-light text-dark">From Our</span> Blog Articles
                    </h1>
                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
                </div>
                <div className="row g-4">
                    {blogs.map((blog, index) => (
                        <div key={blog.id} className={`col-md-6 col-lg-4 wow fadeIn`} data-wow-delay={`${0.1 + index * 0.2}s`}>
                            <div className="blog-item border h-100 p-4">
                                <img className="img-fluid mb-4" src={blog.image} alt />
                                <a href="#" className="h5 lh-base d-inline-block">{blog.title}</a>
                                <div className="d-flex text-black-50 mb-2">
                                    <div className="pe-3">
                                        <small className="fa fa-eye me-1" />
                                        <small>{blog.views} Views</small>
                                    </div>
                                    <div className="pe-3">
                                        <small className="fa fa-comments me-1" />
                                        <small>{blog.comments} Comments</small>
                                    </div>
                                </div>
                                <p className="mb-4">{blog.description}</p>
                                <a href="#" className="btn btn-outline-primary px-3">Read More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog;
