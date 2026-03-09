import React from 'react';
import { Link } from 'react-router-dom';
import { cryptocurrencies } from '../data/mockData';

const Explore = () => {
  return (
    <div className="bg-[#f7f9fc]">
      <div className="mx-auto w-full max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-[#0a0b0d]">Tradable assets</h1>
        <p className="mt-3 text-[17px] text-[#4b5563]">Prices are shown for demo purposes in this clone.</p>

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
                <tr key={asset.id} className="border-b border-[#f3f4f6] text-sm transition-colors hover:bg-[#fafcff] last:border-b-0">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#eef4ff] text-[10px] font-bold" style={{ color: asset.color }}>
                        {asset.symbol}
                      </span>
                      <div>
                        <p className="font-semibold text-[#111827]">{asset.name}</p>
                        <p className="text-xs text-[#6b7280]">{asset.symbol}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 font-medium text-[#111827]">${asset.price.toLocaleString()}</td>
                  <td className={`px-5 py-4 font-semibold ${asset.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {asset.change >= 0 ? '+' : ''}
                    {asset.change}%
                  </td>
                  <td className="px-5 py-4 text-[#4b5563]">${asset.marketCap}</td>
                  <td className="px-5 py-4">
                    <Link
                      to={`/asset/${asset.id}`}
                      className="rounded-full border border-[#d1d5db] px-4 py-2 text-xs font-semibold text-[#111827] transition-colors hover:bg-[#f8fafc]"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Explore;

