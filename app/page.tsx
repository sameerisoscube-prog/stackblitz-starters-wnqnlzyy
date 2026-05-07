"use client";

import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* --- NAVIGATION --- */}
      <nav className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">I</div>
            <span className="text-xl font-bold tracking-tight text-slate-900 font-serif">ISO Global Insight</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#" className="hover:text-blue-600 transition">Latest Articles</a>
            <a href="#" className="hover:text-blue-600 transition">Business</a>
            <a href="#" className="hover:text-blue-600 transition">Technology</a>
            <a href="#" className="hover:text-blue-600 transition">Marketing</a>
            <button className="bg-slate-900 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition">Admin Login</button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-bold border border-blue-100">
                <span>NEW</span> 
                <span className="w-1 h-1 rounded-full bg-blue-400"></span>
                Professional Article Platform
              </div>
              <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-[1.1] text-slate-900">
                Publish Your <br />
                <span className="text-blue-600 italic">Insights</span> Professionally.
              </h1>
              <p className="text-xl text-slate-500 max-w-lg leading-relaxed">
                A modern platform built for professionals and marketers to share global ISO standards, 
                business strategies, and technical excellence.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition shadow-xl shadow-blue-200">
                  Browse Articles
                </button>
                <button className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-xl font-bold hover:border-blue-400 transition">
                  Contact Us
                </button>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="aspect-[4/3] bg-slate-100 rounded-3xl overflow-hidden shadow-2xl relative border-8 border-white">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20"></div>
                {/* Decorative Elements */}
                <div className="absolute top-10 left-10 p-6 bg-white rounded-2xl shadow-lg max-w-[200px] animate-bounce">
                  <p className="text-xs font-bold text-blue-600 mb-1">Growth Index</p>
                  <div className="h-2 w-full bg-blue-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 w-[70%]"></div>
                  </div>
                </div>
                <div className="absolute bottom-10 right-10 p-6 bg-slate-900 rounded-2xl shadow-xl text-white">
                  <p className="text-3xl font-bold italic">ISO</p>
                  <p className="text-xs opacity-70">Global Standards 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURED SECTION --- */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-3xl font-serif font-bold text-slate-900">Latest Articles</h2>
              <div className="h-1 w-20 bg-blue-600 mt-2"></div>
            </div>
            <a href="#" className="text-blue-600 font-bold hover:underline">View All Insights →</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ArticleCard 
              category="Business" 
              title="The 2026 Guide to ISO 9001 Certification"
              description="Learn how to optimize your quality management systems for the global market."
              date="May 07, 2026"
            />
            <ArticleCard 
              category="Technology" 
              title="Securing Your Data with ISO 27001"
              description="Modern information security strategies for growing tech companies."
              date="May 05, 2026"
            />
            <ArticleCard 
              category="Marketing" 
              title="Using ISO Compliance as a Sales Tool"
              description="How to build brand trust and win international clients using standards."
              date="May 02, 2026"
            />
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-24 max-w-5xl mx-auto px-6 text-center">
        <div className="bg-blue-600 rounded-[3rem] p-12 lg:p-20 text-white shadow-2xl shadow-blue-200">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 italic">Ready to share your expertise?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Join our network of professional contributors and reach thousands of business leaders worldwide.
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition shadow-lg">
            Start Writing Today
          </button>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif font-bold text-xl">ISO Global Insight</div>
          <div className="text-slate-500 text-sm">© 2026 Professional Article Platform. All Rights Reserved.</div>
          <div className="flex gap-6 text-slate-400">
            <a href="#" className="hover:text-blue-600">Twitter</a>
            <a href="#" className="hover:text-blue-600">LinkedIn</a>
            <a href="#" className="hover:text-blue-600">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ArticleCard({ category, title, description, date }) {
  return (
    <div className="bg-white rounded-2xl p-2 shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
      <div className="h-56 bg-slate-200 rounded-xl mb-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-100 group-hover:scale-110 transition-transform duration-500"></div>
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-600">
          {category}
        </div>
      </div>
      <div className="px-4 pb-6">
        <p className="text-sm text-slate-400 mb-2 font-medium">{date}</p>
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3 leading-tight">
          {title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-6">
          {description}
        </p>
        <div className="flex items-center text-blue-600 font-bold text-sm">
          Read Article <span className="ml-2 group-hover:ml-4 transition-all">→</span>
        </div>
      </div>
    </div>
  );
}