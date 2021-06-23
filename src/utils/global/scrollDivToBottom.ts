import React from 'react';

export const scrollToBottom = (reference: React.RefObject<HTMLDivElement>) => {
  if (reference.current) {
    reference.current.scrollTop = reference.current?.scrollHeight - reference.current.clientHeight;
  }
  return null;
};
