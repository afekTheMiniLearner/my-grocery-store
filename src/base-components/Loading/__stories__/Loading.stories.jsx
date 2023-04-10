import React from 'react';

import Loading from '../Loading';

export default {
  title: 'base-components/Loading',
  component: Loading,
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '95vw',
          height: '95vh',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = () => <Loading />;
Default.decorators = [
  (Story) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '700px',
        height: '450px',
      }}
    >
      <Story />
    </div>
  ),
];

export const AdjustSize = (props) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: `${props.height}px`,
      width: `${props.width}px`,
      border: '2px red solid',
    }}
  >
    <Loading />
  </div>
);
AdjustSize.argTypes = {
  height: {
    control: { type: 'number', min: 50, max: 3000, step: 50 },
    defaultValue: 450,
  },
  width: {
    control: { type: 'number', min: 50, max: 4000, step: 50 },
    defaultValue: 700,
  },
};
