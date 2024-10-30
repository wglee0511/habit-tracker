import React from 'react';

import styled from '@emotion/styled';

const S = {
  Container: styled.div`
    flex: 1;
    display: flex;
    width: 100%;
    justify-content: center;
  `,
  Content: styled.div`
    width: 600px;
    height: 100%;

    @media screen and (max-width: 600px) {
      width: 100%;
    }
  `,
};

const ResponsiveContainer = ({
  children,
  style,
}: React.PropsWithChildren<{ style?: React.CSSProperties }>) => (
  <S.Container style={style}>
    <S.Content>{children}</S.Content>
  </S.Container>
);

export default ResponsiveContainer;
