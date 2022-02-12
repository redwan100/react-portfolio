import React from 'react';
import styled from 'styled-components';
import PText from './PText';


const AboutItemsStyles = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
margin-top: 3rem;

.title{
    font-size: 2.5rem;
    color: var(--gray-1);
    margin-right: 3rem;
    font-weight: 700;
}

.para{
    line-height: 2;
}
.items{
    display: flex;
    gap: 1.5rem;
}

.item{
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;   
}


@media screen and (max-width: 768px){
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    .items{
        gap: 1rem;
    }
    .title{
        font-size: 2rem;
    }
}
`

const AboutInfoItems = ({
    title = "this is title",
    items = [
        "HTML","CSS"
    ]
}) => {
    return <AboutItemsStyles>
        <div className="title">{title}</div>
        <div className="items">
            {items.map((item, index) => (
                <div className="item" key={index}>
                    <PText>
                     {item}
                    </PText>
                </div>
            ))}
        </div>
  </AboutItemsStyles>;
};

export default AboutInfoItems;
