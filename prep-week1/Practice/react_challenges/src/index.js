import React from 'react';
import ReactDOM from 'react-dom/client';

import Challenge1 from './Challenge1/Challenge1';
import Challenge2 from './Challenge2/Challenge2';
import Challenge3 from './Challenge3/Challenge3';
import Challenge4 from './Challenge4/Challenge4';
import Challenge5 from './Challenge5/Challenge5';
import Challenge6 from './Challenge6/Challenge6';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Challenge1 />

    <Challenge2 />

    <Challenge3 />

    <Challenge4 />

    <Challenge5 />

    <Challenge6 />
  </React.StrictMode>,
);
