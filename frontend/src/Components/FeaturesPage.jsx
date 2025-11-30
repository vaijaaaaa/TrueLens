import { Link } from 'react-router-dom';

function FeaturesPage() {
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

  return (
    <div className="min-h-screen bg-[#d4a574]">
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-[#d4a574]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-2xl tracking-wide text-[#1a1a1a]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
            TrueLens
          </Link>
          <div className="hidden md:flex items-center gap-12">
            <Link to="/features" className="text-sm text-[#1a1a1a]" style={{ fontFamily: 'Inter, sans-serif' }}>About</Link>
            <Link to="/how-it-works" className="text-sm text-[#1a1a1a]/60 hover:text-[#1a1a1a]" style={{ fontFamily: 'Inter, sans-serif' }}>How It Works</Link>
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
            What we do
          </h1>
          <p 
            className="text-xl text-[#1a1a1a]/60 max-w-2xl leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            TrueLens uses advanced AI to help you navigate the complex landscape of online information with confidence and clarity.
          </p>
        </div>
      </section>

      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-20">
            {features.map((feature) => (
              <div key={feature.number} className="border-t border-[#1a1a1a]/20 pt-8">
                <div className="text-5xl text-[#1a1a1a]/15 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {feature.number}
                </div>
                <h3 className="text-2xl text-[#1a1a1a] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {feature.title}
                </h3>
                <p className="text-[#1a1a1a]/60 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-8 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-4xl md:text-5xl text-white mb-8"
            style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
          >
            Ready to see clearly?
          </h2>
          <p 
            className="text-white/50 text-lg mb-12 max-w-xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Join thousands who trust TrueLens to navigate the web with confidence.
          </p>
          <Link 
            to="/download"
            className="inline-block px-8 py-4 bg-white text-[#1a1a1a] text-sm tracking-wide hover:bg-white/90 transition-colors"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Get Started
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

export default FeaturesPage;