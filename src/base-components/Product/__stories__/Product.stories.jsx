import React from "react";
import Product from "../Product";

export default {
  title: "base-components/Product",
  component: Product,
  parameters: {
    controls: {
      exclude: /^(onAdd|onRemove|id)$/gi,
    },
  },
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

export const Default = () => <Product />;
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
    <Product />
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
  selectedCount: { control: false },
  productName: { control: false },
  price: { control: false },
};

const Template = (args) => <Product {...args} />;

export const Custom = Template.bind({});
Custom.argTypes = {
  productName: { control: false },
  selectedCount: {
    control: { type: "number", min: 0, max: 1000, step: 5 },
    defaultValue: 10,
  },
  price: {
    control: { type: "number", min: 0, max: 9999, step: 10 },
    defaultValue: 5,
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
