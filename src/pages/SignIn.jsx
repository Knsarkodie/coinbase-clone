import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await axios.post('https://knsarkodie-coinbase-backend.onrender.com/api/auth/login', { email, password }, {
        withCredentials: true
      });
      // Redirect to profile
      navigate('/profile');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid email or password');
    }
  };

  return (
    <div className="bg-[#f8fafc] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[440px] rounded-3xl border border-[#e5e7eb] bg-white p-8 shadow-sm">
        <img src="/coinbase-logo.svg" alt="Coinbase" className="h-7" />
        <h1 className="mt-6 text-3xl font-semibold text-[#0a0b0d]">Sign in</h1>
        <p className="mt-2 text-sm text-[#6b7280]">
          New to Coinbase?{' '}
          <Link to="/signup" className="font-semibold text-[#0052ff] hover:text-[#0044d6]">
            Create account
          </Link>
        </p>

        {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-xl text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full rounded-xl border border-[#d1d5db] px-4 py-3 text-sm outline-none transition-colors focus:border-[#0052ff]"
          />
          <div className="space-y-1">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full rounded-xl border border-[#d1d5db] px-4 py-3 text-sm outline-none transition-colors focus:border-[#0052ff]"
            />
            <p className="text-xs text-red-600 font-medium">Demo app – do not use your real password</p>
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-[#0052ff] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0044d6]"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
