import React from 'react'

function About() {
    return (
        <section className="about section" id="about">
            <h2 className="section-title">About</h2>
            <div className="about__container bd-grid">
                <div className="about__img">
                    <img src="images/perfil.png"/>
                </div>
                <div>
                    <h2 className="about__subtitle">I am Yusup Supriyadi</h2>
                    <span className="about__profession">Frontend Web Developer</span>
                    <p className="about__text">
                        I am experienced with Laravel and Next.js<br />
                        I have experience as an intern at <span><a href="https://kejar.id/" style={{ color: '#5361ff' }}>Kejar.Id</a></span>
                    </p><div className="about__social">
                        <a href="https://www.linkedin.com/in/yusup-supriyadi-8bb37a187" className="about__social-icon"><i className="bx bxl-linkedin" /></a>
                        <a href="https://github.com/yusupsupriyadi" className="about__social-icon"><i className="bx bxl-github" /></a>
                        <a href="https://dribbble.com/YusupStudio" className="about__social-icon"><i className="bx bxl-dribbble" /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About