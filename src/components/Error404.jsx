import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';

const NotFound = () => {
  const handleGoBack = () => {
    window.history.length > 1 ? window.history.back() : window.location.href = '/';
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 px-4 text-center">
      {/* Animated 404 illustration */}
      <div className="relative mb-20">
        <div className="w-56 md:w-80 h-64 md:h-80 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        
        {/* Character */}
        <div className="relative z-10 mb-4">
          <div className="w-32 h-40 bg-emerald-400 rounded-t-full mx-auto relative animate-bounce">
            {/* Eyes */}
            <div className="absolute top-8 left-6 w-3 h-3 bg-white rounded-full"></div>
            <div className="absolute top-8 right-6 w-3 h-3 bg-white rounded-full"></div>
            <div className="absolute top-9 left-7 w-1 h-1 bg-black rounded-full"></div>
            <div className="absolute top-9 right-7 w-1 h-1 bg-black rounded-full"></div>
            
            {/* Mouth */}
            <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-red-400 rounded-full"></div>
            
            {/* Arms */}
            <div className="absolute top-16 -left-4 w-8 h-3 bg-emerald-400 rounded-full transform -rotate-12"></div>
            <div className="absolute top-16 -right-4 w-8 h-3 bg-emerald-400 rounded-full transform rotate-12"></div>
            
            {/* Horns */}
            <div className="absolute -top-2 left-8 w-3 h-6 bg-emerald-300 rounded-t-full transform -rotate-12"></div>
            <div className="absolute -top-2 right-8 w-3 h-6 bg-emerald-300 rounded-t-full transform rotate-12"></div>
          </div>
          
          {/* Legs */}
          <div className="flex justify-center gap-4 -mt-2">
            <div className="w-4 h-8 bg-gray-600 rounded-b-full"></div>
            <div className="w-4 h-8 bg-gray-600 rounded-b-full"></div>
          </div>
          
          {/* Feet */}
          <div className="flex justify-center gap-2 -mt-1">
            <div className="w-6 h-3 bg-emerald-400 rounded-full"></div>
            <div className="w-6 h-3 bg-emerald-400 rounded-full"></div>
          </div>
        </div>
        
        {/* Speech bubble */}
        <div className="absolute -top-4 right-4 bg-emerald-400 text-white px-3 py-1 rounded-lg text-sm font-bold transform rotate-12 animate-pulse">
          Oops!
        </div>
      </div>

      {/* 404 Text */}
      <div className="text-4xl md:text-7xl font-bold text-emerald-400 mb-6 opacity-20 select-none">
        404
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-emerald-600 mb-4">
        Oops! Page not found.
      </h1>
      
      <p className="text-gray-600 text-base md:text-lg mb-8 max-w-md leading-relaxed">
        The page you're looking for doesn't exist or has been moved. 
        Don't worry though, let's get you back on track!
      </p>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleGoBack}
          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          aria-label="Go back to previous page"
        >
          <ArrowLeft size={20} />
          Go Back
        </button>
        
        <button
          onClick={() => window.location.href = '/'}
          className="flex items-center gap-2 bg-white hover:bg-gray-50 text-emerald-600 font-medium px-6 py-3 rounded-lg border-2 border-emerald-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          aria-label="Go to homepage"
        >
          <Home size={20} />
          Home Page
        </button>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-emerald-300 rounded-full opacity-50 animate-ping"></div>
      <div className="absolute top-20 right-20 w-2 h-2 bg-teal-400 rounded-full opacity-50 animate-ping" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-emerald-400 rounded-full opacity-50 animate-ping" style={{animationDelay: '2s'}}></div>
    </div>
  );
};

export default NotFound;