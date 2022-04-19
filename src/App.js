// == Import
import { Routes, Route } from 'react-router-dom';

import './styles/index.scss';

import Layout from 'src/components/Layout';
import ScrollTop from 'src/components/ScrollTop';
import {
  Home,
  About,
  Portfolio,
} from './pages';

// == Composant
const App = () => (
  <div className="app">
    <ScrollTop />
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} exact />
      </Routes>
    </Layout>
  </div>
);

// == Export
export default App;
