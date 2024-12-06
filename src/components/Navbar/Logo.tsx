import React from 'react';
import { Code2 } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Code2 className="text-blue-500" size={24} />
      <span className="text-xl font-bold text-white">Portfolio</span>
    </div>
  );
};

export default Logo;