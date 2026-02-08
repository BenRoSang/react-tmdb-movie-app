import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';


const navItems = [
    { name: 'Home', path: '/'},
    { name: 'Movies', path: '/movies'},
    { name: 'Series', path: '/series'},
    { name: 'Contact Us', path: '/contact-us'}

]

const Navbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate()

  const handleEnter = (e) => {
    if(e.key === 'Enter' && query != '') {
      navigate(`/search?query=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <nav className="bg-slate-900 container mx-auto text-white px-8 py-4 flex items-center justify-between sticky top-0 z-50 shadow-lg">
      
      {/* LEFT: Logo */}
      <Link to='/' className="flex items-center gap-2 w-1/4">
        {/* <Film className="text-blue-500" size={28} /> */}
        <span className="text-xl font-bold tracking-tighter uppercase">
          Movie<span className="text-blue-500">Hub</span>
        </span>
      </Link>

      {/* CENTER: Navigation Links */}
      <div className="hidden md:flex items-center justify-center gap-8 w-2/4 font-medium">
        {
            navItems.map((item) => (
                <NavLink
                    to={item.path}
                    key={item.path}
                    className={({ isActive }) => 
                        `text-sm font-medium transition-colors ${
                          isActive ? 'text-blue-500' : 'text-slate-400 hover:text-white'
                        }`
                      }
                >
                    {item.name}
                </NavLink>
            ))
        }
        {/* <a href="#" className="hover:text-blue-400 transition-colors">Home</a>
        <a href="#" className="hover:text-blue-400 transition-colors">Movies</a>
        <a href="#" className="hover:text-blue-400 transition-colors">Series</a>
        <a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a> */}
      </div>

      {/* RIGHT: Search Box */}
      <div className="flex justify-end w-1/4">
        <div className="relative group">
          <input
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => handleEnter(e)}
            className="bg-slate-800 text-sm rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-slate-700 transition-all w-40 md:w-64"
          />
          {/* <button 
            className="absolute left-3 top-2.5 text-slate-400 group-focus-within:text-blue-500" 
            size={18} 
          >Search</button> */}
        </div>
      </div>

    </nav>
  );
};

export default Navbar;