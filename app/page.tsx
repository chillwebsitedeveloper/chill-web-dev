export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-5xl mx-auto">
        <span className="text-xl font-bold tracking-tight">Chill Web Dev</span>
        <a
          href="mailto:contact.chillweb@gmail.com"
          className="text-sm text-neutral-300 hover:text-white transition-colors"
        >
          Contact
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="max-w-3xl mx-auto text-center px-6 py-32">
        <p className="text-sm uppercase tracking-widest text-blue-400 mb-5">
          Freelance Web Developer
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Chill Web Dev
        </h1>
        <p className="text-lg text-neutral-400 mb-10 max-w-xl mx-auto">
          Clean, modern websites built with precision. From concept to launch.
        </p>
        <a
          href="mailto:contact.chillweb@gmail.com"
          className="inline-block bg-blue-500 hover:bg-blue-400 text-neutral-950 px-8 py-3 rounded-lg font-medium transition-colors"
        >
          Get In Touch
        </a>
      </section>

      {/* SERVICES SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-14">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-all duration-300">
            <div className="text-3xl mb-4">🌐</div>
            <h3 className="text-lg font-semibold mb-2">Business Websites</h3>
            <p className="text-neutral-400 text-sm">
              Professional websites that represent your brand and attract customers.
            </p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-all duration-300">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-lg font-semibold mb-2">Fast & Modern</h3>
            <p className="text-neutral-400 text-sm">
              Built with the latest technology for speed, SEO, and performance.
            </p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-all duration-300">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-lg font-semibold mb-2">Mobile Ready</h3>
            <p className="text-neutral-400 text-sm">
              Every site looks perfect on phones, tablets, and desktops.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800 mt-20">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            © 2025 Chill Web Dev. All rights reserved.
          </p>
          <a
            href="mailto:contact.chillweb@gmail.com"
            className="text-sm text-neutral-400 hover:text-white transition-colors"
          >
            contact.chillweb@gmail.com
          </a>
        </div>
      </footer>

    </main>
  );
}