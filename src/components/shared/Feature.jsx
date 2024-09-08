const Feature = () => {
    const features = [
        { icon: "fa-leaf", title: "100% Natural", delay: "0.1s" },
        { icon: "fa-tint-slash", title: "Anti Hair Fall", delay: "0.3s" },
        { icon: "fa-times", title: "Hypoallergenic", delay: "0.5s" }
    ];

    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="row g-4">
                    {features.map((feature, index) => (
                        <div key={index} className="col-lg-4 wow fadeIn" data-wow-delay={feature.delay}>
                            <div className="feature-item position-relative bg-primary text-center p-3">
                                <div className="border py-5 px-3">
                                    <i className={`fa ${feature.icon} fa-3x text-dark mb-4`} />
                                    <h5 className="text-white mb-0">{feature.title}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Feature;
