import { useSelector } from 'react-redux';

import './style.scss';

import Socials from '../../Socials';

const Contact = () => {
  const { element } = useSelector((state) => state.modals);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submit');
  };

  if (element !== 'contact') return null;

  return (
    <section className="contact">

      <div className="contact__form-container">
        <h1 className="contact__title">Contact me</h1>

        <p className="contact__text">Feel free to reach out if you're looking for a developer, have a question, or just want to connect:</p>

        <form
          className="contact__form"
          onSubmit={handleSubmit}
        >

          {/* E-mail */}
          <div className="contact__form__labels">
            <label htmlFor="contact__form__email">
              Your email address <span>*</span>
            </label>
          </div>

          <div>
            <input
              required
              id="contact__form__email"
              className="contact__form__email"
              type="text"
            />
          </div>

          {/* Message */}
          <div className="contact__form__labels">
            <label htmlFor="contact__form__message">
              Your message <span>*</span>
            </label>
          </div>

          <div>
            <input
              id="contact__form__message"
              className="contact__form__message"
              type="text"
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
