import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Explore = () => {
  const [cryptocurrencies, setCryptocurrencies] = useState([]);
  const [filter, setFilter] = useState('all'); // all, gainers, new

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        let endpoint = '/api/crypto';
        if (filter === 'gainers') endpoint = '/api/crypto/gainers';
        if (filter === 'new') endpoint = '/api/crypto/new';
        
        const { data } = await axios.get(endpoint);
        setCryptocurrencies(data);
      } catch (error) {
        console.error('Error fetching cryptos', error);
      }
    };
    fetchCryptos();
  }, [filter]);

  return (
    <div className="bg-[#f7f9fc] min-h-screen">
      <div className="mx-auto w-full max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-[#0a0b0d]">Explore assets</h1>
        <p className="mt-3 text-[17px] text-[#4b5563]">Discover the latest trends in the crypto market.</p>

        <div className="mt-6 flex space-x-4">
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${filter === 'all' ? 'bg-[#0052ff] text-white' : 'bg-white text-[#111827] border border-[#d1d5db] hover:bg-[#f8fafc]'}`}
          >
            All Tradable
          </button>
          <button 
            onClick={() => setFilter('gainers')}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${filter === 'gainers' ? 'bg-[#0052ff] text-white' : 'bg-white text-[#111827] border border-[#d1d5db] hover:bg-[#f8fafc]'}`}
          >
            Top Gainers
          </button>
          <button 
            onClick={() => setFilter('new')}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${filter === 'new' ? 'bg-[#0052ff] text-white' : 'bg-white text-[#111827] border border-[#d1d5db] hover:bg-[#f8fafc]'}`}
          >
            New Listings
          </button>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white shadow-[0_8px_30px_rgba(2,6,23,0.04)]">
          <table className="w-full">
            <thead className="border-b border-[#eef2f7] bg-[#fcfdff] text-left text-xs uppercase tracking-wide text-[#6b7280]">
              <tr>
                <th className="px-5 py-3">Name</th>
                <th className="px-5 py-3">Price</th>
                <th className="px-5 py-3">24h</th>
                <th className="px-5 py-3">Market cap</th>
                <th className="px-5 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {cryptocurrencies.map((asset) => (
                <tr key={asset._id} className="border-b border-[#f3f4f6] text-sm transition-colors hover:bg-[#fafcff] last:border-b-0">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#eef4ff] text-[10px] font-bold" style={{ color: '#0052ff' }}>
                        {asset.symbol.slice(0, 3)}
                      </span>
                      <div>
                        <p className="font-semibold text-[#111827]">{asset.name}</p>
                        <p className="text-xs text-[#6b7280]">{asset.symbol}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 font-medium text-[#111827]">${asset.price.toLocaleString()}</td>
                  <td className={`px-5 py-4 font-semibold ${asset.change24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {asset.change24h >= 0 ? '+' : ''}
                    {asset.change24h}%
                  </td>
                  <td className="px-5 py-4 text-[#4b5563]">${(asset.price * 1000000).toLocaleString()}</td>
                  <td className="px-5 py-4">
                    <Link
                      to={`/asset/${asset._id}`}
                      className="rounded-full border border-[#d1d5db] px-4 py-2 text-xs font-semibold text-[#111827] transition-colors hover:bg-[#f8fafc]"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
              {cryptocurrencies.length === 0 && (
                <tr>
                  <td colSpan="5" className="px-5 py-8 text-center text-[#6b7280]">
                    No cryptocurrencies found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Explore;
