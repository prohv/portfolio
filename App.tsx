import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Gallery } from './components/Gallery';

type ViewState = 'gallery' | 'resume';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('gallery');

  return (
    <div className="min-h-screen bg-[#dcdcdc] p-2 sm:p-4 font-sans antialiased text-gray-900 flex justify-center">
      <div className="max-w-[1600px] w-full grid grid-cols-1 lg:grid-cols-[460px_1fr] gap-4">
        
        {/* Left Column - Sticky on Desktop */}
        <div className="lg:h-[calc(100vh-2rem)] lg:sticky lg:top-4 flex flex-col gap-4">
            <Sidebar onNavigate={setCurrentView} />
        </div>

        {/* Right Column - Scrollable */}
        <div className="flex flex-col gap-4">
          <Gallery currentView={currentView} onNavigate={setCurrentView} />
        </div>

      </div>
    </div>
  );
};

export default App;