import React,{ useRef, useEffect } from 'react';
import Scrollbar from 'react-smooth-scrollbar';
import { useLocation } from 'react-router-dom';

const SmoothScrollbar = ({ children }) => {
    const ref = useRef(null);
    const { pathname } = useLocation()
    useEffect(() => {
        const { scrollbar } = ref.current;
        scrollbar.setPosition(0, 0);

    },[pathname])


    return (
        <Scrollbar ref={ref}
        damping="0.05"
        >
            {children}
      </Scrollbar>
  )
};

export default SmoothScrollbar;
