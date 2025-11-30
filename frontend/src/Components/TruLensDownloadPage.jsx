import { Link } from 'react-router-dom';

export default function TruLensDownloadPage() {
  const browsers = [
    {
      name: 'Chrome',
      description: 'The most popular browser worldwide',
      available: true,
    },
    {
      name: 'Firefox',
      description: 'Privacy-focused browsing',
      available: true,
    },
    {
      name: 'Edge',
      description: 'Microsoft\'s modern browser',
      available: false,
    },
    {
      name: 'Safari',
      description: 'Apple\'s native browser',
      available: false,
    },
  ];

  const requirements = [
    'Chrome 88+ or Firefox 78+',
    'Windows, macOS, or Linux',
    '50MB free disk space',
    'Internet connection',
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
            <Link to="/how-it-works" className="text-sm text-[#1a1a1a]/60 hover:text-[#1a1a1a]" style={{ fontFamily: 'Inter, sans-serif' }}>How It Works</Link>
            <Link to="/download" className="text-sm text-[#1a1a1a]" style={{ fontFamily: 'Inter, sans-serif' }}>Download</Link>
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
            Get TrueLens
          </h1>
          <p 
            className="text-xl text-[#1a1a1a]/60 max-w-2xl leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Free forever. No account needed. Install in seconds and start browsing with confidence.
          </p>
        </div>
      </section>

      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {browsers.map((browser) => (
              <div 
                key={browser.name} 
                className={`border border-[#1a1a1a]/20 p-8 ${browser.available ? 'bg-white/20' : 'opacity-50'}`}
              >
                <h3 
                  className="text-2xl text-[#1a1a1a] mb-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {browser.name}
                </h3>
                <p 
                  className="text-[#1a1a1a]/60 mb-6"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {browser.description}
                </p>
                {browser.available ? (
                  <button 
                    className="px-6 py-3 bg-[#1a1a1a] text-white text-sm tracking-wide hover:bg-[#1a1a1a]/90 transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Download for {browser.name}
                  </button>
                ) : (
                  <span 
                    className="text-sm text-[#1a1a1a]/40"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Coming soon
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-8 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-4xl text-white mb-16"
            style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
          >
            System requirements
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {requirements.map((req, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                <span 
                  className="text-white/70"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {req}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-4xl text-[#1a1a1a] mb-8"
            style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
          >
            Installation guide
          </h2>
          <div className="space-y-12">
            <div className="border-t border-[#1a1a1a]/20 pt-8">
              <div className="flex gap-8">
                <span 
                  className="text-5xl text-[#1a1a1a]/15"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  01
                </span>
                <div>
                  <h3 
                    className="text-xl text-[#1a1a1a] mb-2"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Click download
                  </h3>
                  <p 
                    className="text-[#1a1a1a]/60"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Choose your browser above and click the download button.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t border-[#1a1a1a]/20 pt-8">
              <div className="flex gap-8">
                <span 
                  className="text-5xl text-[#1a1a1a]/15"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  02
                </span>
                <div>
                  <h3 
                    className="text-xl text-[#1a1a1a] mb-2"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Add to browser
                  </h3>
                  <p 
                    className="text-[#1a1a1a]/60"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Click "Add to Chrome" or "Add to Firefox" when prompted.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t border-[#1a1a1a]/20 pt-8">
              <div className="flex gap-8">
                <span 
                  className="text-5xl text-[#1a1a1a]/15"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  03
                </span>
                <div>
                  <h3 
                    className="text-xl text-[#1a1a1a] mb-2"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Start browsing
                  </h3>
                  <p 
                    className="text-[#1a1a1a]/60"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    TrueLens is ready. Click the icon while reading any article.
                  </p>
                </div>
              </div>
            </div>
          </div>
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