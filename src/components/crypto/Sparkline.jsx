import React from 'react';

const Sparkline = ({ data = [], width = 140, height = 44, stroke = '#16a34a', fill = false }) => {
  if (!data.length) {
    return null;
  }

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const stepX = width / (data.length - 1 || 1);

  const points = data
    .map((value, index) => {
      const x = index * stepX;
      const y = height - ((value - min) / range) * height;
      return `${x},${y}`;
    })
    .join(' ');

  const areaPoints = `${points} ${width},${height} 0,${height}`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-11 w-full" preserveAspectRatio="none">
      {fill && <polygon points={areaPoints} fill={stroke} fillOpacity="0.12" />}
      <polyline points={points} fill="none" stroke={stroke} strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default Sparkline;
