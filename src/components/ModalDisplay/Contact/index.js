import { useSelector } from 'react-redux';
import { useRef } from 'react';

import emailjs from '@emailjs/browser';

import './style.scss';

import Socials from '../../Socials';

const Contact = () => {
  const { element } = useSelector((state) => state.modals);
  const form = useRef();

  // EmailJS configuration
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_uw4ntbv',
      'template_dbd3cdd',
      form.current,
      'ohBoB_tK8fjW5dWhD',
    )
      .then((res) => {
        console.log(res.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  if (element !== 'contact') return null;

  return (
    <section className="contact">

      <div className="contact__form-container">

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

      </div>

      <Socials />
    </section>
  );
};

export default Contact;
