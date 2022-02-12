import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CursorSectionStyles = styled.div`

.cursor{
    width: 20px;
    height: 20px;
    position: fixed;
    border: 2px solid aqua;
    z-index: 110;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: .02s ease;
    pointer-events: none;
    mix-blend-mode: difference;

    &::after{
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #0bd070;
        position: absolute;
        z-index: 110;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
`

const Cursor = () => {

    const [cursorX, setCursorX] = useState();
    const [cursorY, setCursorY] = useState();

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            setCursorX(e.pageX);
            setCursorY(e.pageY);
            
        })
    }, []);

    return <CursorSectionStyles>
      <div className="cursor" style={{left:cursorX + 'px',top: cursorY + 'px'}}></div>
  </CursorSectionStyles>;
};

export default Cursor;
