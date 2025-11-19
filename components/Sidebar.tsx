import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Clock } from './Clock';
import { Marquee } from './Marquee';

interface SidebarProps {
  onNavigate: (view: 'gallery' | 'resume') => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onNavigate }) => {
  const socialLinks = [
    { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github', url: '#' },
    { name: 'X', icon: 'https://cdn.simpleicons.org/x', url: '#' },
    { name: 'LeetCode', icon: 'https://cdn.simpleicons.org/leetcode', url: '#' },
    { name: 'HackerRank', icon: 'https://cdn.simpleicons.org/hackerrank', url: '#' },
    { name: 'Google', icon: 'https://cdn.simpleicons.org/google', url: '#' },
  ];

  const handleLogoClick = () => {
    // "Refresh" the page state to home (gallery)
    onNavigate('gallery');
    // Optional: if a hard reload is preferred by "refresh", uncomment the next line
    // window.location.reload();
  };

  return (
    <>
      {/* Top Navigation Bar - Unified single bar stretching width */}
      <div className="w-full bg-white rounded-[2rem] p-2 pl-4 pr-4 flex items-center justify-between shadow-sm min-h-[60px]">
        <div 
          onClick={handleLogoClick}
          className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shrink-0 cursor-pointer hover:bg-gray-800 transition-colors"
          title="Reset to Home"
        >
          {/* Abstract Logo Icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M12 4C14 4 15 6 15 6L12 8L9 6C9 6 10 4 12 4Z" fill="currentColor"/>
             <path d="M12 20C10 20 9 18 9 18L12 16L15 18C15 18 14 20 12 20Z" fill="currentColor"/>
             <circle cx="12" cy="12" r="3" fill="currentColor"/>
          </svg>
        </div>
        
        {/* Name Display - Font Updated */}
        <div className="font-bold text-[1.7rem] text-gray-900 font-display tracking-wide mr-2">
          Harsh Vardhan Singh
        </div>
      </div>

      {/* Main Profile Card */}
      <div className="bg-white rounded-[2rem] p-6 shadow-sm flex flex-col gap-6 min-h-[380px]">
        <div className="flex justify-between items-start">
          <div className="relative">
            <div className="w-32 h-32 rounded-2xl overflow-hidden bg-pink-100 border-4 border-transparent hover:scale-105 transition-transform duration-500">
              <img 
                src="https://picsum.photos/seed/cartoon_avatar_123/400/400" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-[1.2rem] leading-[1.4] font-normal text-gray-900 tracking-tight">
            I'm a CS student from VIT, Vellore specializing in Full-Stack Development. I love building impactful & actual usable solutions that deliver results. <br></br> My expertise also extends to DevOps, with hands on experience in Docker, Kubernetes, Terraform and Jenkins on Google Cloud Platform. <br></br> Let's connect to build the next big thing!
          </p>
        </div>
      </div>

      {/* Marquee Section - Left Bottom Bar */}
      <Marquee />

      {/* Resume Section - Font Updated */}
      <div 
        onClick={() => onNavigate('resume')}
        className="bg-white rounded-[2rem] py-3 px-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
      >
        <div className="flex items-center justify-between h-6">
            <h3 className="text-lg font-bold text-gray-900 font-display tracking-wide">Resume</h3>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 group-hover:bg-black group-hover:text-white rounded-full transition-all duration-300 font-medium text-sm h-8">
                <span>View</span>
                <ArrowUpRight size={16} />
            </div>
        </div>
      </div>

      {/* Links / Footer Row - Increased Height with Icons */}
      <div className="bg-white rounded-[2rem] p-4 pl-6 shadow-sm flex flex-wrap sm:flex-nowrap items-center justify-between mt-auto min-h-16 gap-4">
        <a
          href="mailto:proharshv11@gmail.com"
          className="border border-gray-300 rounded-full px-2 py-2 text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap hover:bg-black hover:text-white hover:border-transparent group"
        >
            proharshv11@gmail.com
        </a>
        
        <div className="flex items-center gap-2 shrink-0">
          {socialLinks.map((link) => (
             <a key={link.name} href={link.url} title={link.name} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors group">
                <img src={link.icon} alt={link.name} className="w-5 h-5 grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all" />
             </a>
          ))}
        </div>
      </div>
    </>
  );
};