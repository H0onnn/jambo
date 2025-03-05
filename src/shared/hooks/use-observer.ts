import { RefObject, useEffect, useRef } from "react";

interface UseIntersectionObserverProps {
  onIntersect: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  threshold?: number;
}

export const useIntersectionObserver = <T extends HTMLElement>({
  onIntersect,
  hasNextPage,
  isFetchingNextPage,
  threshold = 0.1,
}: UseIntersectionObserverProps): RefObject<T> => {
  const observerRef = useRef<T>(null);
  const callbackRef = useRef(onIntersect);

  useEffect(() => {
    callbackRef.current = onIntersect;
  }, [onIntersect]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          callbackRef.current();
        }
      },
      { threshold }
    );

    const currentObserverRef = observerRef.current;

    if (currentObserverRef) {
      observer.observe(currentObserverRef);
    }

    return () => {
      if (currentObserverRef) {
        observer.unobserve(currentObserverRef);
      }
    };
  }, [hasNextPage, isFetchingNextPage, threshold]);

  return observerRef as RefObject<T>;
};
