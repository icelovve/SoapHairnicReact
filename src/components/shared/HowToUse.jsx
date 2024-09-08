const HowToUse = () => {
    const steps = [
        { icon: "fa-home", title: "Wash Hair With Water", delay: "0.1s" },
        { icon: "fa-home", title: "Apply Shampoo On Hair", delay: "0.3s" },
        { icon: "fa-home", title: "Wait 5 Mins And Wash", delay: "0.5s" }
    ];

    return (
        <div className="container-fluid how-to-use bg-primary my-5 py-5">
            <div className="container text-white py-5">
                <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
                    <h1 className="text-white mb-3"><span className="fw-light text-dark">How To Use Our</span> Natural &amp; Organic <span className="fw-light text-dark">Hair Shampoo</span></h1>
                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
                </div>
                <div className="row g-5">
                    {steps.map((step, index) => (
                        <div key={index} className="col-lg-4 text-center wow fadeIn" data-wow-delay={step.delay}>
                            <div className="btn-square rounded-circle border mx-auto mb-4" style={{ width: 120, height: 120 }}>
                                <i className={`fa ${step.icon} fa-3x text-dark`} />
                            </div>
                            <h5 className="text-white">{step.title}</h5>
                            <hr className="w-25 bg-light my-2 mx-auto" />
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HowToUse;
