import React from 'react'

function Footer() {
    return (
        <footer className="footer section">
            <div className="footer__container bd-grid">
                <div className="footer__data">
                    <h2 className="footer__title">YUSUP SUPRIYADI</h2>
                    <p className="footer__text">I'm Yusup supriyadi and this is my personal website</p>
                </div>
                <div className="footer__data">
                    <h2 className="footer__title">EXPLORE</h2>
                    <ul>
                        <li><a href="#home" className="footer__link">Home</a></li>
                        <li><a href="#about" className="footer__link">About</a></li>
                        <li><a href="#skills" className="footer__link">Skills</a></li>
                        <li><a href="#portfolio" className="footer__link">Portfolio</a></li>
                        <li><a href="#Contact" className="footer__link">Contact</a></li>
                    </ul>
                </div>
                <div className="footer__data">
                    <h2 className="footer__title">FOLLOW</h2>
                    <a href="https://www.instagram.com/yusufsryd/" className="footer__social"><i className="bx bxl-instagram" /></a>
                    <a href="https://dribbble.com/YusupStudio" className="footer__social"><i className="bx bxl-dribbble" /></a>
                </div>
            </div>
        </footer>

    )
}

export default Footer