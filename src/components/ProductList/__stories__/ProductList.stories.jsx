import React from "react";

import ProductList from "../ProductList";
import { mockProducts } from "../../../utils";

export default {
  title: "components/ProductList",
  component: ProductList,
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

export const Default = () => <ProductList productList={mockProducts} />;
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
    <ProductList productList={mockProducts} />
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

const Template = (args) => <ProductList {...args} productList={mockProducts} />;

export const Custom = Template.bind({});
Custom.argTypes = {
  
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
