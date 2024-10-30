import React from 'react';

import styled from '@emotion/styled';
import ReactDOM from 'react-dom';
import { useThemeStore } from 'src/stores';

import { useInitFocus } from '../hook';
import type { ModalCommonProps, ModalSizeStyleProps } from '../type';

const S = {
  Dimmed: styled.div<ModalSizeStyleProps>`
    position: fixed;
    z-index: 999;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.backgroundcolor};
    outline: none;
  `,
};

const FullPageModal = ({
  visible = false,
  children,
}: React.PropsWithChildren<ModalCommonProps>) => {
  const { contentsRef } = useInitFocus();
  const { backgroundColor } = useThemeStore();

  return visible ? (
    ReactDOM.createPortal(
      <S.Dimmed
        ref={contentsRef}
        backgroundcolor={backgroundColor}
      >
        {children}
      </S.Dimmed>,
      (document.querySelector('#modal') as Element) ?? document.body,
    )
  ) : (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <></>
  );
};

export default FullPageModal;
