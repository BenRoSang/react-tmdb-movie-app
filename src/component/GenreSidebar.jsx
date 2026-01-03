import React, { useState } from 'react';

// const GenreSidebar = ({ movieGenres, seriesGenres, movies, series }) => {
const GenreSidebar = ({ genresMovie, genresSerie }) => {
  const [activeTab, setActiveTab] = useState('movies');

  const currentGenres = activeTab === 'movies' ? genresMovie : genresSerie;

  return (
    <div className="w-72 bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden sticky top-24">
      {/* 1. Header Tabs */}
      <div className="flex border-b border-slate-800">
        <button
          onClick={() => setActiveTab('movies')}
          className={`flex-1 py-3 text-sm font-bold transition-colors ${
            activeTab === 'movies' ? 'text-blue-500 bg-slate-800/50' : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          MOVIES
        </button>
        <button
          onClick={() => setActiveTab('series')}
          className={`flex-1 py-3 text-sm font-bold transition-colors ${
            activeTab === 'series' ? 'text-blue-500 bg-slate-800/50' : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          SERIES
        </button>
      </div>

      {/* 2. Scrollable Genre List */}
      <div className="h-[450px] overflow-y-auto custom-scrollbar p-4">
        <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">
          Browse by Genre
        </h3>
        
        <div className="space-y-1">
          {currentGenres.map((genre) => {
            
            return (
              <button
                key={genre.id}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-slate-300 hover:bg-blue-600 hover:text-white transition-all group"
              >
                <span className="text-sm font-medium">{genre.name}</span>
                <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded-full group-hover:bg-blue-500 transition-colors">
                  {genre.total}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GenreSidebar;