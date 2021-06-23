import {
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
  useRef,
  useLayoutEffect,
  useMemo,
} from 'react';

type parserOptions<T> =
  | { raw: true }
  | {
      raw: false;
      serializer: (value: T) => string;
      deserializer: (value: string) => T;
    };

const useLocalStorage = <T>(
  key: string,
  initialValue?: T,
  options?: parserOptions<T>,
): [T | undefined, Dispatch<SetStateAction<T | undefined>>, () => void] => {
  if (!key) {
    throw new Error('useLocalStorage key may not be falsy');
  }

  const deserializer = useMemo(() => {
    if (!options) {
      return JSON.parse;
    }

    if (options.raw) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return <K = any>(value: K) => value;
    }

    return options.deserializer;
  }, [options]);

  const initializer = useRef((refKey: string) => {
    try {
      const serializer = options ? (options.raw ? String : options.serializer) : JSON.stringify;
      const localStorageValue = localStorage.getItem(refKey);

      if (localStorageValue !== null) {
        return deserializer(localStorageValue);
      }

      initialValue && localStorage.setItem(refKey, serializer(initialValue));

      return initialValue;
    } catch {
      // If user is in private mode or has storage restriction
      // localStorage can throw. JSON.parse and JSON.stringify
      // can throw, too.
      return initialValue;
    }
  });

  const [state, setState] = useState<T | undefined>(() => initializer.current(key));

  useLayoutEffect(() => setState(initializer.current(key)), [key]);

  const set: Dispatch<SetStateAction<T | undefined>> = useCallback(
    (valOrFunc) => {
      try {
        let newState: T | undefined;

        if (typeof valOrFunc === 'function') {
          newState = (valOrFunc as Function)(state);
        } else {
          newState = valOrFunc;
        }

        if (typeof newState === 'undefined') {
          return;
        }

        let value: string;

        if (options?.raw && typeof newState === 'string') {
          value = newState;
        } else if (!options?.raw && options?.serializer) {
          value = options.serializer(newState);
        } else {
          value = JSON.stringify(newState);
        }

        localStorage.setItem(key, value);
        setState(deserializer(value));
      } catch {
        // If user is in private mode or has storage restriction
        // localStorage can throw. Also JSON.stringify can throw.
      }
    },
    [deserializer, key, options, state],
  );

  const remove = useCallback(() => {
    try {
      localStorage.removeItem(key);
      setState(undefined);
    } catch {
      // If user is in private mode or has storage restriction
      // localStorage can throw.
    }
  }, [key, setState]);

  return [state, set, remove];
};

export default useLocalStorage;
