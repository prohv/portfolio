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
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-min">

            {/* Project Image Card 1 */}
            <div className="md:col-span-7 bg-[#e8e6e1] rounded-[2rem] overflow-hidden shadow-sm min-h-[350px] relative group cursor-pointer">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://picsum.photos/seed/project1/800/600"
                        alt="Project 1"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                </a>
            </div>

            {/* Project Image Card 2 */}
            <div className="md:col-span-5 bg-gray-200 rounded-[2rem] overflow-hidden min-h-[350px] relative group cursor-pointer">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://picsum.photos/seed/project2/600/600"
                        alt="Project 2"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                </a>
            </div>

            {/* Project Image Card 3 */}
            <div className="md:col-span-5 bg-gray-300 rounded-[2rem] overflow-hidden min-h-[350px] relative group cursor-pointer">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://picsum.photos/seed/project3/600/400"
                        alt="Project 3"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                </a>
            </div>

            {/* Project Image Card 4 */}
            <div className="md:col-span-7 bg-gray-400 rounded-[2rem] overflow-hidden min-h-[350px] relative group cursor-pointer">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://picsum.photos/seed/project4/600/400"
                        alt="Project 4"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                </a>
            </div>

            {/* Project Image Card 5 */}
            <div className="md:col-span-6 bg-gray-50 rounded-[2rem] overflow-hidden min-h-[350px] relative group cursor-pointer">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://picsum.photos/seed/project5/600/600"
                        alt="Project 5"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                </a>
            </div>

            {/* Project Image Card 6 */}
            <div className="md:col-span-6 bg-gray-100 rounded-[2rem] overflow-hidden min-h-[350px] relative group cursor-pointer">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://picsum.photos/seed/project6/600/600"
                        alt="Project 6"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                </a>
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