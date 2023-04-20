import React from 'react'

function Contact() {
    return (
        <section className="contact section" id="contact">
            <h2 className="section-title">Contact</h2>
            <div className="contact__container bd-grid">
                <div className="contact__info">
                    <h3 className="contact__subtitle">EMAIL</h3>
                    <span className="contact__text">yusupsupriyadistudio@gmail.com</span>
                    <h3 className="contact__subtitle">ADRESS</h3>
                    <span className="contact__text">Jawa Barat, Indonesia</span>
                </div>
                <div className="contact__form">
                    <div className="contact__inputs">
                        <input id="name" name="name" type="text" placeholder="Name" className="contact__input" />
                        <input id="email" name="email" type="mail" placeholder="Email" className="contact__input" />
                    </div>
                    <textarea id="body-email" name="email_body" cols={0} rows={10} className="contact__input" defaultValue={""} />
                    <button id="btn-send-email" className="contact__button">Send</button>
                </div>
            </div>
        </section>

    )
}

export default Contact