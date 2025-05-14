import { useState } from 'react';
import logoIcon from '../assets/tutoron-gpt-logo.png'; 
import { Link } from 'react-router-dom';

const TutoronGPT = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="font-inter bg-[#e1e5f2] text-[#022b3a]">
