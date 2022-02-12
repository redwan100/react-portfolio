import React from "react";
import Button from "./Button";
import PText from "./PText";
import SectionTitle from "./SectionTitle";
import AboutImg from "../assets/codding.png";
import styled from "styled-components";

const AboutSectionStyle = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }

  .about__section__left,
  .about__section__right {
    flex: 1;
  }


  .section__title {
    text-align: left;
  }

  .para {
    margin-top: 2rem;
    margin-left: 0;
    line-height: 1.2;
  }

  .about__section__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }

  @media screen and (max-width: 950px) {
    .about__section__left {
      flex: 4;
    }
    .about__section__right {
      flex: 3;
    }
  }
  @media screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .about__section__right {
      margin-top: 2rem;
    }
    .about__section__left,
    .about__section__right {
      width: 100%;
    }
    .section__title{
        text-align: center;
    }
    .para{
       padding-top: 1rem;
        margin: 0 auto;
    }
    .about__section__buttons{
        margin: 0 auto;
        width: 250px;
    }
  }
`;

const AboutSection = () => {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="about__section__left">
          <SectionTitle
            heading="About me"
            subheading="Let me introduce myself"
          />

          <PText className='para'>
            I am a freelancer website designer and developer from faridpur,
            Bangladesh.I create professional websites. I love art and always try
            to show unique views to audience through my design.
          </PText>

          <div className="about__section__buttons">
            <Button btnLink="/project" btnText="work" />
            <Button btnLink="/about" btnText="Read more" outline />
          </div>
        </div>

        <div className="about__section__right">
          <img src={AboutImg} alt="" />
        </div>
      </div>
    </AboutSectionStyle>
  );
};

export default AboutSection;
