import React from "react";

import Header from "../Header";
import Cart from "../../Cart/Cart";

export default {
  title: "base-components/Header",
  component: Header,
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

export const Default = () => (
  <Header>
    <Cart />
  </Header>
);
Default.decorators = [
  (Story) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "50%",
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
      height: `${props.height}px`,
      width: `${props.width}px`,
      border: "2px red solid",
    }}
  >
    <Header>
      <Cart />
    </Header>
  </div>
);
AdjustSize.argTypes = {
  height: {
    control: { type: "number", min: 50, max: 3000, step: 50 },
    defaultValue: 300,
  },
  width: {
    control: { type: "number", min: 50, max: 4000, step: 50 },
    defaultValue: 700,
  },
};

const Template = (args) => (
  <Header {...args}>
    <Cart />
  </Header>
);

export const Custom = Template.bind({});
Custom.argTypes = {
  title: { control: { type: "text" }, defaultValue: "my-grocery-store" },
};
Custom.decorators = [
  (Story) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "50%",
      }}
    >
      <Story />
    </div>
  ),
];
