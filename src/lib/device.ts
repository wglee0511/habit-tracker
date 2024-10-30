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

export const getIsIosSafari = () => {
  const { userAgent } = navigator;
  if (/iPad|iPhone|iPod/.test(userAgent)) {
    if (/Safari/.test(userAgent) && !/CriOS/.test(userAgent)) {
      return true;
    }
  }

  return false;
};

export const hapticFeedback = () => {
  const isIosSafari = getIsIosSafari();
  const isWeb = getDeviceType() === 'Web';

  if (!isIosSafari && !isWeb) {
    window.navigator.vibrate(200);
  }
};
