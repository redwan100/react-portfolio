import React from 'react';
import PText from './PText';
import styled from 'styled-components';

const ContactItemStyle = styled.div`
padding: 2rem;
background-color: var(--deep-dark);
display: flex;
align-items: center;
gap: 2rem;
border-radius: 8px;
margin-bottom: 2rem;

.icon{
   color : var(--white);
   background-color: var(--gray-2);
   padding: 1rem;
   border-radius: 50%;
   align-items: center;
   justify-content: center;
   display: flex;
   font-size: 3rem;
}
`;

const ContactInfoItem = ({
    icon = <ion-icon name="location-outline"></ion-icon>,
    text = "this is info"
}) => {
    return <ContactItemStyle>
        <div className="icon">
            {icon}
        </div>

        <div className="info">
            <PText>
                {text}
            </PText>
        </div>
  </ContactItemStyle>;
};

export default ContactInfoItem;
