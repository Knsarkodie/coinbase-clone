import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Sparkline from '../components/crypto/Sparkline';

const features = [
  {
    title: 'The most trusted crypto platform',
    body: 'Security, transparency, and simple tools for every level of investor.'
  },
  {
    title: 'Simple buy and sell experience',
    body: 'Fund your account and start trading in minutes with clear pricing.'
  },
  {
    title: 'Built for beginners and pros',
    body: 'Use straightforward tools today and advanced products when you are ready.'
  }
];

const Home = () => {
  const [cryptocurrencies, setCryptocurrencies] = useState([]);

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const { data } = await axios.get('/api/crypto');
        setCryptocurrencies(data);
      } catch (error) {
        console.error('Error fetching cryptos', error);
      }
    };
    fetchCryptos();
  }, []);

  return (
    <div className="bg-white">
      <section className="border-b border-[#eef2f7]">
        <div className="mx-auto grid w-full max-w-[1360px] gap-10 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-20 lg:pt-16">
          <div>
            <p className="mb-5 inline-block rounded-full bg-[#eef4ff] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#0052ff]">
              Jump start your crypto portfolio
            </p>
            <h1 className="max-w-xl text-[42px] font-semibold leading-[1.04] text-[#0a0b0d] md:text-[72px]">
              The future of money is here
            </h1>
            <p className="mt-6 max-w-xl text-[18px] leading-8 text-[#4b5563]">
              Coinbase makes it simple and secure to buy, sell, and hold Bitcoin, Ethereum, and hundreds of other assets.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/signup"
                className="rounded-full bg-[#0052ff] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0044d6]"
              >
                Get started
              </Link>
              <Link
                to="/learn"
                className="rounded-full border border-[#d1d5db] px-7 py-3 text-sm font-semibold text-[#111827] transition-colors hover:bg-[#f8fafc]"
              >
                Learn more
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-[#e5e7eb] bg-white p-6 shadow-[0_8px_30px_rgba(2,6,23,0.06)] md:p-8">
            <h2 className="text-2xl font-semibold text-[#111827]">Sign up and get up to $200 in crypto</h2>
            <p className="mt-2 text-sm text-[#6b7280]">Terms apply. New users only.</p>
            <form className="mt-6 space-y-4">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-xl border border-[#d1d5db] px-4 py-3.5 text-sm outline-none transition-colors focus:border-[#0052ff]"
              />
              <button
                type="button"
                className="w-full rounded-xl bg-[#0052ff] px-4 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#0044d6]"
              >
                Sign up
              </button>
            </form>
            <p className="mt-3 text-xs text-[#6b7280]">This site is a frontend clone for learning purposes.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e7ebf0] bg-[#f6f8fb]">
        <div className="mx-auto grid w-full max-w-[1360px] items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-[56px] bg-[#02060c] p-8 md:p-10">
            <img
              src="/advanced-trader-mockup.svg"
              alt="Advanced trading tools"
              className="mx-auto w-full max-w-[700px]"
            />
          </div>

          <div>
            <h2 className="max-w-[580px] text-[48px] font-semibold leading-[1.06] text-[#0a0b0d] md:text-[66px]">
              Powerful tools, designed for the advanced trader.
            </h2>
            <p className="mt-6 max-w-[600px] text-[18px] leading-10 text-[#4b5563]">
              Powerful analytical tools with the safety and security of Coinbase deliver the ultimate trading experience.
              Tap into sophisticated charting capabilities, real-time order books, and deep liquidity across hundreds of markets.
            </p>
            <button className="mt-8 rounded-full bg-[#05070c] px-11 py-4 text-lg font-semibold text-white hover:bg-[#0c1220]">
              Start trading
            </button>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e7ebf0] bg-[#f6f8fb]">
        <div className="mx-auto grid w-full max-w-[1360px] items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-[56px] bg-[#e5e8ec] p-8 md:p-10">
            <img
              src="/base-app-mockup.svg"
              alt="Base app mobile experience"
              className="mx-auto w-full max-w-[620px]"
            />
          </div>

          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#d7dbe2] px-5 py-2 text-sm font-medium text-[#415270]">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0052ff] text-xs font-semibold text-white">C</span>
              BASE APP
            </p>
            <h2 className="mt-6 max-w-[620px] text-[48px] font-semibold leading-[1.07] text-[#0a0b0d] md:text-[66px]">
              Countless ways to earn crypto with the Base App.
            </h2>
            <p className="mt-6 max-w-[580px] text-[18px] leading-10 text-[#4b5563]">
              An everything app to trade, create, discover, and chat, all in one place.
            </p>
            <button className="mt-8 rounded-full bg-[#05070c] px-11 py-4 text-lg font-semibold text-white hover:bg-[#0c1220]">
              Learn more
            </button>
          </div>
        </div>
      </section>

      <section className="border-b border-[#eef2f7] bg-[#f7f9fc]">
        <div className="mx-auto w-full max-w-[1360px] px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-[#111827]">Explore top assets</p>
          <div className="mt-4 overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white shadow-[0_8px_30px_rgba(2,6,23,0.04)]">
            <table className="w-full">
              <thead className="border-b border-[#eef2f7] bg-[#fcfdff] text-left text-xs uppercase tracking-wide text-[#6b7280]">
                <tr>
                  <th className="px-5 py-3">Asset</th>
                  <th className="px-5 py-3">Price</th>
                  <th className="px-5 py-3">Change</th>
                  <th className="px-5 py-3">Chart</th>
                  <th className="px-5 py-3">Market cap</th>
                  <th className="px-5 py-3">Trade</th>
                </tr>
              </thead>
              <tbody>
                {cryptocurrencies.slice(0, 4).map((asset) => (
                  <tr key={asset._id} className="border-b border-[#f3f4f6] text-sm transition-colors hover:bg-[#fafcff] last:border-b-0">
                    <td className="px-5 py-4 font-semibold text-[#111827]">
                      <Link to={`/asset/${asset._id}`} className="inline-flex items-center gap-3 hover:text-[#0052ff]">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#eef4ff] text-[10px] font-bold" style={{ color: '#0052ff' }}>
                          {asset.symbol.slice(0, 3)}
                        </span>
                        <span>
                          {asset.name} <span className="ml-1 text-xs text-[#6b7280]">{asset.symbol}</span>
                        </span>
                      </Link>
                    </td>
                    <td className="px-5 py-4 font-medium text-[#111827]">${asset.price.toLocaleString()}</td>
                    <td className={`px-5 py-4 font-semibold ${asset.change24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {asset.change24h >= 0 ? '+' : ''}
                      {asset.change24h}%
                    </td>
                    <td className="px-5 py-4">
                      <Sparkline
                        data={[asset.price * 0.9, asset.price * 1.1, asset.price * 0.95, asset.price, asset.price * (1 + (asset.change24h / 100))]}
                        stroke={asset.change24h >= 0 ? '#16a34a' : '#dc2626'}
                      />
                    </td>
                    <td className="px-5 py-4 text-[#4b5563]">${(asset.price * 1000000).toLocaleString()}</td>
                    <td className="px-5 py-4">
                      <Link
                        to={`/asset/${asset._id}`}
                        className="rounded-full border border-[#d1d5db] px-4 py-2 text-xs font-semibold text-[#111827] hover:bg-[#f8fafc]"
                      >
                        Buy
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-[1360px] px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-[#0a0b0d]">Why people choose Coinbase</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.title} className="rounded-2xl border border-[#e5e7eb] bg-white p-6">
                <h3 className="text-lg font-semibold text-[#111827]">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#4b5563]">{feature.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
