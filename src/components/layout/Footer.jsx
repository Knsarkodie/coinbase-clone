import React from 'react';

const columns = [
  {
    title: 'Individuals',
    links: ['Buy & sell', 'Earn free crypto', 'Wallet', 'Card', 'Derivatives']
  },
  {
    title: 'Businesses',
    links: ['Prime', 'Commerce', 'Institutional', 'Asset Hub', 'Onramp']
  },
  {
    title: 'Learn',
    links: ['Blog', 'Market updates', 'Crypto basics', 'Glossary', 'USDC']
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Affiliates', 'Legal & privacy', 'Support']
  }
];

const Footer = () => {
  return (
    <footer className="border-t border-[#e5e7eb] bg-white">
      <div className="mx-auto w-full max-w-[1200px] px-4 pb-10 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <img src="/coinbase-logo.svg" alt="Coinbase" className="h-7" />
            <p className="mt-4 max-w-xs text-sm leading-6 text-[#4b5563]">
              Coinbase-style crypto platform UI clone for learning and frontend practice.
            </p>
            <p className="mt-4 text-xs text-[#6b7280]">English | United States</p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-[#111827]">{column.title}</h3>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-[#4b5563] transition-colors hover:text-[#0052ff]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-[#f0f2f5] pt-5">
          <div className="mb-4 text-xs font-semibold text-red-600 bg-red-50 p-3 rounded-lg border border-red-100">
            DISCLAIMER: This is a student demo project. Do not enter any real personal information, real passwords, or financial data.
          </div>
          <p className="text-xs text-[#6b7280]">© 2026 Coinbase Clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

