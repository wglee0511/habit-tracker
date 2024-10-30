import { HTMLAttributes } from 'react';

export interface ModalCommonProps extends HTMLAttributes<HTMLDivElement> {
  visible?: boolean;
  onCloseModal?: () => void;
}

export interface FlexibleModalProps extends ModalCommonProps {
  width?: number;
}

export interface ModalSizeStyleProps {
  width?: number;
  backgroundcolor: string;
}
