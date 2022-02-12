import React from "react";
import styled from "styled-components";
import PText from "./PText";

const ItemsStyles = styled.div`
  text-align: center;
  color: var(--gray-1);
  transition: all .3s ease;
  padding:  2rem 1rem;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 0 20px #221f1f;
  &:hover{
    background-color:var(--deep-dark);
    transform: scale(1.1);
  }
  &:hover .servicesItem__icon {
    span.icon{
      transform:scale(1.3);
    }
    
  }

  &:nth-child(2){
    background-color: var(--deep-dark)
  }



  .servicesItem__icon {
    .icon {
      font-size: 3rem;
      transition:.3s;
      display: block;
    }
  }

  .servicesItem__title {
    font-size: 2.5rem;
    font-weight: 600;
    font-family: "Montserrat";
    text-transform: capitalize;
  }

  .para {
    margin-top: 2rem;
    line-height:1.2;
  }
`;

const ServicesSectionItem = ({
  title = "web design",
  icon = <ion-icon name="settings-outline"></ion-icon>,
  desc = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, cum! Facilis maiores perferendis, quia vero nisi dolores sequi. Fugit, cupiditate?",
}) => {
  return (
    <ItemsStyles>
      <div className="servicesItem__icon">
        <span className="icon">{icon}</span>
        <div className="servicesItem__title">{title}</div>
        <PText className="service__para">{desc}</PText>
      </div>
    </ItemsStyles>
  );
};

export default ServicesSectionItem;
