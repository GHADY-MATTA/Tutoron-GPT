import { useState } from 'react';
import logoIcon from '../assets/tutoron-gpt-logo.png'; 
import { Link } from 'react-router-dom';

const TutoronGPT = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="font-inter bg-[#e1e5f2] text-[#022b3a]">
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
        <div className="flex items-center">
            <img src={logoIcon} alt="Tutoron-GPT Logo" className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold text-[#022b3a]">Tutoron-GPT</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="#" className="text-sm font-medium text-[#022b3a] hover:text-[#1f7a8c]">Features</Link>
            <Link to="#" className="text-sm font-medium text-[#022b3a] hover:text-[#1f7a8c]">How It Works</Link>
            <Link to="#" className="text-sm font-medium text-[#022b3a] hover:text-[#1f7a8c]">Pricing</Link>
            <Link to="#" className="text-sm font-medium text-[#022b3a] hover:text-[#1f7a8c]">About</Link>
            <Link to="/login" className="text-sm font-medium text-[#022b3a] hover:text-[#1f7a8c] ml-6">Log In</Link>
            <Link to="/register" className="px-4 py-2 bg-[#1f7a8c] hover:bg-[#3a9fb3] text-white rounded-md text-sm font-medium transition ml-2">Sign Up</Link>
          </div>
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
          {mobileMenuOpen && (
          <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
            <Link to="#" className="block px-3 py-2 rounded-md text-base font-medium text-[#022b3a] hover:text-[#1f7a8c]">Features</Link>
            <Link to="#" className="block px-3 py-2 rounded-md text-base font-medium text-[#022b3a] hover:text-[#1f7a8c]">How It Works</Link>
            <Link to="#" className="block px-3 py-2 rounded-md text-base font-medium text-[#022b3a] hover:text-[#1f7a8c]">Pricing</Link>
            <Link to="#" className="block px-3 py-2 rounded-md text-base font-medium text-[#022b3a] hover:text-[#1f7a8c]">About</Link>
            <div className="pt-4 pb-3 border-t border-[#bfdbf7]">
              <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-[#022b3a] hover:text-[#1f7a8c]">
                Log In
              </Link>
              <Link to="/register" className="mt-2 block w-full px-3 py-2 rounded-md text-center text-base font-medium text-white bg-[#1f7a8c] hover:bg-[#3a9fb3]">
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </nav>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#022b3a] mb-4">Powerful Learning Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tutoron-GPT adapts to your learning style and pace to deliver the most effective educational experience.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
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
          <div className="bg-white p-8 rounded-lg shadow-md transition duration-300 hover:translate-y-[-5px] hover:shadow-lg">
            <div className="w-14 h-14 bg-[#bfdbf7] rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#1f7a8c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Instant Feedback</h3>
            <p className="text-gray-600">
              Get real-time corrections and suggestions as you learn and practice new skills.
            </p>
          </div>
          <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#022b3a] mb-4">How Tutoron-GPT Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple steps to transform your learning experience with AI.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
              <div className="w-20 h-20 bg-[#1f7a8c] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-3">Tell Us What You Want to Learn</h3>
              <p className="text-gray-600">
                Share your learning goals, subjects of interest, or upload your course materials.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1f7a8c] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-3">Get Personalized Guidance</h3>
              <p className="text-gray-600">
                Our AI analyzes your needs and creates a customized learning path just for you.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1f7a8c] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-3">Learn, Practice, Master</h3>
              <p className="text-gray-600">
                Engage with interactive lessons and get instant feedback as you progress.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#1f7a8c] to-[#022b3a] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Learning?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of learners who are mastering new skills faster with Tutoron-GPT.
          </p>
          <a href="#" className="inline-block bg-white text-[#022b3a] px-8 py-3 rounded-md text-lg font-semibold hover:bg-opacity-90 transition">Start Your Free Trial</a>
        </div>
      </div>
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
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#bfdbf7] transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724..."/>
                  </svg>
                </a>
              </div>
            </div>
