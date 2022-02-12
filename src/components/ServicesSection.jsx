import React from "react";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import ServicesSectionItem from "./ServicesSectionItem";

const ServicesSectionStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    justify-content: space-between;
    gap: 10rem;
    padding-top: 4rem;
  }

  @media screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      gap: 4rem;
    }
  }
`;

const ServicesSection = () => {
  return (
    <ServicesSectionStyles>
      <div className="container">
        <SectionTitle heading="Service" subheading="what i will do for you" />

        <div className="services__allItems">
          <ServicesSectionItem
            title="website  design"
            icon={<ion-icon name="desktop-outline"></ion-icon>}
            desc="I do ui/ux design for the website what helps website to get a unique look"
          />
          <ServicesSectionItem
            title="Web Development"
            icon={<ion-icon name="code-slash-outline"></ion-icon>}
            desc="I also develop the website.I create high performance website with blazing fast speed."
          />
          <ServicesSectionItem
            title="app dev"
            icon={<ion-icon name="cog-outline"></ion-icon>}
            desc="I develop mobile application.I create mobile app with eye catching ui."
          />
        </div>
      </div>
    </ServicesSectionStyles>
  );
};

export default ServicesSection;
