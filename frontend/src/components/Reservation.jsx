import React from 'react'
import { useState } from 'react';
import {createReservation} from '../api/ApiReservation';

function Reservation() {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [hour, setHour] = useState("");
    const [people, setPeople] = useState("");
    const [comment, setComment] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new URLSearchParams();
        formData.append("name", name);
        formData.append("date", date);
        formData.append("hour", hour);
        formData.append("people", people);
        formData.append("comment", comment);


        try {
            const response = await createReservation(formData);

            if (response.status === 201) {
                alert ("Votre réservation a bien été prise en compte");
                window.location.reload();
            }
            else {
                alert ("Une erreur est survenue, veuillez réessayer");
            }

        } catch (error) {
            console.error(error);
        }
    }


    return (
        <>
            <section className="reservation">
                <div className="reservation__container">
                    <div className="reservation__title">
                        <h1 className="reservation__title__title">L'escale Restaurant</h1>
                        <h1 className="reservation__title__text">Réserve une table en un clic</h1>
                    </div>
                    <div className="reservation__content">
                        <form className="reservation__form" onSubmit={handleSubmit}>
                            <div className="reservation__form-line">
                                <div className="reservation__form-input">
                                    <label className="reservation__form-input__label">Nombre de personnes</label>
                                    <input className="reservation__form-input__input" type="text" value={people} onChange={(e) => setPeople(e.target.value)} />
                                </div>
                                <div className="reservation__form-input">
                                    <label className="reservation__form-input__label">Date</label>
                                    <input className="reservation__form-input__input" type="date"  value={date} onChange={(e) => setDate(e.target.value)} />
                                </div>
                                <div className="reservation__form-input">
                                    <label className="reservation__form-input__label">Horaire</label>
                                    <input className="reservation__form-input__input" type="time" min="11:00" max="22:00"  value={hour} onChange={(e) => setHour(e.target.value)} />
                                </div>
                                <div className="reservation__form-input">
                                    <label className="reservation__form-input__label">Nom/Prénom</label>
                                    <input className="reservation__form-input__input" type="text"  value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                            </div>
                            <div className="reservation__form-input">
                                <label className="reservation__form-input__label">Informations complémentaires</label>
                                <textarea className="reservation__form-input__input" value={comment} onChange={(e) => setComment(e.target.value)} />
                            </div>
                            <div className="reservation__button">
                                <button className="button">Réserver la table</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Reservation