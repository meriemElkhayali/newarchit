import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export default function Contact() {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_n4n83e9', 'template_u4bhekd', form.current, '5E_uW6tSp4X1jNcOG')
      .then(
        (result) => {
          console.log(result.text);
          console.log('Message sent');
          setIsSuccess(true);
          setError(null);
          // Réinitialisez le formulaire si nécessaire
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setIsSuccess(false);
          setError('Une erreur s\'est produite lors de l\'envoi du message. Veuillez réessayer plus tard.');
        }
      );
  };

  return (
    <div id="contact">
         {isSuccess && (
        <div  className="alert alert-success alert-dismissible fade show position-fixed top-0 start-50 translate-middle-x"
        role="alert"
        style={{ maxWidth: '500px' }}>
          <strong>Succès!</strong>  message  envoyé avec succès.
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={() => setIsSuccess(false)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
      <div className="intro">
        <h1>Contactez Nous!</h1>
        <p>Sté Abdo Archi Nord </p>
        <br />
      </div>
      <div className="contact-in">
        <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1110.9078069938666!2d-5.813048110426367!3d35.77207167575895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDQ2JzIxLjMiTiA1wrA0OCc0My4wIlc!5e0!3m2!1sfr!2sma!4v1701171333729!5m2!1sfr!2sma"
          width="100%"
          height="auto"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe> 
 <p className='adrs'>Av.La Marche Verte Résidence Iman N°3 BUR N°14-Tanger</p>
<p className='adrs' style={{ paddingBottom:"15px" }}>شارع المسيرة الخضراء اقامة ايمان رقم 3 مكتب رقم 14 طنجة</p>

        </div>
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              placeholder="Votre nom"
              className="contact-form-txt" required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Votre adresse e-mail"
              className="contact-form-txt" required
            />
            <textarea
              name="message"
              placeholder="Votre message"
              className="contact-form-txtarea" required
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input type="submit" value="Envoyer" className="contact-form-btn" />
          </form>
        </div>
      </div>
    </div>
  );
}
