import React from 'react';
import ProductEditorOffline from '../ProductEditorOffline';

export default {
  title: 'components/ProductEditor',
  component: ProductEditorOffline,
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

export const Default = () => <ProductEditorOffline />;
Default.decorators = [
  (Story) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '350px',
        height: '400px',
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
    <ProductEditorOffline />
  </div>
);
AdjustSize.argTypes = {
  height: {
    control: { type: 'number', min: 50, max: 3000, step: 50 },
    defaultValue: 300,
  },
  width: {
    control: { type: 'number', min: 50, max: 4000, step: 50 },
    defaultValue: 350,
  },
  productName: { control: false },
  price: { control: false },
};
