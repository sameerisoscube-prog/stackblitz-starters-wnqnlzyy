export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold leading-tight mb-6">
            ISO Global Insight
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Your trusted platform for ISO certification insights,
            compliance guides, audit preparation, documentation,
            and business standards.
          </p>

          <div className="flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-90">
              Explore Blogs
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-2xl">
            <h2 className="text-2xl font-semibold mb-3">
              ISO Certification
            </h2>

            <p className="text-gray-600">
              Learn about ISO 9001, ISO 27001,
              ISO 14001, and international standards.
            </p>
          </div>

          <div className="p-6 border rounded-2xl">
            <h2 className="text-2xl font-semibold mb-3">
              Audit & Compliance
            </h2>

            <p className="text-gray-600">
              Practical audit preparation guides,
              compliance strategies, and best practices.
            </p>
          </div>

          <div className="p-6 border rounded-2xl">
            <h2 className="text-2xl font-semibold mb-3">
              Business Growth
            </h2>

            <p className="text-gray-600">
              Improve operational efficiency and build
              credibility through ISO implementation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}