/* eslint-disable @typescript-eslint/no-explicit-any */
import { ForwardedRef, useEffect, useRef } from 'react';

// forward로 전달된 ref와 children에서 사용할 ref를 일치시켜주는 hooks
export const useForwardRef = <T>(ref: ForwardedRef<T>, initialValue: any = null) => {
  const targetRef = useRef<T>(initialValue);

  useEffect(() => {
    if (!ref) return;

    if (typeof ref === 'function') {
      ref(targetRef.current);
    } else {
      ref.current = targetRef.current;
    }
  }, [ref]);

  return targetRef;
};
