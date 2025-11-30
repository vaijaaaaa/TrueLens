import { Link } from 'react-router-dom';

function HowItWorksPage() {
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

  const techDetails = [
    {
      title: 'Claim Extraction',
      description: 'Natural language processing identifies factual statements that can be verified.',
    },
    {
      title: 'Source Verification',
      description: 'Cross-references claims with fact-checking databases and trusted news sources.',
    },
    {
      title: 'Bias Detection',
      description: 'Analyzes language patterns to identify political lean and perspective.',
    },
    {
      title: 'Credibility Scoring',
      description: 'Combines multiple signals to provide an overall reliability assessment.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#d4a574]">
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-[#d4a574]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-2xl tracking-wide text-[#1a1a1a]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
            TrueLens
          </Link>
          <div className="hidden md:flex items-center gap-12">
            <Link to="/features" className="text-sm text-[#1a1a1a]/60 hover:text-[#1a1a1a]" style={{ fontFamily: 'Inter, sans-serif' }}>About</Link>
            <Link to="/how-it-works" className="text-sm text-[#1a1a1a]" style={{ fontFamily: 'Inter, sans-serif' }}>How It Works</Link>
            <Link to="/download" className="text-sm text-[#1a1a1a]/60 hover:text-[#1a1a1a]" style={{ fontFamily: 'Inter, sans-serif' }}>Download</Link>
            <Link to="/contact" className="text-sm text-[#1a1a1a]/60 hover:text-[#1a1a1a]" style={{ fontFamily: 'Inter, sans-serif' }}>Contact</Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 
            className="text-5xl md:text-7xl text-[#1a1a1a] mb-8"
            style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
          >
            How it works
          </h1>
          <p 
            className="text-xl text-[#1a1a1a]/60 max-w-2xl leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            A seamless experience from installation to insight. Four simple steps to more informed browsing.
          </p>
        </div>
      </section>

      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-20">
            {steps.map((step, index) => (
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

      <section className="py-32 px-8 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-4xl md:text-5xl text-white mb-16"
            style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
          >
            Under the hood
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            {techDetails.map((detail, index) => (
              <div key={index} className="border-t border-white/20 pt-8">
                <h3 
                  className="text-xl text-white mb-4"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {detail.title}
                </h3>
                <p 
                  className="text-white/50 leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {detail.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-4xl md:text-5xl text-[#1a1a1a] mb-8"
            style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
          >
            Ready to start?
          </h2>
          <p 
            className="text-[#1a1a1a]/60 text-lg mb-12 max-w-xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Install TrueLens and experience more informed browsing in minutes.
          </p>
          <Link 
            to="/download"
            className="inline-block px-8 py-4 bg-[#1a1a1a] text-white text-sm tracking-wide hover:bg-[#1a1a1a]/90 transition-colors"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Download Now
          </Link>
        </div>
      </section>

      <footer className="py-16 px-8 border-t border-[#1a1a1a]/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm text-[#1a1a1a]/50" style={{ fontFamily: 'Inter, sans-serif' }}>
            © 2025 TrueLens
          </div>
          <div className="flex gap-8">
            <Link to="/contact" className="text-sm text-[#1a1a1a]/50 hover:text-[#1a1a1a]" style={{ fontFamily: 'Inter, sans-serif' }}>Contact</Link>
            <a href="#" className="text-sm text-[#1a1a1a]/50 hover:text-[#1a1a1a]" style={{ fontFamily: 'Inter, sans-serif' }}>Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HowItWorksPage;