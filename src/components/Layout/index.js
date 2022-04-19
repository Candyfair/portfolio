import './style.scss';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

const Layout = ({ children }) => (
  <div className="global">
    <header>
      <Header />
    </header>

    <main className="content">
      {children}
    </main>

    <footer className="footer">
      <Footer />
    </footer>
  </div>
);

export default Layout;
