import React, { useEffect, useState } from 'react';

interface CircleProgressBarProps {
  size: number;
  strokeWidth: number;
  percentage: number;
}
const CircleProgressBar: React.FC<CircleProgressBarProps> = ({
  size,
  strokeWidth,
  percentage,
}) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(percentage);
  }, [percentage]);

  const viewBox = `0 0 ${size} ${size}`;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * Math.PI * 2;
  const dash = (progress * circumference) / 100;

  return (
    <svg width={size} height={size} viewBox={viewBox}>
      <circle
        fill="none"
        className="stroke-gray-200"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        fill="none"
        className="stroke-indigo-600"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        strokeDasharray={[dash, circumference - dash].toString()}
        strokeLinecap="round"
        style={{ transition: 'all 0.5s' }}
      />
    </svg>
  );
};

export default CircleProgressBar;
