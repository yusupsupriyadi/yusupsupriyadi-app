import React from 'react'

function Portfolio() {
    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section-title">Portfolio</h2>
            <div className="portfolio__container bd-grid">
                <div className="portfolio__img">
                    <img src="images/market.webp" />
                    <div className="portfolio__link">
                        <a href="market.html" className="portfolio__link-name">View details</a>
                    </div>
                </div>
                <div className="portfolio__img">
                    <img src="images/work1.webp" />
                    <div className="portfolio__link">
                        <a href="ppdb.html" className="portfolio__link-name">View details</a>
                    </div>
                </div>
                <div className="portfolio__img">
                    <img src="images/design.webp" />
                    <div className="portfolio__link">
                        <a href="design.html" className="portfolio__link-name">View details</a>
                    </div>
                </div>
                <div className="portfolio__img">
                    <img src="images/backend.webp" />
                    <div className="portfolio__link">
                        <a href="backend.html" className="portfolio__link-name">View details</a>
                    </div>
                </div>
                <div className="portfolio__img">
                    <img src="images/flutter.webp" />
                    <div className="portfolio__link">
                        <a href="flutter.html" className="portfolio__link-name">View details</a>
                    </div>
                </div>
                <div className="portfolio__img">
                    <img src="images/react.webp" />
                    <div className="portfolio__link">
                        <a href="react.html" className="portfolio__link-name">View details</a>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Portfolio