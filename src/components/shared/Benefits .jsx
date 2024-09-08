/* eslint-disable jsx-a11y/alt-text */
const Benefits = () => {
    const benefits = [
        { id: 1, title: "Natural & Organic", description: "Lorem ipsum dolor sit amet adipiscing elit aliquet." },
        { id: 2, title: "Anti Hair Fall", description: "Lorem ipsum dolor sit amet adipiscing elit aliquet." },
        { id: 3, title: "Anti-dandruff", description: "Lorem ipsum dolor sit amet adipiscing elit aliquet." },
        { id: 4, title: "No Internal Side Effect", description: "Lorem ipsum dolor sit amet adipiscing elit aliquet." },
        { id: 5, title: "No Skin Irritation", description: "Lorem ipsum dolor sit amet adipiscing elit aliquet." },
        { id: 6, title: "No Artificial Smell", description: "Lorem ipsum dolor sit amet adipiscing elit aliquet." }
    ];

    const renderBenefit = (benefit) => (
        <div className="col-12 d-flex" key={benefit.id}>
            <div className="btn-square rounded-circle border flex-shrink-0" style={{ width: 80, height: 80 }}>
                <i className="fa fa-check fa-2x text-primary" />
            </div>
            <div className="ps-3">
                <h5>{benefit.title}</h5>
                <hr className="w-25 bg-primary my-2" />
                <span>{benefit.description}</span>
            </div>
        </div>
    );

    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
                    <h1 className="text-primary mb-3">
                        <span className="fw-light text-dark">Best Benefits Of Our</span> Natural Hair Shampoo
                    </h1>
                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
                </div>
                <div className="row g-4 align-items-center">
                    <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                        <div className="row g-5">
                            {benefits.slice(0, 3).map(renderBenefit)}
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                        <img className="img-fluid animated pulse infinite" src="assets/img/shampoo.png" />
                    </div>
                    <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                        <div className="row g-5">
                            {benefits.slice(3).map(renderBenefit)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Benefits;
