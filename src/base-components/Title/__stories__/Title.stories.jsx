import React from "react";
import Title from "../Title";

export default {
  title: "base-components/Title",
  component: Title,
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "95vw",
          height: "95vh",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = () => <Title />;
Default.decorators = [
  (Story) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        height: "40%",
      }}
    >
      <Story />
    </div>
  ),
];

export const AdjustSize = (props) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: `${props.height}px`,
      width: `${props.width}px`,
      border: "2px red solid",
    }}
  >
    <Title />
  </div>
);
AdjustSize.argTypes = {
  height: {
    control: { type: "number", min: 50, max: 3000, step: 50 },
    defaultValue: 300,
  },
  width: {
    control: { type: "number", min: 50, max: 4000, step: 50 },
    defaultValue: 300,
  },
};

const Template = (args) => <Title {...args} />;

export const Custom = Template.bind({});
Custom.argTypes = {
  backgroundColor: { control: { type: "color" } },
  columns: {
    control: { type: "number", min: 1, max: 50, step: 1 },
    defaultValue: 5,
  },
  rows: {
    control: { type: "number", min: 1, max: 50, step: 1 },
    defaultValue: 4,
  },

  allowRepeatedColors: { control: { type: "boolean" } },
  colors: { control: false },
};
Custom.decorators = [
  (Story) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "400px",
        height: "350px",
      }}
    >
      <Story />
    </div>
  ),
];
