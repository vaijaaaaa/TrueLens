import { useState } from 'react';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Download', href: '#download' }
  ];

  const features = [
    {
      number: '01',
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning models analyze text patterns, cross-reference sources, and evaluate credibility in milliseconds.',
    },
    {
      number: '02',
      title: 'Real-time Detection',
      description: 'Get instant feedback as you browse. Our algorithms work in the background without slowing down your experience.',
    },
    {
      number: '03',
      title: 'Source Verification',
      description: 'Cross-references information with trusted databases, fact-checking organizations, and verified news sources.',
    },
    {
      number: '04',
      title: 'Bias Detection',
      description: 'Identifies political lean and perspective in content, helping you understand the full picture.',
    },
    {
      number: '05',
      title: 'Claim Extraction',
      description: 'Automatically identifies and isolates factual claims from articles for individual verification.',
    },
    {
      number: '06',
      title: 'Privacy First',
      description: 'All processing happens locally. We never store your browsing data or track your activity.',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Install the Extension',
      description: 'Add TrueLens to your browser with a single click. No account required, no personal data collected.',
    },
    {
      number: '02',
      title: 'Browse Naturally',
      description: 'Continue reading news and articles as you normally would. TrueLens works silently in the background.',
    },
    {
      number: '03',
      title: 'AI Analysis',
      description: 'Our machine learning models analyze the content, extracting claims and cross-referencing with trusted sources.',
    },
    {
      number: '04',
      title: 'Get Insights',
      description: 'Click the extension icon to see credibility scores, bias analysis, and verified fact-checks instantly.',
    },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#d4a574] relative overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-[#d4a574]/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="text-2xl tracking-wide text-[#1a1a1a]" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400, fontStyle: 'italic' }}>
            TrueLens
          </a>

          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-sm text-[#1a1a1a]/80 hover:text-[#1a1a1a] transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {item.name}
              </a>
            ))}
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-0.5 bg-[#1a1a1a] mb-1.5"></div>
            <div className="w-6 h-0.5 bg-[#1a1a1a] mb-1.5"></div>
            <div className="w-6 h-0.5 bg-[#1a1a1a]"></div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#d4a574] border-t border-[#1a1a1a]/10 px-8 py-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="block py-3 text-[#1a1a1a]/80"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-8 pt-24">
        <div className="max-w-5xl mx-auto text-center">
          <h1 
            className="text-[clamp(3rem,12vw,9rem)] leading-[0.9] text-[#1a1a1a] mb-8"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400, fontStyle: 'italic' }}
          >
            Clarity in
            <br />
            Information
          </h1>
          
          <p 
            className="text-lg md:text-xl text-[#1a1a1a]/70 max-w-2xl mx-auto mb-12 leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
          >
            AI-powered truth detection for the modern web
          </p>

          <a 
            href="#download"
            onClick={(e) => scrollToSection(e, '#download')}
            className="inline-block px-8 py-4 bg-[#1a1a1a] text-white text-sm tracking-wide hover:bg-[#333] transition-colors"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Get the Extension
          </a>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <div className="text-6xl text-[#1a1a1a]/20 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>01</div>
              <h3 className="text-xl text-[#1a1a1a] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Real-time Analysis</h3>
              <p className="text-[#1a1a1a]/60 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Instant credibility scores as you browse any webpage or article.
              </p>
            </div>
            
            <div>
              <div className="text-6xl text-[#1a1a1a]/20 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>02</div>
              <h3 className="text-xl text-[#1a1a1a] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Bias Detection</h3>
              <p className="text-[#1a1a1a]/60 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Understand political lean and perspective in news content.
              </p>
            </div>
            
            <div>
              <div className="text-6xl text-[#1a1a1a]/20 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>03</div>
              <h3 className="text-xl text-[#1a1a1a] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Fact Verification</h3>
              <p className="text-[#1a1a1a]/60 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Cross-reference claims against trusted fact-checking sources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-8 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-5xl md:text-7xl text-white mb-8"
            style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
          >
            What we do
          </h2>
          <p 
            className="text-xl text-white/50 max-w-2xl leading-relaxed mb-20"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            TrueLens uses advanced AI to help you navigate the complex landscape of online information with confidence and clarity.
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
            {features.map((feature) => (
              <div key={feature.number} className="border-t border-white/20 pt-8">
                <div className="text-5xl text-white/10 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {feature.number}
                </div>
                <h3 className="text-2xl text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {feature.title}
                </h3>
                <p className="text-white/50 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 
                className="text-4xl md:text-5xl text-[#1a1a1a] mb-8"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Built for
                <br />
                <span style={{ fontStyle: 'italic' }}>critical thinkers</span>
              </h2>
              <p 
                className="text-[#1a1a1a]/60 text-lg leading-relaxed mb-8"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Whether you're a journalist, researcher, student, or simply someone who values accuracy, 
                TrueLens provides the tools you need to evaluate information critically.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl text-[#1a1a1a] mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>50K+</div>
                  <div className="text-sm text-[#1a1a1a]/50" style={{ fontFamily: 'Inter, sans-serif' }}>Active Users</div>
                </div>
                <div>
                  <div className="text-3xl text-[#1a1a1a] mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>2M+</div>
                  <div className="text-sm text-[#1a1a1a]/50" style={{ fontFamily: 'Inter, sans-serif' }}>Pages Analyzed</div>
                </div>
                <div>
                  <div className="text-3xl text-[#1a1a1a] mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>94%</div>
                  <div className="text-sm text-[#1a1a1a]/50" style={{ fontFamily: 'Inter, sans-serif' }}>Accuracy</div>
                </div>
              </div>
            </div>
            <div className="aspect-square rounded-sm overflow-hidden bg-[#1a1a1a]/5 flex items-center justify-center">
              <svg className="w-32 h-32 text-[#1a1a1a]/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-32 px-8 bg-[#c49a6c]">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-5xl md:text-7xl text-[#1a1a1a] mb-8"
            style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
          >
            How it works
          </h2>
          <p 
            className="text-xl text-[#1a1a1a]/60 max-w-2xl leading-relaxed mb-20"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            A seamless experience from installation to insight. Four simple steps to more informed browsing.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            {steps.map((step) => (
              <div key={step.number} className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-3">
                  <div 
                    className="text-8xl text-[#1a1a1a]/10"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {step.number}
                  </div>
                </div>
                <div className="md:col-span-9 border-t border-[#1a1a1a]/20 pt-8">
                  <h3 
                    className="text-3xl text-[#1a1a1a] mb-4"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {step.title}
                  </h3>
                  <p 
                    className="text-lg text-[#1a1a1a]/60 leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-32 px-8 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-4xl md:text-5xl text-white mb-16"
            style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
          >
            Under the hood
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="border-t border-white/20 pt-8">
              <h3 className="text-xl text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Claim Extraction
              </h3>
              <p className="text-white/50 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Natural language processing identifies factual statements that can be verified.
              </p>
            </div>
            <div className="border-t border-white/20 pt-8">
              <h3 className="text-xl text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Source Verification
              </h3>
              <p className="text-white/50 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Cross-references claims with fact-checking databases and trusted news sources.
              </p>
            </div>
            <div className="border-t border-white/20 pt-8">
              <h3 className="text-xl text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Bias Detection
              </h3>
              <p className="text-white/50 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Analyzes language patterns to identify political lean and perspective.
              </p>
            </div>
            <div className="border-t border-white/20 pt-8">
              <h3 className="text-xl text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Credibility Scoring
              </h3>
              <p className="text-white/50 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Combines multiple signals to provide an overall reliability assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-5xl md:text-7xl text-[#1a1a1a] mb-8"
            style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
          >
            Get TrueLens
          </h2>
          <p 
            className="text-xl text-[#1a1a1a]/60 max-w-2xl leading-relaxed mb-16"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Open source and free forever. Load the extension directly from GitHub in developer mode.
          </p>
          
          {/* GitHub Link */}
          <div className="border border-[#1a1a1a]/20 p-8 bg-white/20 mb-16">
            <div className="flex items-center gap-4 mb-6">
              <svg className="w-10 h-10 text-[#1a1a1a]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <div>
                <h3 
                  className="text-2xl text-[#1a1a1a]"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Clone from GitHub
                </h3>
                <p className="text-[#1a1a1a]/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Get the source code and load as unpacked extension
                </p>
              </div>
            </div>
            <a 
              href="https://github.com/vaijaaaaa/TrueLens"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#1a1a1a] text-white text-sm tracking-wide hover:bg-[#1a1a1a]/90 transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              View on GitHub →
            </a>
          </div>

          {/* Installation Steps */}
          <div className="border-t border-[#1a1a1a]/20 pt-16">
            <h3 
              className="text-3xl text-[#1a1a1a] mb-12"
              style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
            >
              How to install
            </h3>
            <div className="space-y-12">
              <div className="flex gap-8">
                <span className="text-5xl text-[#1a1a1a]/15 flex-shrink-0 w-20" style={{ fontFamily: 'Playfair Display, serif' }}>01</span>
                <div className="border-t border-[#1a1a1a]/20 pt-4 flex-1">
                  <h4 className="text-xl text-[#1a1a1a] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Clone the repository</h4>
                  <p className="text-[#1a1a1a]/60 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Download or clone the TrueLens repository from GitHub to your local machine.</p>
                  <code className="block bg-[#1a1a1a] text-white/80 px-4 py-3 text-sm rounded" style={{ fontFamily: 'monospace' }}>
                    git clone https://github.com/vaijaaaaa/TrueLens.git
                  </code>
                </div>
              </div>
              
              <div className="flex gap-8">
                <span className="text-5xl text-[#1a1a1a]/15 flex-shrink-0 w-20" style={{ fontFamily: 'Playfair Display, serif' }}>02</span>
                <div className="border-t border-[#1a1a1a]/20 pt-4 flex-1">
                  <h4 className="text-xl text-[#1a1a1a] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Open Chrome Extensions</h4>
                  <p className="text-[#1a1a1a]/60 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Navigate to the extensions page in your Chrome browser.</p>
                  <code className="block bg-[#1a1a1a] text-white/80 px-4 py-3 text-sm rounded" style={{ fontFamily: 'monospace' }}>
                    chrome://extensions/
                  </code>
                </div>
              </div>
              
              <div className="flex gap-8">
                <span className="text-5xl text-[#1a1a1a]/15 flex-shrink-0 w-20" style={{ fontFamily: 'Playfair Display, serif' }}>03</span>
                <div className="border-t border-[#1a1a1a]/20 pt-4 flex-1">
                  <h4 className="text-xl text-[#1a1a1a] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Enable Developer Mode</h4>
                  <p className="text-[#1a1a1a]/60" style={{ fontFamily: 'Inter, sans-serif' }}>Toggle on "Developer mode" in the top right corner of the extensions page.</p>
                </div>
              </div>
              
              <div className="flex gap-8">
                <span className="text-5xl text-[#1a1a1a]/15 flex-shrink-0 w-20" style={{ fontFamily: 'Playfair Display, serif' }}>04</span>
                <div className="border-t border-[#1a1a1a]/20 pt-4 flex-1">
                  <h4 className="text-xl text-[#1a1a1a] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Load Unpacked Extension</h4>
                  <p className="text-[#1a1a1a]/60" style={{ fontFamily: 'Inter, sans-serif' }}>Click "Load unpacked" and select the <strong>extension/dist</strong> folder from the cloned repository.</p>
                </div>
              </div>
              
              <div className="flex gap-8">
                <span className="text-5xl text-[#1a1a1a]/15 flex-shrink-0 w-20" style={{ fontFamily: 'Playfair Display, serif' }}>05</span>
                <div className="border-t border-[#1a1a1a]/20 pt-4 flex-1">
                  <h4 className="text-xl text-[#1a1a1a] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Start Using TrueLens</h4>
                  <p className="text-[#1a1a1a]/60" style={{ fontFamily: 'Inter, sans-serif' }}>The extension is now installed! Click the TrueLens icon in your toolbar while reading any article to analyze it.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-4xl md:text-6xl text-white mb-8"
            style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
          >
            Truth matters
          </h2>
          <p 
            className="text-white/50 text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            In an era of information overload, TrueLens helps you navigate with confidence. 
            Start your journey to more informed browsing today.
          </p>
          <a 
            href="#download"
            onClick={(e) => scrollToSection(e, '#download')}
            className="inline-block px-8 py-4 bg-white text-[#1a1a1a] text-sm tracking-wide hover:bg-white/90 transition-colors"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Get Started Free
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 border-t border-[#1a1a1a]/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm text-[#1a1a1a]/50" style={{ fontFamily: 'Inter, sans-serif' }}>
            © 2025 TrueLens. All rights reserved.
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-[#1a1a1a]/50 hover:text-[#1a1a1a]" style={{ fontFamily: 'Inter, sans-serif' }}>Privacy</a>
            <a href="#" className="text-sm text-[#1a1a1a]/50 hover:text-[#1a1a1a]" style={{ fontFamily: 'Inter, sans-serif' }}>Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;