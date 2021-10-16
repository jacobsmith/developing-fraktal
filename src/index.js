import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* eslint-disable import/no-webpack-loader-syntax */
import DevelopingFraktal from '!babel-loader!@mdx-js/loader!./DevelopingFraktal.mdx'

ReactDOM.render(
  <React.StrictMode>
    <div style={{ maxWidth: '800px', width: '60%', margin: 'auto' }}>
      <DevelopingFraktal />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
