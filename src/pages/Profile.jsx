import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    symbol: '',
    price: '',
    image: '',
    change24h: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get('https://knsarkodie-coinbase-backend.onrender.com/api/auth/profile', {
          withCredentials: true
        });
        setUser(data);
      } catch (error) {
        console.error('Not authenticated', error);
        navigate('/signin');
      }
    };
    fetchProfile();
  }, [navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddCrypto = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://knsarkodie-coinbase-backend.onrender.com/api/crypto', {
        name: formData.name,
        symbol: formData.symbol,
        price: Number(formData.price),
        image: formData.image,
        change24h: Number(formData.change24h)
      });
      alert('Cryptocurrency added successfully!');
      setFormData({ name: '', symbol: '', price: '', image: '', change24h: '' });
    } catch (error) {
      console.error(error);
      alert('Error adding cryptocurrency');
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post('https://knsarkodie-coinbase-backend.onrender.com/api/auth/logout', {}, {
        withCredentials: true
      });
      navigate('/signin');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  if (!user) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="bg-[#f8fafc] px-4 py-12 sm:px-6 lg:px-8 min-h-screen">
      <div className="mx-auto w-full max-w-3xl space-y-8">
        
        {/* Profile Card */}
        <div className="rounded-3xl border border-[#e5e7eb] bg-white p-8 shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-semibold text-[#0a0b0d]">User Profile</h1>
              <p className="mt-2 text-[#6b7280]">Welcome back, {user.name}!</p>
              <p className="text-sm font-medium mt-1">Email: {user.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="rounded-xl border border-red-500 text-red-500 px-4 py-2 text-sm font-semibold hover:bg-red-50 transition-colors"
            >
              Sign out
            </button>
          </div>
        </div>

        {/* Add Crypto Form */}
        <div className="rounded-3xl border border-[#e5e7eb] bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-[#0a0b0d]">Add New Cryptocurrency</h2>
          <form onSubmit={handleAddCrypto} className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name (e.g. Bitcoin)"
                required
                className="w-full rounded-xl border border-[#d1d5db] px-4 py-3 text-sm outline-none focus:border-[#0052ff]"
              />
              <input
                name="symbol"
                value={formData.symbol}
                onChange={handleChange}
                placeholder="Symbol (e.g. BTC)"
                required
                className="w-full rounded-xl border border-[#d1d5db] px-4 py-3 text-sm outline-none focus:border-[#0052ff]"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                name="price"
                type="number"
                step="any"
                value={formData.price}
                onChange={handleChange}
                placeholder="Price in USD"
                required
                className="w-full rounded-xl border border-[#d1d5db] px-4 py-3 text-sm outline-none focus:border-[#0052ff]"
              />
              <input
                name="change24h"
                type="number"
                step="any"
                value={formData.change24h}
                onChange={handleChange}
                placeholder="24h Change % (e.g. 5.5 or -2.1)"
                required
                className="w-full rounded-xl border border-[#d1d5db] px-4 py-3 text-sm outline-none focus:border-[#0052ff]"
              />
            </div>
            <input
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Image URL (optional)"
              className="w-full rounded-xl border border-[#d1d5db] px-4 py-3 text-sm outline-none focus:border-[#0052ff]"
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-[#0052ff] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0044d6]"
            >
              Add Cryptocurrency
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Profile;
