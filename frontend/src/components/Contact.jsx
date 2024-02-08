import React, {useState} from 'react'

function Contact() {

    return (
        <>
            <section className="contact">
                <div className="contact__container">
                    <div className="contact__content-left">
                    </div>
                    <div className="contact__content-right">
                        <h1 className="contact__content-title">Contactez nous</h1>
                        <form className="contact__form" method="POST">
                            <div className="contact__form-line">
                                <div className="contact__form-input">
                                    <label className="contact__form-input__label">Nom</label>
                                    <input className="contact__form-input__input" type="text" name="nom" required/>
                                </div>
                                <div className="contact__form-input">
                                    <label className="contact__form-input__label">Prénom</label>
                                    <input className="contact__form-input__input" type="text" name="prenom" required/>
                                </div>
                            </div>
                            <div className="contact__form-input">
                                <label className="contact__form-input__label">Email</label>
                                <input className="contact__form-input__input" type="email" name="email" required/>
                            </div>
                            <div className="contact__form-input">
                                <label className="contact__form-input__label">Message</label>
                                <textarea className="contact__form-input__input" type="text" name="message" required/>
                            </div>
                            <div className="contact__content-right__button">
                                <button className="button" type="submit">Envoyer</button>
                            </div>
                        </form>

                    </div>
                </div>

            </section>
        </>
    )
}

export default Contact