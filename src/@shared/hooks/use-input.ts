import { useState } from 'react';
import { useDebounce } from './use-debounce';

interface UseInputParam {
  milliseconds?: number;
  initialState?: string;
}
export const useInput = (option?: UseInputParam) => {
  const [input, setInput] = useState<string>(option?.initialState ?? '');
  const debounceSetInput = useDebounce((eventValue: string) => {
    setInput(eventValue);
  }, option?.milliseconds ?? 500);
  return { input, setInput, debounceSetInput } as const;
};
