import React, { RefObject, useCallback, useEffect } from 'react';

/**
 * Apply sticky position to an element when it reaches the top of the viewport.
 * @param distanceFromTop
 * @param elementRef
 */
export const useSticky = (
  distanceFromTop: number,
  elementRef: RefObject<any>
) => {
  let onScroll: () => void = useCallback((): void => {
    if (!elementRef.current) return;
    let box = elementRef.current?.getBoundingClientRect();
    if (box?.top <= distanceFromTop) {
      elementRef.current.style.top = `${distanceFromTop}px`;
      elementRef.current.style.position = 'sticky';
    } else {
      elementRef.current.style.top = '';
      elementRef.current.style.position = '';
    }
  }, [elementRef, distanceFromTop]);
  useEffect(() => {
    window?.addEventListener('scroll', onScroll);
    return () => window?.removeEventListener('scroll', onScroll);
  }, [onScroll]);
};
