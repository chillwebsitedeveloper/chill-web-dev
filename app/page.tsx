export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-5xl mx-auto">
        <span className="text-xl font-bold tracking-tight">Chill Web Dev</span>
        <a
          href="mailto:contact.chillweb@gmail.com"
          className="text-sm text-gray-400 hover:text-white transition-colors"
        >
          Contact
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="max-w-3xl mx-auto text-center px-6 py-24">
        <p className="text-sm uppercase tracking-widest text-blue-400 mb-4">
          Freelance Web Developer
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Chill Web Dev
        </h1>
        <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
          Clean, modern websites built with precision. From concept to launch.
        </p>
        <a
          href="mailto:contact.chillweb@gmail.com"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
        >
          Get In Touch
        </a>
      </section>

      {/* SERVICES SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 hover:bg-gray-800/50 transition-all duration-300">
            <div className="text-3xl mb-4">🌐</div>
            <h3 className="text-lg font-semibold mb-2">Business Websites</h3>
            <p className="text-gray-400 text-sm">
              Professional websites that represent your brand and attract customers.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 hover:bg-gray-800/50 transition-all duration-300">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-lg font-semibold mb-2">Fast & Modern</h3>
            <p className="text-gray-400 text-sm">
              Built with the latest technology for speed, SEO, and performance.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 hover:bg-gray-800/50 transition-all duration-300">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-lg font-semibold mb-2">Mobile Ready</h3>
            <p className="text-gray-400 text-sm">
              Every site looks perfect on phones, tablets, and desktops.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 mt-20">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2025 Chill Web Dev. All rights reserved.
          </p>
          <a
            href="mailto:contact.chillweb@gmail.com"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            contact.chillweb@gmail.com
          </a>
        </div>
      </footer>

    </main>
  );
}