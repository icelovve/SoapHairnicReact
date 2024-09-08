const ContactInfo = () => {
    const infoItems = [
        { icon: "fa-map-marker-alt", title: "Office Address", detail: "123 Street, New York, USA", delay: "0.1s" },
        { icon: "fa-phone-alt", title: "Call Us", detail: "+012 345 67890", delay: "0.3s" },
        { icon: "fa-envelope", title: "Mail Us", detail: "info@example.com", delay: "0.5s" }
    ];

    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="row g-4">
                    {infoItems.map((item, index) => (
                        <div key={index} className={`col-lg-4 wow fadeIn`} data-wow-delay={item.delay}>
                            <div className="contact-info-item position-relative bg-primary text-center p-3">
                                <div className="border py-5 px-3">
                                    <i className={`fa ${item.icon} fa-3x text-dark mb-4`} />
                                    <h5 className="text-white">{item.title}</h5>
                                    <h5 className="fw-light text-white">{item.detail}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;
