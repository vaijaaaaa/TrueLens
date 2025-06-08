import React, { useState, useEffect } from 'react';
import { Download, Chrome, Shield, Eye, Zap, Globe, Star, CheckCircle, ArrowRight, Play } from 'lucide-react';

export default function TruLensDownloadPage() {
  const [activeTab, setActiveTab] = useState('chrome');
  const [isVisible, setIsVisible] = useState(false);
  const [downloadCount, setDownloadCount] = useState(127583);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setDownloadCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const browsers = [
    {
      id: 'chrome',
      name: 'Chrome',
      icon: Chrome,
      color: 'from-blue-500 to-green-500',
      users: '98K+',
      rating: 4.8,
      downloadUrl: '#'
    },
    {
      id: 'firefox',
      name: 'Firefox',
      icon: Globe,
      color: 'from-orange-500 to-red-500',
      users: '29K+',
      rating: 4.7,
      downloadUrl: '#'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Truth Detection',
      description: 'AI-powered fact-checking in real-time as you browse',
      demo: 'Instantly verify claims with 94% accuracy'
    },
    {
      icon: Eye,
      title: 'Source Transparency',
      description: 'See the credibility and bias of news sources',
      demo: 'Transparent source ratings and history'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Seamless integration with zero browsing slowdown',
      demo: 'Process pages in under 200ms'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Works across 50+ languages and regions',
      demo: 'Multi-language truth verification'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Journalist',
      text: 'TruLens has revolutionized how I verify sources. Essential for modern journalism.',
      rating: 5
    },
    {
      name: 'Dr. Michael Torres',
      role: 'Researcher',
      text: 'The accuracy is incredible. Saves me hours of fact-checking every day.',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      role: 'Student',
      text: 'Perfect for research papers. Never worry about fake news again!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-6 py-8">
          <nav className={`flex items-center justify-between transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                TruLens
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-sm text-gray-300">
                {downloadCount.toLocaleString()}+ downloads
              </span>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm text-gray-300 ml-2">4.8/5</span>
              </div>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16 text-center">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Truth in Every Click
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience the web with confidence. TruLens brings AI-powered truth detection 
              directly to your browser, protecting you from misinformation in real-time.
            </p>
            
            {/* Browser Tabs */}
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 flex space-x-2">
                {browsers.map((browser) => {
                  const IconComponent = browser.icon;
                  return (
                    <button
                      key={browser.id}
                      onClick={() => setActiveTab(browser.id)}
                      className={`flex items-center space-x-3 px-6 py-3 rounded-lg transition-all duration-300 ${
                        activeTab === browser.id
                          ? `bg-gradient-to-r ${browser.color} text-white shadow-lg scale-105`
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="font-medium">{browser.name}</span>
                      <span className="text-xs opacity-75">{browser.users}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Download Button */}
            <div className="mb-16">
              {browsers.map((browser) => (
                activeTab === browser.id && (
                  <button
                    key={browser.id}
                    className={`group relative px-12 py-6 text-xl font-bold text-white rounded-2xl bg-gradient-to-r ${browser.color} shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                    <div className="relative flex items-center space-x-3">
                      <Download className="w-6 h-6" />
                      <span>Download for {browser.name}</span>
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                )
              ))}
              <p className="text-sm text-gray-400 mt-4">
                Free • No registration required • Instant setup
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-6 py-20">
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Powerful Features
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredFeature(index)}
                    onMouseLeave={() => setHoveredFeature(null)}
                    className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                      hoveredFeature === index ? 'shadow-2xl' : ''
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                      <div className={`text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        hoveredFeature === index ? 'translate-y-0' : 'translate-y-2'
                      }`}>
                        {feature.demo}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              See It In Action
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Watch how TruLens instantly analyzes content and provides truth scores
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl">
              <div className="absolute top-4 left-4 flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="bg-white/10 rounded-lg p-4 flex items-center justify-between">
                  <span className="text-gray-300">Analyzing article: "Breaking: New Scientific Discovery..."</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 font-bold">94% Verified</span>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4 flex items-center justify-between">
                  <span className="text-gray-300">Source credibility check complete</span>
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`} />
                      ))}
                    </div>
                    <span className="text-blue-400">High Trust</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mt-8">
                <button className="group flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-bold hover:shadow-lg transition-all duration-300">
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Watch Full Demo</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="container mx-auto px-6 py-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Trusted by Thousands
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="container mx-auto px-6 py-20 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-4xl font-bold mb-6">Ready to Browse with Confidence?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust TruLens to keep them informed with verified, accurate information.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Download Extension
              </button>
              <button className="px-8 py-4 border border-white/20 rounded-xl text-white font-bold hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
            
            <div className="flex justify-center items-center space-x-8 mt-8 text-sm text-gray-400">
              <span>✓ Free Forever</span>
              <span>✓ Privacy Focused</span>
              <span>✓ Regular Updates</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}