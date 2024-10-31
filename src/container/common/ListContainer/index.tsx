import React, { PropsWithChildren } from 'react';

import styled from '@emotion/styled';

const S = {
  Container: styled.div`
    flex: 1;
    flex-direction: column;
    display: flex;
    width: 100%;
    padding: 12px 20px;
    gap: 12px;
  `,
};

const ListContainer = ({ children }: PropsWithChildren) => <S.Container>{children}</S.Container>;

export default ListContainer;
