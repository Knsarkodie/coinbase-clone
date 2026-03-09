import React from 'react';
import { learnArticles } from '../data/mockData';

const Learn = () => {
  return (
    <div className="bg-[#f8fafc]">
      <div className="mx-auto w-full max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-[#0a0b0d]">Learn crypto basics</h1>
        <p className="mt-3 max-w-2xl text-lg text-[#4b5563]">
          Educational content inspired by Coinbase Learn, tailored for this clone project.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {learnArticles.map((article) => (
            <article key={article.title} className="rounded-2xl border border-[#e5e7eb] bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#0052ff]">{article.category}</p>
              <h2 className="mt-3 text-xl font-semibold text-[#111827]">{article.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#4b5563]">{article.description}</p>
              <a href={article.link} className="mt-5 inline-block text-sm font-semibold text-[#0052ff] hover:text-[#0044d6]">
                Read article
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Learn;

