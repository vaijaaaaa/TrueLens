import React, { useState, useEffect } from 'react';
import { Shield, Search, Brain, CheckCircle, AlertTriangle, Star, ArrowRight, Download, Globe, Database, Zap } from 'lucide-react';

function HowItWorksPage() {
  const [particles, setParticles] = useState([]);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const newParticles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 0.3 + 0.05,
    }));
    setParticles(newParticles);

    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        y: (particle.y + particle.speed) % 100,
      })));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      number: "01",
      title: "Content Detection",
      description: "TruLens automatically scans text content as you browse, identifying articles, social media posts, and news headlines.",
      icon: Search,
      details: [
        "Automatic content scanning",
        "Text extraction and parsing",
        "Context identification",
        "Source detection"
      ]
    },
    {
      number: "02", 
      title: "AI Analysis",
      description: "Our advanced AI algorithms analyze content structure, language patterns, and cross-reference with our knowledge base.",
      icon: Brain,
      details: [
        "Natural language processing",
        "Pattern recognition",
        "Semantic analysis",
        "Bias detection"
      ]
    },
    {
      number: "03",
      title: "Source Verification",
      description: "Cross-references information with trusted databases, fact-checking organizations, and verified news sources.",
      icon: Database,
      details: [
        "Multi-source verification",
        "Fact-checker database lookup",
        "Publisher credibility check",
        "Historical accuracy review"
      ]
    },
    {
      number: "04",
      title: "Real-time Results",
      description: "Displays credibility scores, warnings, and detailed analysis instantly through visual indicators and overlays.",
      icon: Zap,
      details: [
        "Instant credibility scoring",
        "Visual warning system",
        "Detailed analysis reports",
        "Confidence indicators"
      ]
    }
  ];

  const techSpecs = [
    {
      title: "Machine Learning Models",
      items: ["BERT-based NLP", "Transformer Networks", "Ensemble Methods", "Deep Learning"]
    },
    {
      title: "Data Sources",
      items: ["Fact-checking APIs", "News Databases", "Academic Papers", "Social Signals"]
    },
    {
      title: "Performance",
      items: ["<50ms Response Time", "99.7% Accuracy", "Real-time Processing", "Low Resource Usage"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden" style={{ fontFamily: 'Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif' }}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900/30"></div>
        
        {/* Floating Particles */}
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-green-500/20 animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        ))}
        
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 backdrop-blur-md bg-gray-900/50 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/30">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, sans-serif' }}>
              TruLens
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 pt-16 pb-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-green-300 to-green-500 bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, sans-serif' }}>
            How TruLens
            <br />
            <span className="text-green-500">Protects You</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            Discover the advanced AI technology behind TruLens and learn how we detect misinformation in real-time to keep you informed and protected.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="relative z-10 px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-green-400" style={{ fontFamily: 'Poppins, sans-serif' }}>
            The Detection Process
          </h2>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`flex items-center transition-all duration-500 ${activeStep === index ? 'scale-105' : ''}`}>
                <div className="flex-1">
                  <div className={`bg-gray-800/30 backdrop-blur-xl rounded-3xl p-8 border transition-all duration-300 ${
                    activeStep === index ? 'border-green-500/50 bg-gray-800/50' : 'border-gray-700/50'
                  }`}>
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                          activeStep === index 
                            ? 'bg-gradient-to-br from-green-600/40 to-green-800/40' 
                            : 'bg-gradient-to-br from-green-600/20 to-green-800/20'
                        }`}>
                          <step.icon className="w-10 h-10 text-green-400" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-4">
                          <span className="text-4xl font-bold text-green-500/50" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            {step.number}
                          </span>
                          <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            {step.title}
                          </h3>
                        </div>
                        
                        <p className="text-gray-300 mb-6 text-lg leading-relaxed" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                          {step.description}
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-3">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-center space-x-3">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span className="text-sm text-gray-400" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="flex-shrink-0 mx-8">
                    <ArrowRight className="w-8 h-8 text-green-500/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Step Navigation */}
          <div className="flex justify-center space-x-4 mt-12">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  activeStep === index ? 'bg-green-500' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="relative z-10 px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-400" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Technical Foundation
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {techSpecs.map((spec, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {spec.title}
                </h3>
                <div className="space-y-3">
                  {spec.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="relative z-10 px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-900/20 to-gray-800/30 backdrop-blur-xl rounded-3xl p-8 border border-green-700/30">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-green-400 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                See It In Action
              </h2>
              <p className="text-gray-300" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                Watch how TruLens analyzes content and provides real-time feedback
              </p>
            </div>
            
            {/* Mock Browser Window */}
            <div className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50">
              <div className="bg-gray-700/70 px-4 py-3 flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="flex-1 bg-gray-600/50 rounded px-3 py-1 mx-4">
                  <span className="text-xs text-gray-400">example-news-site.com</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-lg font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Sample News Article Headline
                  </h4>
                  <div className="flex items-center space-x-2 bg-green-600/30 px-3 py-1 rounded-full border border-green-500/50">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-green-400 font-medium">87% Credible</span>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                  This is where the article content would appear. TruLens analyzes the text in real-time...
                </p>
                
                <div className="bg-green-900/20 rounded-lg p-4 border border-green-700/30">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-green-400 mt-0.5" />
                    <div>
                      <h5 className="text-sm font-semibold text-green-300 mb-1">TruLens Analysis</h5>
                      <p className="text-xs text-green-300/80">
                        Content verified across 3 trusted sources. Publisher has strong credibility rating.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HowItWorksPage;