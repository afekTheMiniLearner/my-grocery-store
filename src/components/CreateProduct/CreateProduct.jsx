import React from 'react';
import PropTypes from 'prop-types';

import { ModifyProduct } from '@base-components';

export default function CreateProduct({ navigateCB }) {
  return (
    <ModifyProduct
      modificationType="post"
      executeButtonLabel="Create product"
      navigateCB={navigateCB}
    />
  );
}

CreateProduct.propTypes = {
  navigateCB: PropTypes.func,
};

CreateProduct.defaultProps = {
  navigateCB: undefined,
};
