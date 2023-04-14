import React from 'react';

import ActionButton from '../ActionButton';

const defaultLabel = 'My-Button';

export default {
  title: 'base-components/ActionButton',
  component: ActionButton,
  parameters: {
    controls: {
      exclude: /^(onClick.*|type|style)$/gi,
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '95vw',
          height: '95vh',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = () => <ActionButton label={defaultLabel} />;
Default.decorators = [
  (Story) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '170px',
        height: '100px',
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
      height: `${props.height}px`,
      width: `${props.width}px`,
      border: '2px red solid',
    }}
  >
    <ActionButton label={defaultLabel} />
  </div>
);
AdjustSize.argTypes = {
  height: {
    control: { type: 'number', min: 50, max: 3000, step: 50 },
    defaultValue: 100,
  },
  width: {
    control: { type: 'number', min: 50, max: 4000, step: 50 },
    defaultValue: 100,
  },
  label: { control: false },
  classes: { control: false },
};

const Template = (args) => <ActionButton {...args} />;

export const Custom = Template.bind({});
Custom.argTypes = {
  label: { control: { type: 'text' }, defaultValue: defaultLabel },
  classes: {
    control: {
      type: 'inline-radio',
    },
    options: ['no-class', 'warning'],
  },
};
Custom.decorators = [
  (Story) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '500px',
        height: '120px',
      }}
    >
      <Story />
    </div>
  ),
];
