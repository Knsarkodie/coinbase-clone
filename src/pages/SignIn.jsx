import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign in:', { email, password });
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

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full rounded-xl border border-[#d1d5db] px-4 py-3 text-sm outline-none transition-colors focus:border-[#0052ff]"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full rounded-xl border border-[#d1d5db] px-4 py-3 text-sm outline-none transition-colors focus:border-[#0052ff]"
          />
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

