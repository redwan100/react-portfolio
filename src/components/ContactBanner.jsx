import React from 'react';
import PText from './PText';
import Button from './Button';
import styled from 'styled-components';


const ContactSectionStyles = styled.div`
padding: 10rem 0;

.contact__wrapper{
    background-color: var(--deep-dark);
    padding: 5rem 0;
    border-radius: 10px;
    text-align: center;
}

.contact__heading{
    font-size: 4rem;
    margin-bottom: 2rem;
    color: var(--gray-1);
}


@media screen and (max-width: 768px){
    .contact__heading{
        font-size: 2.5rem;
    }
}
`

const ContactBanner = () => {
    return <ContactSectionStyles>
        <div className="container">
            <div className="contact__wrapper">
                <PText>
                    Have a project in mind
                </PText>

                <h3 className="contact__heading">
                    Let me help you
                </h3>

                <Button btnText="Contact Now" btnLink="/contact" />
            </div>
      </div>
  </ContactSectionStyles>;
};

export default ContactBanner;
