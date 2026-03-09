import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { cryptocurrencies } from '../data/mockData';
import Sparkline from '../components/crypto/Sparkline';

const AssetDetail = () => {
  const { id } = useParams();
  const crypto = cryptocurrencies.find((asset) => asset.id === id);

  if (!crypto) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center bg-white px-4">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-[#111827]">Asset not found</h1>
          <p className="mt-2 text-[#6b7280]">The requested asset does not exist in this demo list.</p>
          <Link to="/explore" className="mt-5 inline-block text-sm font-semibold text-[#0052ff]">
            Back to prices
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f8fafc]">
      <div className="mx-auto grid w-full max-w-[1200px] gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
        <section className="rounded-3xl border border-[#e5e7eb] bg-white p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-6 border-b border-[#eef2f7] pb-6">
            <div className="flex items-center gap-4">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#eef4ff] text-xs font-bold" style={{ color: crypto.color }}>
                {crypto.symbol}
              </span>
              <div>
                <h1 className="text-3xl font-semibold text-[#0a0b0d]">{crypto.name}</h1>
                <p className="text-sm text-[#6b7280]">{crypto.symbol}</p>
              </div>
            </div>
            <div>
              <p className="text-3xl font-semibold text-[#111827]">${crypto.price.toLocaleString()}</p>
              <p className={`text-sm font-semibold ${crypto.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {crypto.change >= 0 ? '+' : ''}
                {crypto.change}% (24h)
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-[#111827]">About {crypto.name}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-[#4b5563]">{crypto.description}</p>
          </div>

          <div className="mt-8 rounded-2xl border border-[#e5e7eb] p-4 md:p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-lg font-semibold text-[#111827]">{crypto.name} price chart</h2>
              <div className="inline-flex rounded-full border border-[#d1d5db] p-1 text-xs font-semibold text-[#4b5563]">
                <button className="rounded-full bg-[#eef4ff] px-3 py-1 text-[#0052ff]">1H</button>
                <button className="rounded-full px-3 py-1">1D</button>
                <button className="rounded-full px-3 py-1">1W</button>
                <button className="rounded-full px-3 py-1">1M</button>
                <button className="rounded-full px-3 py-1">1Y</button>
              </div>
            </div>
            <Sparkline
              data={crypto.history}
              width={700}
              height={210}
              fill
              stroke={crypto.change >= 0 ? '#16a34a' : '#dc2626'}
            />
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-[#e5e7eb] p-4">
              <p className="text-xs uppercase text-[#6b7280]">Market cap</p>
              <p className="mt-2 text-xl font-semibold text-[#111827]">${crypto.marketCap}</p>
            </div>
            <div className="rounded-2xl border border-[#e5e7eb] p-4">
              <p className="text-xs uppercase text-[#6b7280]">Volume (24h)</p>
              <p className="mt-2 text-xl font-semibold text-[#111827]">${crypto.volume}</p>
            </div>
            <div className="rounded-2xl border border-[#e5e7eb] p-4">
              <p className="text-xs uppercase text-[#6b7280]">Circulating supply</p>
              <p className="mt-2 text-xl font-semibold text-[#111827]">{crypto.supply}</p>
            </div>
          </div>
        </section>

        <aside className="h-fit rounded-3xl border border-[#e5e7eb] bg-white p-6">
          <h2 className="text-xl font-semibold text-[#111827]">Trade {crypto.symbol}</h2>
          <p className="mt-2 text-sm text-[#6b7280]">Buy or sell in a Coinbase-style flow.</p>

          <div className="mt-6 space-y-3">
            <button className="w-full rounded-xl bg-[#0052ff] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0044d6]">
              Buy
            </button>
            <button className="w-full rounded-xl border border-[#d1d5db] px-4 py-3 text-sm font-semibold text-[#111827] transition-colors hover:bg-[#f8fafc]">
              Sell
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default AssetDetail;

