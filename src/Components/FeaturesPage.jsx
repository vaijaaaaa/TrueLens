import React, { useState, useEffect } from 'react';
import { Shield, CheckCircle, AlertTriangle, Star, Zap, Eye, Brain, Lock, Globe, Users, Menu, X } from 'lucide-react';

function FeaturesPage() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
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

  const features = [
    {
      icon: Brain,
      title: "Advanced AI Analysis",
      description: "Our machine learning algorithms analyze content structure, language patterns, and cross-reference multiple databases to detect potential misinformation.",
      details: ["Natural Language Processing", "Pattern Recognition", "Sentiment Analysis", "Content Structure Evaluation"]
    },
    {
      icon: Zap,
      title: "Real-Time Detection",
      description: "Get instant feedback as you browse. TruLens works in the background, analyzing content the moment it loads on your screen.",
      details: ["Instant Analysis", "Background Processing", "Live Updates", "Zero Delay Detection"]
    },
    {
      icon: Eye,
      title: "Visual Credibility Indicators",
      description: "Clear, color-coded indicators and badges make it easy to understand the credibility of any content at a glance.",
      details: ["Color-Coded System", "Credibility Scores", "Trust Badges", "Visual Warnings"]
    },
    {
      icon: Globe,
      title: "Multi-Source Verification",
      description: "Cross-references information with trusted news sources, fact-checking organizations, and academic databases worldwide.",
      details: ["Global Database Access", "Trusted Source Network", "Academic References", "Real-time Cross-checking"]
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "Your browsing data stays private. TruLens processes information locally and doesn't track your personal browsing habits.",
      details: ["Local Processing", "No Data Collection", "Encrypted Communications", "Anonymous Usage"]
    },
    {
      icon: Users,
      title: "Community Reporting",
      description: "Leverage the power of community-driven fact-checking with user reports and collaborative verification systems.",
      details: ["User Contributions", "Collaborative Verification", "Community Moderation", "Crowdsourced Accuracy"]
    }
  ];

  const stats = [
    { number: "99.7%", label: "Accuracy Rate", description: "Based on verified test cases" },
    { number: "2M+", label: "Articles Analyzed", description: "Daily content verification" },
    { number: "500K+", label: "Active Users", description: "Trusted by professionals worldwide" },
    { number: "15ms", label: "Average Response", description: "Lightning-fast analysis" }
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
        
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
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
            Powerful Features for
            <br />
            <span className="text-green-500">Truth Detection</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            Discover how TruLens uses cutting-edge AI technology to protect you from misinformation and help you navigate the digital world with confidence.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 text-center hover:border-green-500/50 transition-all duration-300">
                <div className="text-3xl font-bold text-green-400 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-white mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-gray-800/30 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600/30 to-green-800/30 rounded-2xl flex items-center justify-center group-hover:from-green-600/40 group-hover:to-green-800/40 transition-all flex-shrink-0">
                    <feature.icon className="w-8 h-8 text-green-400" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                      {feature.description}
                    </p>
                    
                    <div className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
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
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlight */}
      <section className="relative z-10 px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-green-900/20 to-gray-800/30 backdrop-blur-xl rounded-3xl p-8 border border-green-700/30">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-green-400 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Chrome Extension Integration
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                Seamlessly integrated into your browsing experience. TruLens works with all major websites and social media platforms.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-green-400" />
                </div>
                <h4 className="font-semibold text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Universal Compatibility</h4>
                <p className="text-sm text-gray-400" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Works on all websites</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-green-400" />
                </div>
                <h4 className="font-semibold text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Lightweight & Fast</h4>
                <p className="text-sm text-gray-400" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Minimal resource usage</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-6 h-6 text-green-400" />
                </div>
                <h4 className="font-semibold text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Secure & Private</h4>
                <p className="text-sm text-gray-400" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Your data stays safe</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeaturesPage;