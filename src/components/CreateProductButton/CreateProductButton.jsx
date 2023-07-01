import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TbSquareRoundedPlus as CreateIcon } from 'react-icons/tb';

import './CreateProductButton.scss';
import { ContentWrapper } from '@base-components';

export default function CreateProductButton() {
  const navigate = useNavigate();

  return (
    <ContentWrapper
      className="product"
      onClick={() => navigate('/product/new')}
    >
      <section>Add product</section>
      <CreateIcon size="4em" className="create-icon" />
    </ContentWrapper>
  );
}
