import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';

// Loader
import PuffLoader from 'react-spinners/PuffLoader';

// EmailJS
import emailjs from '@emailjs/browser';

import './style.scss';

import Socials from '../../Socials';

const Contact = () => {
  // EmailJS variables
  const MAIL_SERVICE = process.env.REACT_APP_MAIL_SERVICE;
  const MAIL_TEMPLATE = process.env.REACT_APP_MAIL_TEMPLATE;
  const MAIL_PUBLIC_KEY = process.env.REACT_APP_MAIL_PUBLIC_KEY;

  // Loader
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("hsl(178, 96%, 27%)");

  const [sent, setSent] = useState(false);

  // Get state to show contact modal
  const { element } = useSelector((state) => state.modals);
  const form = useRef();

  // EmailJS configuration
  const sendEmail = (e) => {
    e.preventDefault();

    // Loader
    setLoading(!loading);

    emailjs.sendForm(
      MAIL_SERVICE,
      MAIL_TEMPLATE,
      form.current,
      MAIL_PUBLIC_KEY,
    )
      .then((res) => {
        console.log(res.text);

        // Confirmation message
        setSent(true);
        // Stop loader
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  if (element !== 'contact') return null;

  return (
    <section className="contact">

      {/* Loader */}
      <div className="contact__loader">
        <PuffLoader
          color={color}
          loading={loading}
          size={60}
        />
      </div>

      <div className="contact__form-container">
        { !sent
          ? (
            <>
              <h1 className="contact__title">Contact me</h1>

              <p className="contact__text">Feel free to reach out if you're looking for a developer, have a question, or just want to connect:</p>
              <form
                ref={form}
                className="contact__form"
                onSubmit={sendEmail}
              >

                {/* E-mail */}
                <div className="contact__form__labels">
                  <p>
                    Your email address <span>*</span>
                  </p>
                </div>

                <div>
                  <input
                    required
                    id="email"
                    name="email"
                    className="contact__form__email"
                    type="text"
                  />
                </div>

                {/* Message */}
                <div className="contact__form__labels">
                  <p>
                    Your message <span>*</span>
                  </p>
                </div>

                <div>
                  <textarea
                    required
                    rows="5"
                    id="message"
                    name="message"
                    className="contact__form__message"
                  />
                </div>

                {/* Button */}
                <div>
                  <button
                    type="submit"
                    className="contact__form__button"
                  >
                    Send
                  </button>
                </div>
              </form>
            </>
          )
          : (
            <h1 className="contact__confirmation">Message sent!</h1>

          )}
      </div>

      <Socials />
    </section>
  );
};

export default Contact;
