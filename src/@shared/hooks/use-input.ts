import { useState } from 'react';

interface UseInputParam {
  initialState?: string;
}

interface ErrorState {
  isError?: boolean;
  errorContent: string;
}

export const useInput = (option?: UseInputParam) => {
  const [input, setInput] = useState<string>(option?.initialState ?? '');
  const [error, setError] = useState<ErrorState>({
    isError: false,
    errorContent: '',
  });

  return { input, setInput, error, setError } as const;
};
