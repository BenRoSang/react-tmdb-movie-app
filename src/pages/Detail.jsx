import { Clock, Star, Calendar, Play } from 'lucide-react';
import React from 'react'
import { useLoaderData } from 'react-router'

function Detail() {
    const movie = useLoaderData();
    console.log(movie)

    const backdrop = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
    const poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    if(movie.error) {
        return (
            <div className='flex items-center justify-center'>
                <h1 className='text-5xl'>Oop! There is no movie</h1>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white">
            {/* 1. HERO SECTION */}
            <div className="relative h-[70vh] w-full overflow-hidden">
                <img src={backdrop} className="w-full h-full object-cover opacity-30" alt="backdrop" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
            
                <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-8 pb-12 flex flex-col md:flex-row gap-8 items-end">
                    {/* Poster */}
                    <img src={poster} className="w-64 rounded-2xl shadow-2xl border border-slate-800 hidden md:block" alt={movie.title} />
                
                    {/* Info */}
                    <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                    {movie.genres.map(g => (
                        <span key={g.id} className="px-3 py-1 bg-blue-600/20 text-blue-400 border border-blue-600/30 rounded-full text-xs font-bold">
                        {g.name}
                        </span>
                    ))}
                    </div>
                    <h1 className="text-5xl font-black mb-4 tracking-tight">{movie.title}</h1>
                    <div className="flex items-center gap-6 text-slate-300 text-sm">
                    <span className="flex items-center gap-1"><Star size={16} className="text-yellow-500 fill-yellow-500" /> {movie.vote_average.toFixed(1)}</span>
                    <span className="flex items-center gap-1"><Clock size={16} /> {movie.runtime} min</span>
                    <span className="flex items-center gap-1"><Calendar size={16} /> {movie.release_date.split('-')[0]}</span>
                    </div>
                    </div>
                </div>
            </div>

            {/* 2. CONTENT SECTION */}
            <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">Overview</h2>
                        <p className="text-slate-400 leading-relaxed text-lg">{movie.overview}</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">Top Cast</h2>
                        <div className="flex gap-4 overflow-x-auto pb-4">
                        {movie.credits.cast.slice(0, 6).map(person => (
                            <div key={person.id} className="min-w-[120px] text-center">
                            <img 
                                src={`https://image.tmdb.org/t/p/w200${person.profile_path}`} 
                                className="w-full aspect-square object-cover rounded-full mb-2 grayscale hover:grayscale-0 transition-all"
                                alt={person.name}
                            />
                            <p className="text-xs font-bold truncate">{person.name}</p>
                            <p className="text-[10px] text-slate-500 truncate">{person.character}</p>
                            </div>
                        ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar: Trailer or Stats */}
                <div className="space-y-6">
                    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                        <h3 className="font-bold mb-4">Official Trailer</h3>
                        <a 
                        href={`https://www.youtube.com/watch?v=${movie.videos.results[0]?.key}`}
                        target="_blank" rel="noreferrer"
                        className="group relative block rounded-xl overflow-hidden"
                        >
                        <img src={`https://img.youtube.com/vi/${movie.videos.results[0]?.key}/mqdefault.jpg`} className="w-full opacity-60 group-hover:scale-105 transition-all" alt="trailer" />
                        <Play className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white fill-white" size={40} />
                        </a>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Detail