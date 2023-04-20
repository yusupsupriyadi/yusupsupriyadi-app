function CTA() {
    return (
        <section className="home" id="home">
            <div className="home__container bd-grid">
                <h1 className="home__title font-bold" data-aos="fade-right"><span>HE</span><br />LLO.</h1>
                <div className="home__scroll">
                    <a href="#about" className="home__scroll-link"><i className="bx bx-up-arrow-alt font-semibold" />Scroll down</a>
                </div>
                <img src="images/perfil.png" data-aos="fade-left" className="home__img" />
            </div>
        </section>
    )
}

export default CTA;
