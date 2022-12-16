import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav className="bg-gray-100 border-b border-gray-300 shadow-md fixed w-full z-50">
      <ul className="container flex justify-between items-center py-2">
        <li>
          <NavLink to="/" className="text-lg sm:text-3xl font-semibold">
            <span className="text-green-400">Dev</span>
            <span className="text-blue-400">Schapy</span>
          </NavLink>
        </li>

        <ul className="flex gap-5 sm:gap-8 items-center">
          <li className="relative">
            <NavLink
              to="/"
              className="headerNavLink text-[12px] sm:text-base text-green-500 nav-after"
            >
              Home
            </NavLink>
          </li>
          <li className="relative">
            <NavLink
              to="/task"
              className="headerNavLink text-[12px] sm:text-base text-green-500 nav-after"
            >
              Manage Your Task
            </NavLink>
          </li>
        </ul>
      </ul>
    </nav>
  )
}

export default NavigationBar;