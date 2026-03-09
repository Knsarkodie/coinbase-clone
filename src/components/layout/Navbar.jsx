import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { to: '/explore', label: 'Cryptocurrencies' },
  { to: '/explore', label: 'Individuals' },
  { to: '/explore', label: 'Businesses' },
  { to: '/explore', label: 'Institutions' },
  { to: '/explore', label: 'Developers' }
];

const navLinkClass = ({ isActive }) =>
  `text-sm font-semibold transition-colors ${isActive ? 'text-[#0052ff]' : 'text-[#111827] hover:text-[#0052ff]'}`;

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-[#e5e7eb] bg-white">
      <div className="mx-auto flex h-[88px] w-full max-w-[1360px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center">
            <img src="/coinbase-logo.svg" alt="Coinbase" className="h-8" />
          </Link>

          <nav className="hidden items-center gap-8 xl:flex">
            {navItems.map((item) => (
              <NavLink key={item.label} to={item.to} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
            <a href="#" className="text-sm font-semibold text-[#111827] transition-colors hover:text-[#0052ff]">
              Company
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hidden h-14 w-14 items-center justify-center rounded-full bg-[#f1f3f5] text-[21px] md:inline-flex"
            aria-label="Search"
          >
            🔍
          </button>
          <button
            type="button"
            className="hidden h-14 w-14 items-center justify-center rounded-full bg-[#f1f3f5] text-[21px] md:inline-flex"
            aria-label="Region"
          >
            🌐
          </button>
          <Link
            to="/signin"
            className="rounded-full bg-[#f1f3f5] px-5 py-3 text-sm font-semibold text-[#111827] transition-colors hover:bg-[#e8eaee] md:px-8 md:py-4 md:text-xl"
          >
            Sign in
          </Link>
          <Link
            to="/signup"
            className="rounded-full bg-[#0052ff] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0044d6] md:px-8 md:py-4 md:text-xl"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
