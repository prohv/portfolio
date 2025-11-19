import React from 'react';

interface GalleryProps {
  currentView: 'gallery' | 'resume';
  onNavigate: (view: 'gallery' | 'resume') => void;
}

export const Gallery: React.FC<GalleryProps> = ({ currentView, onNavigate }) => {
  return (
    <div className="bg-white rounded-[2.5rem] h-[calc(100vh-2rem)] sticky top-4 shadow-sm flex flex-col overflow-hidden">
      {/* Header - Static within the card */}
      {/* Reduced top padding to align 'My Work' title with the sidebar top navigation */}
      <div className="flex items-center gap-3 p-6 pt-4 pb-2 shrink-0 bg-white z-10">
        {/* Font updated to Space Grotesk */}
        {/* Clicking "My Work" acts as a button to return to the gallery view */}
        <button 
            onClick={() => onNavigate('gallery')}
            className={`font-bold text-2xl tracking-tight font-display ml-2 mb-1 transition-colors duration-300 ${
                currentView === 'gallery' ? 'text-gray-900 cursor-default' : 'text-gray-400 hover:text-gray-900 cursor-pointer'
            }`}
        >
            My Work
        </button>
      </div>

      {/* Scrollable Content Area */}
      {/* Added rounded corners to mask content scroll at the top and bottom edges */}
      <div className="flex-1 overflow-y-auto p-6 pt-4 no-scrollbar rounded-[2rem]">
        
        {currentView === 'gallery' ? (
            /* GALLERY GRID VIEW */
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-min pb-8">
            
            {/* Mac Image Card */}
            <div className="md:col-span-7 bg-[#e8e6e1] rounded-[2rem] overflow-hidden shadow-sm min-h-[350px] relative group cursor-pointer">
                <img 
                    src="https://picsum.photos/seed/vintage_mac/800/600" 
                    alt="Macintosh Classic" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
            </div>

            {/* Black 3D Logo Card */}
            <div className="md:col-span-5 bg-black rounded-[2rem] flex items-center justify-center min-h-[350px] relative overflow-hidden group cursor-pointer">
                <div className="relative w-32 h-32 group-hover:rotate-12 transition-transform duration-500">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-white stroke-current fill-none stroke-[8]">
                        <path d="M20,20 L50,20 L50,80 L20,80 Z" transform="translate(0, 10)" />
                        <path d="M60,20 L90,20 L90,80 L60,80 Z" transform="translate(0, 10)" />
                    </svg>
                </div>
            </div>

            {/* Bottom Green Texture Card */}
            <div className="md:col-span-12 bg-[#1a4d3d] rounded-[2rem] min-h-[280px] overflow-hidden relative shadow-sm group">
                <img 
                    src="https://picsum.photos/seed/green_texture/1200/400" 
                    alt="Green Texture" 
                    className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                />
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <div className="w-full">
                        <h2 className="text-7xl md:text-8xl font-bold text-white/20 tracking-tighter uppercase whitespace-nowrap animate-scroll">
                            Good To See You Good To See You Good To See You
                        </h2>
                    </div>
                </div>
                <div className="absolute bottom-6 left-6 bg-white/90 px-4 py-1 rounded-full text-xs font-bold tracking-widest border border-black/10 text-black">
                    AMAR
                </div>
            </div>

            {/* Extra Scrolling Content */}
            <div className="md:col-span-6 bg-blue-50 rounded-[2rem] h-[350px] p-8 flex flex-col justify-between hover:bg-blue-100 transition-colors cursor-pointer">
                <div className="text-5xl">✨</div>
                <p className="text-2xl font-medium leading-tight text-blue-900">
                    Exploratory design aimed at finding the intersection of utility and delight.
                </p>
            </div>

            <div className="md:col-span-6 bg-[#ffedd5] rounded-[2rem] h-[350px] overflow-hidden relative group cursor-pointer">
                <img 
                    src="https://picsum.photos/seed/architecture/600/600" 
                    alt="Architecture" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
                    <span className="text-white font-medium">Interior Concepts</span>
                </div>
            </div>

            </div>
        ) : (
            /* RESUME PDF VIEW */
            <div className="w-full h-full flex flex-col rounded-[2rem] overflow-hidden bg-gray-100">
                <div className="flex-1 bg-gray-200 flex items-center justify-center">
                     {/* Using a standard sample PDF for demonstration */}
                     <iframe 
                        src="/personal/resume/Harsh_resume_v1.pdf"
                        className="w-full h-full rounded-[2rem]"
                        title="Resume PDF"
                     ></iframe>
                </div>
            </div>
        )}

      </div>
    </div>
  );
};