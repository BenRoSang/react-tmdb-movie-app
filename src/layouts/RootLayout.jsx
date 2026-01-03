import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../component/NavBar'

function RootLayout() {
  return (
    <div className='flex flex-col min-h-screen bg-slate-950 text-slate-50'>
        <Navbar />
        <main className='grow container mx-auto px-4 py-8'>
            <Outlet />
        </main>
        <footer className="py-6 border-t border-slate-800 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} MovieApp. All rights reserved.
      </footer>
    </div>
  )
}

export default RootLayout