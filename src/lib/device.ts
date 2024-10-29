import { ANDROID, IOS, WEB } from './constants';

export const getDeviceType = () => {
  const { userAgent } = navigator;

  // iOS 기기 판별
  if (/iPad|iPhone|iPod/.test(userAgent)) {
    return IOS;
  }

  // Android 기기 판별
  if (/android/i.test(userAgent)) {
    return ANDROID;
  }

  // 웹 브라우저 판별
  return WEB;
};
