// src/components/DeviceIcons.js
import React from 'react';

const DeviceIcons = () => (
  <div className="flex justify-center items-center space-x-8 mt-8">
    <svg className="w-16 h-10 text-red-600" viewBox="0 0 48 30" fill="none" stroke="currentColor" strokeWidth="1.0">
      <path d="M1 1h46v22H1z"/>
      <path d="M1 23h46v6H1z"/>
      <path d="M16 26h16"/>
    </svg>
    <svg className="w-20 h-16 text-red-600" viewBox="0 0 48 38" fill="none" stroke="currentColor" strokeWidth="1.0">
      <rect x="1" y="1" width="46" height="30" rx="2" ry="2"/>
      <path d="M16 36H32"/>
      <path d="M24 31V36"/>
    </svg>
    <div className="flex flex-row space-x-1 items-center space-y-1">
      <svg className="w-6 h-10 text-red-600 " viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="1.0">
        <rect x="1" y="1" width="22" height="32" rx="3" ry="3"/>
        <circle cx="12" cy="28" r="1" fill="currentColor"/>
      </svg>
      <svg className="w-4 h-6 text-red-600" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1.0">
        <rect x="1" y="1" width="14" height="22" rx="2" ry="2"/>
        <circle cx="8" cy="20" r="0.75" fill="currentColor"/>
      </svg>
    </div>
  </div>
);

export default DeviceIcons;