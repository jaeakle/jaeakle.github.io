import React from 'react';
import Pdf from '../docs/Jack Eakle Resume.pdf'

const ResumePage = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <iframe 
        src={Pdf} 
        style={{ width: '100%', height: '100vh' }} 
        frameBorder="0"
        title="Resume"
      />
    </div>
  );
};

export default ResumePage;
