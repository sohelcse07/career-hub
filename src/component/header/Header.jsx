import React from 'react'
import { NavLink } from 'react-router'
import { FiSearch } from "react-icons/fi"; // Search icon import

function Header() {

  const links = <>
    <li><NavLink to="/" className={({ isActive }) => isActive ? "text-primary font-bold underline" : ""}>Home</NavLink></li>
    <li><NavLink to="/jobs" className={({ isActive }) => isActive ? "text-primary font-bold underline" : ""}>Jobs</NavLink></li>
    <li><NavLink to="/applied" className={({ isActive }) => isActive ? "text-primary font-bold underline" : ""}>Applied Jobs</NavLink></li>
    <li><NavLink to="/statistics" className={({ isActive }) => isActive ? "text-primary font-bold underline" : ""}>Statistics</NavLink></li>
    <li><NavLink to="/blogs" className={({ isActive }) => isActive ? "text-primary font-bold underline" : ""}>Blog</NavLink></li>
  </>

  return (
    <div className="navbar bg-base-100 shadow-md px-6">
      {/* Left side */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold text-blue-600">Career Hub</a>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      {/* Right side (Beautiful Search bar) */}
      <div className="navbar-end">
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search jobs..."
            className="input w-40 md:w-64 pl-10 pr-4 py-2 rounded-full border border-gray-300 shadow-sm 
                       focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
