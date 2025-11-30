import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TruLensContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      label: 'Email',
      value: 'hello@truelens.ai',
    },
    {
      label: 'Support',
      value: 'support@truelens.ai',
    },
    {
      label: 'Press',
      value: 'press@truelens.ai',
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
            <Link to="/how-it-works" className="text-sm text-[#1a1a1a]/60 hover:text-[#1a1a1a]" style={{ fontFamily: 'Inter, sans-serif' }}>How It Works</Link>
            <Link to="/download" className="text-sm text-[#1a1a1a]/60 hover:text-[#1a1a1a]" style={{ fontFamily: 'Inter, sans-serif' }}>Download</Link>
            <Link to="/contact" className="text-sm text-[#1a1a1a]" style={{ fontFamily: 'Inter, sans-serif' }}>Contact</Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 
            className="text-5xl md:text-7xl text-[#1a1a1a] mb-8"
            style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
          >
            Get in touch
          </h1>
          <p 
            className="text-xl text-[#1a1a1a]/60 max-w-2xl leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Have a question, feedback, or just want to say hello? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 
                className="text-2xl text-[#1a1a1a] mb-12"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Send a message
              </h2>
              
              {isSubmitted ? (
                <div className="py-16 text-center">
                  <h3 
                    className="text-2xl text-[#1a1a1a] mb-4"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Thank you
                  </h3>
                  <p 
                    className="text-[#1a1a1a]/60"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label 
                      className="block text-sm text-[#1a1a1a]/60 mb-2"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-0 py-3 bg-transparent border-b border-[#1a1a1a]/20 text-[#1a1a1a] focus:outline-none focus:border-[#1a1a1a]/60 transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>
                  <div>
                    <label 
                      className="block text-sm text-[#1a1a1a]/60 mb-2"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-0 py-3 bg-transparent border-b border-[#1a1a1a]/20 text-[#1a1a1a] focus:outline-none focus:border-[#1a1a1a]/60 transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>
                  <div>
                    <label 
                      className="block text-sm text-[#1a1a1a]/60 mb-2"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-0 py-3 bg-transparent border-b border-[#1a1a1a]/20 text-[#1a1a1a] focus:outline-none focus:border-[#1a1a1a]/60 transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>
                  <div>
                    <label 
                      className="block text-sm text-[#1a1a1a]/60 mb-2"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-0 py-3 bg-transparent border-b border-[#1a1a1a]/20 text-[#1a1a1a] focus:outline-none focus:border-[#1a1a1a]/60 transition-colors resize-none"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-4 bg-[#1a1a1a] text-white text-sm tracking-wide hover:bg-[#1a1a1a]/90 transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div>
              <h2 
                className="text-2xl text-[#1a1a1a] mb-12"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Contact info
              </h2>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="border-t border-[#1a1a1a]/20 pt-6">
                    <div 
                      className="text-sm text-[#1a1a1a]/60 mb-2"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {info.label}
                    </div>
                    <a 
                      href={`mailto:${info.value}`}
                      className="text-lg text-[#1a1a1a] hover:opacity-60 transition-opacity"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {info.value}
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-16">
                <h3 
                  className="text-xl text-[#1a1a1a] mb-6"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  FAQ
                </h3>
                <div className="space-y-6">
                  <div className="border-t border-[#1a1a1a]/20 pt-6">
                    <h4 
                      className="text-[#1a1a1a] mb-2"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Is TrueLens free?
                    </h4>
                    <p 
                      className="text-[#1a1a1a]/60"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Yes, TrueLens is completely free to use.
                    </p>
                  </div>
                  <div className="border-t border-[#1a1a1a]/20 pt-6">
                    <h4 
                      className="text-[#1a1a1a] mb-2"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      How does it protect my privacy?
                    </h4>
                    <p 
                      className="text-[#1a1a1a]/60"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      We never store your browsing data. Analysis happens locally.
                    </p>
                  </div>
                  <div className="border-t border-[#1a1a1a]/20 pt-6">
                    <h4 
                      className="text-[#1a1a1a] mb-2"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Which browsers are supported?
                    </h4>
                    <p 
                      className="text-[#1a1a1a]/60"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Chrome and Firefox. More coming soon.
                    </p>
                  </div>
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