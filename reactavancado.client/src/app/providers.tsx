import React from 'react';
import GlobalStyles from '@/styles/global';
import { PropsWithChildren } from 'react';

export function Providers({children}: PropsWithChildren) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}
