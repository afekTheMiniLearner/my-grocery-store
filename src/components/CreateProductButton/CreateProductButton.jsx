import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ImPlus } from 'react-icons/im';

import './CreateProductButton.scss';
import { ContentWrapper } from '@base-components';

export default function CreateProductButton() {
  const navigate = useNavigate();

  return (
    <ContentWrapper
      className="product"
      style={{ justifyContent: 'center' }}
      onClick={() => navigate('/product/new')}
    >
      <ImPlus size="4em" className="create-icon" />
    </ContentWrapper>
  );
}
