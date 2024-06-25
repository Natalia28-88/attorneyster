import React from 'react';
import Navigation from '../components/Navigation';
import NotFoundBlock from '../components/NotFoundBlock';

const NotFound: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#161d27' }} className="pb-50">
      <div className="content" style={{ backgroundColor: '#161d27' }}>
        <Navigation />
        <NotFoundBlock />
      </div>
    </div>
  );
};

export default NotFound;
