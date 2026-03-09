import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign up:', formData);
  };

  return (
    <div className="bg-[#f8fafc] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[520px] rounded-3xl border border-[#e5e7eb] bg-white p-8 shadow-sm">
        <img src="/coinbase-logo.svg" alt="Coinbase" className="h-7" />
        <h1 className="mt-6 text-3xl font-semibold text-[#0a0b0d]">Create your account</h1>
        <p className="mt-2 text-sm text-[#6b7280]">
          Already have one?{' '}
          <Link to="/signin" className="font-semibold text-[#0052ff] hover:text-[#0044d6]">
            Sign in
          </Link>
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name"
              required
              className="w-full rounded-xl border border-[#d1d5db] px-4 py-3 text-sm outline-none transition-colors focus:border-[#0052ff]"
            />
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name"
              required
              className="w-full rounded-xl border border-[#d1d5db] px-4 py-3 text-sm outline-none transition-colors focus:border-[#0052ff]"
            />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full rounded-xl border border-[#d1d5db] px-4 py-3 text-sm outline-none transition-colors focus:border-[#0052ff]"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full rounded-xl border border-[#d1d5db] px-4 py-3 text-sm outline-none transition-colors focus:border-[#0052ff]"
          />
          <button
            type="submit"
            className="w-full rounded-xl bg-[#0052ff] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0044d6]"
          >
            Create account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

