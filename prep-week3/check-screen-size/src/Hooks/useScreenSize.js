import { useDebugValue, useState, useEffect } from 'react';

const useScreenSize = () => {
  const height = window.innerHeight;
  const width = window.innerWidth;

  const [screenSize, setScreenSize] = useState({
    height: height,
    width: width,
  });

  useEffect(() => {
    setScreenSize({
      height: height,
      width: width,
    });
  }, [height, width]);

  useDebugValue(screenSize);

  return screenSize;
};

export default useScreenSize;
