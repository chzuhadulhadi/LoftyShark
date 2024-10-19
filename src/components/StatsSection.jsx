import React from "react";

const StatsSection = () => {
  const stats = [
    { value: 40, label: "Client NPS Score" },
    { value: 42, label: "of our clients have worked with us for 2+ years" },
  ];

  return (
    <div className="flex justify-center space-x-10 py-10">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          {/* SVG Progress Circle */}
          <div className="relative w-32 h-32">
            <svg className="w-full h-full">
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                stroke="#e5e5e5"
                strokeWidth="10"
                fill="transparent"
                strokeDasharray="283"
                strokeDashoffset="71"
                transform="rotate(180, 50, 50)"
              />
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                stroke="#4ade80"
                strokeWidth="10"
                fill="transparent"
                strokeDasharray="283"
                strokeDashoffset={`${283 - (stat.value / 100) * 283}`}
                transform="rotate(180, 50, 50)"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-4xl font-semibold text-green-400">
              {stat.value}%
            </div>
          </div>
          {/* Label */}
          <p className="mt-4 text-sm text-gray-600">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
