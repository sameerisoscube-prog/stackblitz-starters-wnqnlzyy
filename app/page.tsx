export default function HomePage() {
  const features = [
    {
      title: 'Submit Articles',
      description:
        'Publish high-quality business, technology, and professional articles to reach a wider audience.',
    },
    {
      title: 'SEO Optimized',
      description:
        'Built with a clean structure, fast performance, and search-engine-friendly layouts.',
    },
    {
      title: 'Build Authority',
      description:
        'Grow your online visibility and increase authority through quality content publishing.',
    },
  ];

  const categories = [
    'Business',
    'Technology',
    'Marketing',
    'Cybersecurity',
    'Finance',
    'Compliance',
  ];

  const articles = [
    {
      title: 'How Businesses Can Improve Operational Efficiency',
      category: 'Business',
      readTime: '6 min read',
    },
    {
      title: 'Modern Cybersecurity Best Practices',
      category: 'Cybersecurity',
      readTime: '8 min read',
    },
    {
      title: 'Why Content Marketing Still Works',
      category: 'Marketing',
      readTime: '5 min read',
    },
  ];

  return (
    <main className="min-h-screen bg-[#0B1120] text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1120]/90 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide">
            ISO Global Insight
          </h1>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#features" className="hover:text-white transition">
              Features
            </a>

            <a href="#categories" className="hover:text-white transition">
              Categories
            </a>

            <a href="#articles" className="hover:text-white transition">
              Articles
            </a>

            <a href="#submit" className="hover:text-white transition">
              Submit
            </a>
          </nav>

          <a
            href="#submit"
            className="bg-white text-black px-5 py-2 rounded-xl font-medium hover:opacity-90 transition"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 mb-8">
              Professional Article Submission Platform
            </div>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Publish Articles.
              <br />
              Build Authority.
              <br />
              Grow Traffic.
            </h2>

            <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl">
              ISO Global Insight is a modern article submission platform
              designed for businesses, writers, and professionals to publish
              valuable content and increase online visibility.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#submit"
                className="bg-white text-black px-7 py-4 rounded-2xl font-semibold hover:opacity-90 transition"
              >
                Submit Article
              </a>

              <a
                href="#articles"
                className="border border-white/20 px-7 py-4 rounded-2xl font-semibold hover:bg-white/10 transition"
              >
                Explore Articles
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />

            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
              <div className="grid gap-6">
                <div className="bg-[#111827] rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="font-semibold text-lg">
                      Platform Metrics
                    </h3>

                    <span className="text-green-400 text-sm">
                      Live Analytics
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <h4 className="text-3xl font-bold">120+</h4>
                      <p className="text-gray-400 text-sm mt-1">Articles</p>
                    </div>

                    <div>
                      <h4 className="text-3xl font-bold">25K</h4>
                      <p className="text-gray-400 text-sm mt-1">Visitors</p>
                    </div>

                    <div>
                      <h4 className="text-3xl font-bold">1.2K</h4>
                      <p className="text-gray-400 text-sm mt-1">Backlinks</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#111827] rounded-2xl p-6 border border-white/10">
                  <h3 className="font-semibold text-lg mb-5">
                    Trending Categories
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {categories.map((category) => (
                      <span
                        key={category}
                        className="px-4 py-2 rounded-xl bg-white/10 text-sm text-gray-300"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Why Choose ISO Global Insight?
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A modern publishing platform designed to help contributors and
            businesses grow their online presence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition"
            >
              <div className="w-14 h-14 rounded-2xl bg-white text-black flex items-center justify-center font-bold text-xl mb-6">
                ✓
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section
        id="categories"
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Popular Categories
            </h2>

            <p className="text-gray-400 max-w-2xl">
              Discover content across multiple business and professional
              categories.
            </p>
          </div>

          <button className="border border-white/20 px-6 py-3 rounded-2xl hover:bg-white/10 transition w-fit">
            Browse All Categories
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition"
            >
              <h3 className="text-2xl font-semibold mb-3">
                {category}
              </h3>

              <p className="text-gray-400 mb-6">
                Explore expert insights and informative articles related to
                {` ${category.toLowerCase()}`}.
              </p>

              <a href="#articles" className="text-white font-medium">
                Explore Articles →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section
        id="articles"
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Latest Articles
            </h2>

            <p className="text-gray-400 max-w-2xl">
              Discover informative articles published by industry contributors.
            </p>
          </div>

          <input
            type="text"
            placeholder="Search articles..."
            className="bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white placeholder:text-gray-500 outline-none"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.title}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-1 transition"
            >
              <div className="h-52 bg-gradient-to-br from-blue-500/40 to-purple-500/40" />

              <div className="p-7">
                <div className="flex items-center gap-3 mb-4 text-sm text-gray-400">
                  <span>{article.category}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-2xl font-semibold mb-4 leading-snug">
                  {article.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  Read detailed insights and practical strategies written by
                  experienced professionals and contributors.
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-semibold"
                >
                  Read Article →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Submit Section */}
      <section
        id="submit"
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[40px] p-10 md:p-16 overflow-hidden relative">
          <div className="absolute inset-0 bg-black/10" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold leading-tight mb-6">
                Submit Your Article
              </h2>

              <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-xl">
                Share your expertise, publish insightful content, and connect
                with a growing professional audience.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-black px-7 py-4 rounded-2xl font-semibold hover:opacity-90 transition">
                  Submit Now
                </button>

                <button className="border border-white/30 px-7 py-4 rounded-2xl font-semibold hover:bg-white/10 transition">
                  Submission Guidelines
                </button>
              </div>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-md">
              <div className="grid gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-white/10 border border-white/20 rounded-2xl px-5 py-4 placeholder:text-blue-100/70 outline-none"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-white/10 border border-white/20 rounded-2xl px-5 py-4 placeholder:text-blue-100/70 outline-none"
                />

                <input
                  type="text"
                  placeholder="Article Title"
                  className="bg-white/10 border border-white/20 rounded-2xl px-5 py-4 placeholder:text-blue-100/70 outline-none"
                />

                <textarea
                  rows={5}
                  placeholder="Write a short description about your article..."
                  className="bg-white/10 border border-white/20 rounded-2xl px-5 py-4 placeholder:text-blue-100/70 outline-none resize-none"
                />

                <button className="bg-white text-black py-4 rounded-2xl font-semibold hover:opacity-90 transition">
                  Submit Article
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 mt-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">
              ISO Global Insight
            </h3>

            <p className="text-gray-400 text-sm">
              Modern article submission and publishing platform.
            </p>
          </div>

          <div className="flex items-center gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white transition">
              Terms
            </a>

            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}