import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import FeaturesPage from './Components/FeaturesPage';
import HowItWorksPage from './Components/HowItWorksPage';
import TruLensContactPage from './Components/TruLensContactPage';
import TruLensDownloadPage from './Components/TruLensDownloadPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/download" element={<TruLensDownloadPage />} />
        <Route path="/contact" element={<TruLensContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
