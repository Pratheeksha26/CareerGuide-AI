import React, { useEffect } from 'react';
import AptitudeTraining from './AptitudeTraining';

const AptitudePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <AptitudeTraining />;
};

export default AptitudePage;
