export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-20">
      {/* HERO SECTION */}
      <section className="max-w-3xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest text-blue-400 mb-4">
          Freelance Web Developer
        </p>
        <h1 className="text-5xl font-bold mb-6">
          Chill Web Dev
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          Clean, modern websites built with precision. From concept to launch.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
          Get In Touch
        </button>
      </section>
    </main>
  );
}