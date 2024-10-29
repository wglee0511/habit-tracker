import { ButtonHTMLAttributes } from 'react';

import { IconProps } from '../type';

export interface PressableIconProps extends IconProps, ButtonHTMLAttributes<HTMLButtonElement> {}
