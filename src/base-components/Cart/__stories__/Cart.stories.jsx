import React from "react";
import Cart from "../Cart";

export default {
  title: "base-components/Cart",
  component: Cart,
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

export const Default = () => <Cart />;
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
      height: `${props.height}px`,
      width: `${props.width}px`,
      border: "2px red solid",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Cart />
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
  totalSelected: { control: false },
  totalPrice: { control: false },
};

const Template = (args) => <Cart {...args} />;

export const Custom = Template.bind({});
Custom.argTypes = {
  totalSelected: {
    control: { type: "number", min: 0, max: 100, step: 5 },
    defaultValue: 0,
  },
  totalPrice: {
    control: { type: "number", min: 0, max: 5000, step: 10 },
    defaultValue: 0,
  },
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
