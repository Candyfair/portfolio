// == Import
import { Routes, Route } from 'react-router-dom';

import './styles/index.scss';

import Layout from 'src/components/Layout';
import ScrollTop from 'src/components/ScrollTop';
import ModalDisplay from './components/ModalDisplay';

import {
  Home,
  About,
  Portfolio,
  Orent,
} from './pages';

// == Composant
const App = () => (
  <div className="app">
    <ScrollTop />
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/orent" element={<Orent />} />
        <Route path="/about" element={<About />} exact />
      </Routes>
      <ModalDisplay />
    </Layout>
  </div>
);

// == Export
export default App;
