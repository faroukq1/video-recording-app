import Navbar from '@/component/Navbar';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* render navbar */}
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
