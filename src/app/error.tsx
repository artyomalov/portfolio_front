'use client';
import ErrorComponent from '@/compnonents/ErrorComponent';
import React from 'react';
import errorMessages from '@/constants/errorMessage';

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  React.useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorComponent
      errorTitle={errorMessages.errorTitle}
      errorText={errorMessages.errorText}
      reset={reset}
    />
  );
};

export default Error;
