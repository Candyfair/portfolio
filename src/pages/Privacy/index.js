import './style.scss';

const Privacy = () => (
  <section className="privacy">
    <h1 className="privacy__title">Privacy Policy</h1>

    <p className="privacy__text">
      This Privacy Policy explains how I use cookes and similar technologies to recognize you when you visit my website at https://www.candicefairand.com.  
    </p>

    <h2 className="privacy__subtitle">What are cookies?</h2>
    <p className="privacy__text">
      Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their website work, or to work more efficiently, as well as to provide reporting information. 
    </p>

    <p className="privacy__text">
      Cookies set by the website owner are called "first party cookies". Cookies set by parties other than the website owner are called "third party cookies". Third party cookies enable third party features or functionality to be provided on or through the website (e.g. like advertising, interactive content and analytics). The parties that set these third party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites. 
    </p>

    <h2 className="privacy__subtitle">Why do I use cookies?</h2>
    <p className="privacy__text">
      I use first and thirs party cookies for several reasons. Some cookies are required for technical reasons in order for my website to operate, and I refer to these as "essential" or "strictly necessary" cookies. The third party company <a href="https://statcounter.com" className="privacy__link" target="_blank" rel="noreferrer noopener">Statcounter</a> serves cookies through my website for traffic analytics, and enables me to track and target the interests of my users to enhance the experience on my website.
    </p>

    <h2 className="privacy__subtitle">How can you opt out?</h2>
    <p className="privacy__text">
      You can opt out of having cookies from Statcounter placed on your device by visiting <a href="https://statcounter.com/about/set-refusal-cookie/?delete=1" className="privacy__link" target="_blank" rel="noreferrer noopener">this page</a> and following the instructions. 
    </p>

  </section>
);

export default Privacy;
