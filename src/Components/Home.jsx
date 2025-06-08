import { useState, useEffect } from 'react';
import { Shield, CheckCircle, AlertTriangle, Star, Download, Menu, X } from 'lucide-react';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate floating particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.5 + 0.1,
    }));
    setParticles(newParticles);

    // Animate particles
    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        y: (particle.y + particle.speed) % 100,
      })));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const navItems = ['Home', 'Features', 'How It Works', 'Download Extension', 'Contact'];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden" style={{ fontFamily: 'Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif' }}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900/30"></div>
        
        {/* Floating Particles */}
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-green-500/30 animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        ))}
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.2)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 backdrop-blur-md bg-gray-900/50 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/30">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, sans-serif' }}>
              TruLens
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item}
                href="#"
                className={`text-sm font-medium transition-colors hover:text-green-400 ${
                  index === 0 ? 'text-green-400' : 'text-gray-300'
                }`}
                style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-gray-800/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={item}
                  href="#"
                  className={`block text-sm font-medium transition-colors hover:text-green-400 ${
                    index === 0 ? 'text-green-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 pt-20 pb-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-green-300 to-green-500 bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, sans-serif' }}>
            See Truth Clearly.
            <br />
            <span className="text-green-500">Browse Smarter.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            TruLens is your AI-powered lens for spotting fake news as you scroll. 
            Built to protect digital minds in a noisy world.
          </p>

          {/* CTA Button */}
          <button className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-green-800 rounded-full text-lg font-semibold text-white shadow-lg shadow-green-600/30 hover:shadow-green-600/50 transform hover:scale-105 transition-all duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity"></span>
            <span className="relative flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Add to Chrome</span>
            </span>
          </button>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="relative z-10 px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Main Dashboard Card */}
            <div className="bg-gray-800/30 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-8 shadow-2xl">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-green-500 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Real-Time Fact Checking</h3>
                <p className="text-gray-400" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>See how TruLens analyzes content as you browse</p>
              </div>

              {/* Article Preview */}
              <div className="bg-gray-900/50 rounded-2xl p-6 mb-6 border border-gray-700/30">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-lg font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>Breaking: New Climate Study Released</h4>
                  <div className="flex items-center space-x-2 bg-green-600/30 px-3 py-1 rounded-full border border-green-500/50">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-green-400 font-medium" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Verified</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                  Scientists at leading universities have published comprehensive research on climate patterns...
                </p>
              </div>

              {/* Analysis Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Credibility Score */}
                <div className="bg-gradient-to-br from-green-800/40 to-green-700/30 rounded-xl p-4 border border-green-600/40">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-green-300" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Credibility</span>
                    <Star className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="text-2xl font-bold text-green-400" style={{ fontFamily: 'Poppins, sans-serif' }}>92%</div>
                  <div className="text-xs text-green-300/70" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>High reliability</div>
                </div>

                {/* AI Summary */}
                <div className="bg-gradient-to-br from-green-900/30 to-gray-800/40 rounded-xl p-4 border border-green-700/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-green-300" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>AI Summary</span>
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="text-xs text-green-300/90 leading-relaxed" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                    Peer-reviewed study from reputable institutions with verifiable data
                  </div>
                </div>

                {/* Fact Check */}
                <div className="bg-gradient-to-br from-green-800/30 to-green-900/40 rounded-xl p-4 border border-green-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-green-300" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Fact Check</span>
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="text-sm font-semibold text-green-400" style={{ fontFamily: 'Poppins, sans-serif' }}>Verified</div>
                  <div className="text-xs text-green-300/70" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Cross-referenced</div>
                </div>

                {/* Source Rating */}
                <div className="bg-gradient-to-br from-gray-800/40 to-green-900/30 rounded-xl p-4 border border-green-700/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-green-300" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Source</span>
                    <Shield className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="text-sm font-semibold text-green-400" style={{ fontFamily: 'Poppins, sans-serif' }}>Trusted</div>
                  <div className="text-xs text-green-300/70" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Known publication</div>
                </div>
              </div>

              {/* Warning Example */}
              <div className="mt-6 bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-xl p-4 border border-red-700/30">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-semibold text-red-300 mb-1">Potential Misinformation Detected</h5>
                    <p className="text-xs text-red-300/80">
                      This article contains claims that contradict verified sources. Exercise caution.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-green-500/30 to-green-700/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-green-400/20 to-green-800/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Trusted by Critical Thinkers
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Real-Time Protection",
                description: "Instant analysis as you browse, protecting you from misinformation before you engage."
              },
              {
                icon: CheckCircle,
                title: "AI-Powered Verification",
                description: "Advanced machine learning algorithms cross-reference multiple sources for accuracy."
              },
              {
                icon: Star,
                title: "Source Credibility",
                description: "Comprehensive database of trusted sources with real-time reliability scoring."
              }
            ].map((feature, index) => (
              <div key={index} className="group bg-gray-800/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600/30 to-green-800/30 rounded-xl flex items-center justify-center mb-4 group-hover:from-green-600/40 group-hover:to-green-800/40 transition-all">
                  <feature.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;