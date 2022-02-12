import React from 'react';
import styled from 'styled-components';


const SectionTitleStyle = styled.div`
    text-align: center;
    color: var(--gray-1);
    p{
        font-family: "Roboto Mono";
        font-size: 2rem;
    }

    h2{
        font-family: "Montserrat";
        font-weight: 800;
        font-size: 6rem;
        margin-top: .5rem;
        text-transform: uppercase;
    }

    @media screen and (max-width: 768px){
        p{
            font-size: 1.2rem;
        }
        h2{
            font-size: 3.5rem;
        }
    }
`

const SectionTitle = ({
    subheading = 'This is subheading',
    heading = 'This is heading'
}) => {
    return <SectionTitleStyle className='section__title'>
        <p>{ subheading }</p>
        <h2>{ heading }</h2>
  </SectionTitleStyle>;
};

export default SectionTitle;
