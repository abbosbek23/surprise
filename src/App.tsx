import { useState,  } from 'react';
import { Heart, X } from 'lucide-react';
import useConfetti from './useConfetti';
import imagesurprise from "./DALL·E 2025-03-06 15.52.52 - A creative and artistic representation of the number 8 for International Women's Day (March 8). The number 8 is elegantly designed with floral decorat.webp";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const { fire, Confetti } = useConfetti();

  const handleClick = () => {
    setIsModalOpen(true);
    fire();
    setTimeout(() => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 2000);
    }, 3000);
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center" 
      style={{ backgroundImage: `url(${imagesurprise})` }}
    >
      <Confetti />
      <button
        onClick={handleClick}
        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-lg hover:transform hover:scale-105 hover:shadow-xl overflow-hidden"
      >
        <span className="absolute w-full h-full bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        <span className="relative flex items-center gap-2">
          Celebrate Women's Day <Heart className="w-5 h-5 text-pink-200" />
        </span>
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white max-w-[500px] rounded-2xl p-8 w-full relative animate-fadeIn shadow-2xl flex flex-col items-center">
          {showNotification && (
        <div className="fixed top-5 right-8 bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-lg animate-fadeIn">
          You must click Next Button
        </div>
      )}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-6 text-center">
              Happy International Women's Day!
            </h2>
            
            <p className="text-gray-700 text-center mb-4">
            🌸Dear Muslima, today we celebrate incredible women like you—strong, kind, and inspiring!  
  Your resilience, intelligence, and kindness make the world a brighter place every day.  
  Keep believing in yourself, chasing your dreams, and inspiring those around you.  
  You are truly amazing! 💖
</p>




            <a 
              href="https://t.me/Abbosbek_23" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-lg hover:transform hover:scale-105 hover:shadow-xl overflow-hidden mt-4"
            >
              <span className="absolute w-full h-full bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative">Next</span>
            </a>
          </div>
        </div>
      )}

     
    </div>
  );
}

export default App;