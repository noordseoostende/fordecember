import React from 'react';
import Navs from './Navs';
import Title from './Title';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title
      title="X Office"
      subtitle="Zoek je een film of een acteur?" 
      />
      <Navs />
      

      {children}
  </div>
  );
};

export default MainPageLayout;
