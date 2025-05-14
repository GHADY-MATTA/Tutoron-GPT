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
