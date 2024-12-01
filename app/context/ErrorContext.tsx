"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ErrorContextType {
  isError: boolean;
  errorMessage: string;
  handleError: (message: string) => void;
  clearError: () => void;
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export const ErrorProvider = ({ children }: { children: ReactNode }) => {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleError = (message: string) => {
    setIsError(true);
    setErrorMessage(message);
    setTimeout(() => clearError(), 5000);
  };

  const clearError = () => {
    setIsError(false);
    setErrorMessage('');
  };

  return (
    <ErrorContext.Provider value={{ isError, errorMessage, handleError, clearError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export const useHandleErrors = (): ErrorContextType => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error('useHandleErrors must be used within an ErrorProvider');
  }
  return context;
};
