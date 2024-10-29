export const COLORS = {
  grey25: '#F6F7F8',
  grey50: '#EDEEF1',
  grey100: '#D0D5DC',
  grey200: '#B2BAC5',
  grey300: '#949EAE',
  grey400: '#7D899B',
  grey500: '#67768A',
  grey600: '#596779',
  grey700: '#495463',
  grey800: '#39414D',
  grey900: '#272D36',

  primary100: '#E5F1FE',
  primary200: '#C1DDFD',
  primary300: '#62A2F5',
  primary400: '#2B6DE9',
  primary500: '#0045E0',
  primary600: '#002FC9',
  primary700: '#0006AD',

  red100: '#FFEAED',
  red200: '#FFCBCF',
  red300: '#F84444',
  red400: '#EE1D24',
  red500: '#D00015',

  yellow100: '#FFCD80',
  yellow200: '#FEE500',
  yellow300: '#FFC342',
  yellow400: '#F57800',

  white: '#FFFFFF',
  black: '#000000',
} as const;

const OPACITY = [
  '00',
  '03',
  '05',
  '08',
  '0A',
  '0D',
  '0F',
  '12',
  '14',
  '17',
  '1A',
  '1C',
  '1F',
  '21',
  '24',
  '26',
  '29',
  '2B',
  '2E',
  '30',
  '33',
  '36',
  '38',
  '3B',
  '3D',
  '40',
  '42',
  '45',
  '47',
  '4A',
  '4D',
  '4F',
  '52',
  '54',
  '57',
  '59',
  '5C',
  '5E',
  '61',
  '63',
  '66',
  '69',
  '6B',
  '6E',
  '70',
  '73',
  '75',
  '78',
  '7A',
  '7D',
  '80',
  '82',
  '85',
  '87',
  '8A',
  '8C',
  '8F',
  '91',
  '94',
  '96',
  '99',
  '9C',
  '9E',
  'A1',
  'A3',
  'A6',
  'A8',
  'AB',
  'AD',
  'B0',
  'B3',
  'B5',
  'B8',
  'BA',
  'BD',
  'BF',
  'C2',
  'C4',
  'C7',
  'C9',
  'CC',
  'CF',
  'D1',
  'D4',
  'D6',
  'D9',
  'DB',
  'DE',
  'E0',
  'E3',
  'E6',
  'E8',
  'EB',
  'ED',
  'F0',
  'F2',
  'F5',
  'F7',
  'FA',
  'FC',
  'FF',
];

export const getColorWithOpacity = (hex: string, opacity: number) => hex + OPACITY[opacity * 100];