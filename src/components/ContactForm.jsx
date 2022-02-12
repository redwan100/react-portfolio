import React, { useState } from 'react';
import styled from 'styled-components';


const FormStyles = styled.div`
width: 100%;

.form__group{
    width: 100%;
    margin-bottom: 2rem;
}

label{
    font-size: 1.8rem;
    color: var(--gray-1);
    font-weight: 600;
}

input, textarea{
    width: 100%;
    background-color: var(--deep-dark);
    color: var(--gray-1);
    outline: none;
    border: none;
    padding: 1.2rem;
    font-size: 2rem;
    border-radius: 7px;
}
#message{
    min-height: 200px;
    background-color: var(--deep-dark);
    color: var(--gray-1);
    outline: none;
    border: none;
    padding: 1rem;
    resize: none;
}

button[type="submit"]{
   background-color: var(gray-1);
   padding: 1rem 3rem;
   border: none;
   outline: none;
   cursor: pointer;
   border-radius: 6px;
   display: inline-block;
   color: var(--deep-dark);
}
`;

const ContactForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    return <FormStyles>
        <form action="">
            <div className="form__group">
                <label htmlFor="name">
                    Your Name 
                    <input type="text" id="name" name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
                </label>
            </div>
            <div className="form__group">
                <label htmlFor="email">
                    Your Email 
                    <input type="email" id="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </label>
            </div>
            <div className="form__group">
                <label htmlFor="name">
                    Your Message 
                    <textarea type="text" id="message" name='message' value={message} onChange={(e)=>setMessage(e.target.value)}/>
                </label>
            </div>

            <button type='submit'>Sent</button>
        </form>
    </FormStyles>;
};

export default ContactForm;
