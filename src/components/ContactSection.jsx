import React from 'react';
import SectionTitle from './SectionTitle';
import styled from 'styled-components';
import ContactInfoItem from './ContactInfoItem';
import ContactForm from './ContactForm';

const ContactSectionStyle = styled.div`
    padding: 10rem 0;
    position: relative;

    .contact__wrapper{
        display: flex;
        gap: 5rem;
        margin-top: 7rem;
        justify-content: space-between;

        &::after{
            content: '';
            width: 3px;
            height: 40%;
            background-color: var(--gray-1);
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }

        .left{
            max-width: 500px;
            width: 100%;
        }
        .right{
            max-width: 500px;
            width: 100%;
        }
    }


    @media screen and (max-width: 768px){
        .contact__wrapper{
            flex-direction: column;
            
            &::after{
                display: none;
            }
        }
        
        .left, 
        .right{
            max-width: 100% !important;
        }

        .right{
            padding: 4rem 2rem 3rem 2rem;
        }
    }
`

const ContactSection = () => {
    return <ContactSectionStyle>
        <div className="container">
            <SectionTitle heading='Contact' subheading='Get in touch' />

            <div className="contact__wrapper">
                <div className="left">
                    <ContactInfoItem
                        icon={<ion-icon name="call-outline"></ion-icon>}
                        text='01965182760'
                    />
                    <ContactInfoItem
                        icon={<ion-icon name="mail-outline"></ion-icon>}
                        text ="redwanislam@email.com"
                    />
                    <ContactInfoItem
                    text='Faridpur, Bangladesh'/>
                </div>

                <div className="right">
                    <ContactForm />
                </div>
            </div>
      </div>
  </ContactSectionStyle>;
};

export default ContactSection;
