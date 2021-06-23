import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { IWrapperProps } from 'utils';

const ScrollToTop: React.FC<IWrapperProps> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children as JSX.Element;
};

export default ScrollToTop;
