import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/neon-tech.css';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { LandingPage } from './pages/LandingPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { DemoPage } from './pages/DemoPage';
import { ImpactPage } from './pages/ImpactPage';

function App() {
  const [judgeMode, setJudgeMode] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation judgeMode={judgeMode} setJudgeMode={setJudgeMode} />
        <Routes>
          <Route path="/" element={<LandingPage judgeMode={judgeMode} />} />
          <Route path="/features" element={<FeaturesPage judgeMode={judgeMode} />} />
          <Route path="/demo" element={<DemoPage judgeMode={judgeMode} />} />
          <Route path="/impact" element={<ImpactPage judgeMode={judgeMode} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
