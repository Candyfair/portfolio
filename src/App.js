// == Import
import { Routes, Route } from 'react-router-dom';

import './styles/index.scss';

import Layout from 'src/components/Layout';
import Home from 'src/pages/Home';
import Portfolio from 'src/pages/Portfolio';
import About from 'src/pages/About';

// == Composant
const App = () => (
  <div className="app">
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
