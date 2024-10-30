import { IconOption } from 'src/components/Icons/type';

export interface TopNavigationProps {
  name?: string;

  leadingIcon?: IconOption;
  onClickLeadingButton?: () => void;

  trailingIcon?: IconOption;
  onClickTrailingButton?: () => void;
}
