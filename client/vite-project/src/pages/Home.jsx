import { useState } from 'react';
import logoIcon from '../assets/Tutoron-gpt-logo.png'; // Make sure the path matches your actual logo location

const TutoronGPT = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="font-inter bg-[#e1e5f2] text-[#022b3a]">
      {/* Navigation */}
       <nav className="bg-white shadow-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16 items-center">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logoIcon} alt="Tutoron-GPT Logo" className="h-8 w-8" />
        <span className="ml-2 text-xl font-bold text-[#022b3a]">Tutoron-GPT</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        <a href="#" className="text-sm font-medium text-[#022b3a] hover:text-[#1f7a8c]">Features</a>
        <a href="#" className="text-sm font-medium text-[#022b3a] hover:text-[#1f7a8c]">How It Works</a>
        <a href="#" className="text-sm font-medium text-[#022b3a] hover:text-[#1f7a8c]">Pricing</a>
        <a href="#" className="text-sm font-medium text-[#022b3a] hover:text-[#1f7a8c]">About</a>
        <a href="/login" className="text-sm font-medium text-[#022b3a] hover:text-[#1f7a8c] ml-6">Log In</a>
        <a href="/register" className="px-4 py-2 bg-[#1f7a8c] hover:bg-[#3a9fb3] text-white rounded-md text-sm font-medium transition ml-2">Sign Up</a>
      </div>

      {/* Mobile Button */}
      <div className="flex md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex items-center justify-center p-2 text-[#022b3a] hover:text-[#1f7a8c] focus:outline-none"
        >
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Menu */}
  {mobileMenuOpen && (
    <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
      <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-[#022b3a] hover:text-[#1f7a8c]">Features</a>
      <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-[#022b3a] hover:text-[#1f7a8c]">How It Works</a>
      <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-[#022b3a] hover:text-[#1f7a8c]">Pricing</a>
      <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-[#022b3a] hover:text-[#1f7a8c]">About</a>

      <div className="pt-4 pb-3 border-t border-[#bfdbf7]">
        <a href="/login" className="block px-3 py-2 rounded-md text-base font-medium text-[#022b3a] hover:text-[#1f7a8c]">
          Log In
        </a>
        <a href="/register" className="mt-2 block w-full px-3 py-2 rounded-md text-center text-base font-medium text-white bg-[#1f7a8c] hover:bg-[#3a9fb3]">
          Sign Up
        </a>
      </div>
    </div>
  )}
</nav>


      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1f7a8c] to-[#022b3a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Your Personal AI Learning Assistant</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
              Tutoron-GPT helps you learn faster, understand deeper, and retain knowledge longer with personalized
              AI-powered tutoring.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#" className="bg-[#1f7a8c] hover:bg-[#3a9fb3] px-8 py-3 rounded-md text-lg font-semibold transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md">Get Started Free</a>
              <a href="#" className="bg-white text-[#022b3a] px-8 py-3 rounded-md text-lg font-semibold hover:bg-opacity-90 transition">See How It Works</a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#022b3a] mb-4">Powerful Learning Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tutoron-GPT adapts to your learning style and pace to deliver the most effective educational experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md transition duration-300 hover:translate-y-[-5px] hover:shadow-lg">
            <div className="w-14 h-14 bg-[#bfdbf7] rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#1f7a8c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Smart Explanations</h3>
            <p className="text-gray-600">
              Get concepts broken down in multiple ways until you find the explanation that clicks for you.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md transition duration-300 hover:translate-y-[-5px] hover:shadow-lg">
            <div className="w-14 h-14 bg-[#bfdbf7] rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#1f7a8c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Personalized Learning</h3>
            <p className="text-gray-600">
              Our AI adapts to your knowledge level and learning preferences for optimal results.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md transition duration-300 hover:translate-y-[-5px] hover:shadow-lg">
            <div className="w-14 h-14 bg-[#bfdbf7] rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#1f7a8c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Instant Feedback</h3>
            <p className="text-gray-600">
              Get real-time corrections and suggestions as you learn and practice new skills.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#022b3a] mb-4">How Tutoron-GPT Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple steps to transform your learning experience with AI.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1f7a8c] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-3">Tell Us What You Want to Learn</h3>
              <p className="text-gray-600">
                Share your learning goals, subjects of interest, or upload your course materials.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1f7a8c] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-3">Get Personalized Guidance</h3>
              <p className="text-gray-600">
                Our AI analyzes your needs and creates a customized learning path just for you.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1f7a8c] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-3">Learn, Practice, Master</h3>
              <p className="text-gray-600">
                Engage with interactive lessons and get instant feedback as you progress.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-[#1f7a8c] to-[#022b3a] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Learning?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of learners who are mastering new skills faster with Tutoron-GPT.
          </p>
          <a href="#" className="inline-block bg-white text-[#022b3a] px-8 py-3 rounded-md text-lg font-semibold hover:bg-opacity-90 transition">Start Your Free Trial</a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#022b3a] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#bfdbf7] transition">Features</a></li>
                <li><a href="#" className="hover:text-[#bfdbf7] transition">Pricing</a></li>
                <li><a href="#" className="hover:text-[#bfdbf7] transition">Examples</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#bfdbf7] transition">Blog</a></li>
                <li><a href="#" className="hover:text-[#bfdbf7] transition">Guides</a></li>
                <li><a href="#" className="hover:text-[#bfdbf7] transition">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#bfdbf7] transition">About</a></li>
                <li><a href="#" className="hover:text-[#bfdbf7] transition">Careers</a></li>
                <li><a href="#" className="hover:text-[#bfdbf7] transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#bfdbf7] transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-[#bfdbf7] transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-[#bfdbf7] transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#1f7a8c] text-center">
            <p>&copy; 2025 Tutoron-GPT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TutoronGPT;