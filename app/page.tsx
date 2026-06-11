export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-5xl mx-auto">
        <span className="text-xl font-bold tracking-tight">Chill Web Dev</span>
        <a
          href="mailto:contact.chillweb@gmail.com"
          className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
        >
          Contact
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="max-w-3xl mx-auto text-center px-6 py-36">
        <p className="text-sm uppercase tracking-widest text-blue-600 mb-6">
          Freelance Web Developer
        </p>
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          Chill Web Dev
        </h1>
        <p className="text-lg text-gray-500 mb-12 max-w-xl mx-auto leading-relaxed">
          Clean, modern websites built with precision. From concept to launch.
        </p>
        <a
          href="mailto:contact.chillweb@gmail.com"
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-lg font-medium transition-colors"
        >
          Get In Touch
        </a>
      </section>

      {/* DIVIDER */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-gray-100" />
      </div>

      {/* SERVICES SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 hover:border-gray-200 hover:bg-gray-100/50 transition-all duration-300">
            <div className="text-3xl mb-4">🌐</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Business Websites</h3>
            <p className="text-gray-500 text-sm">
              Professional websites that represent your brand and attract customers.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 hover:border-gray-200 hover:bg-gray-100/50 transition-all duration-300">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Fast & Modern</h3>
            <p className="text-gray-500 text-sm">
              Built with the latest technology for speed, SEO, and performance.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 hover:border-gray-200 hover:bg-gray-100/50 transition-all duration-300">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Mobile Ready</h3>
            <p className="text-gray-500 text-sm">
              Every site looks perfect on phones, tablets, and desktops.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © 2025 Chill Web Dev. All rights reserved.
          </p>
          <a
            href="mailto:contact.chillweb@gmail.com"
            className="text-sm text-gray-400 hover:text-gray-900 transition-colors"
          >
            contact.chillweb@gmail.com
          </a>
        </div>
      </footer>

    </main>
  );
}