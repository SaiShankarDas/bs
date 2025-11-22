import React from 'react';
import { LoaderCircle } from 'lucide-react';

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-theme-light-bg">
      <LoaderCircle className="w-12 h-12 animate-spin text-theme-accent-orange-end" />
    </div>
  );
};

export default Loader;
