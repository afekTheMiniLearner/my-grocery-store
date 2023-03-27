import React from 'react';
import { TailSpin } from 'react-loading-icons';

import './Loading.scss';

export default function Loading() {
  return (
    <div className="loading-content-wrapper">
      <TailSpin stroke="black" speed={0.8} height="10em" width="10em" />
      <h2>Loading data, please wait...</h2>
    </div>
  );
}
