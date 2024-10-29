export type Radius = 'none' | 's' | 'base' | 'lg' | 'xl' | 'xxl' | 'circle';

type RadiusStyle = {
  [key in Radius]: string;
};

export const RADIUS: RadiusStyle = {
  none: '0px',
  s: '4px',
  base: '8px',
  lg: '16px',
  xl: '24px',
  xxl: '100px',
  circle: '50%',
} as const;
