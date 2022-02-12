import React from 'react';
import PText from '../PText'
import Button from "../Button";
import AboutImg from  '../../assets/codding.png'
import styled from 'styled-components';
import AboutInfoItems from '../AboutInfoItems';
import ContactBanner from '../ContactBanner';


const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top__section{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  .left{
    flex: 3;
  }
  .right{
    flex: 2;
  }
  .about__subheading{
    font-size: 2.2rem;
    margin-bottom: 2rem;
    color: var(--gray-1);
    span{
      background-color: var(--deep-dark);
      padding: .75rem;
      border-radius:6px;
      font-weight: 700;
      
    }
  }
  .about__heading{
    font-size: 3.5rem;
    margin-bottom: 3rem;
  }

  .about__info{
    margin-bottom: 4rem;
    .para{
      max-width: 100%;
      line-height: 1.2;
    }
  }


  .right{
    img{
      border: 2px solid  var(--gray--1);
    }
  }
  .about__info__items{
    margin-top: 15rem;
  }
  .about__info__item{
    margin-bottom: 10rem;
  }
  .about__info__heading{
    font-size: 3.6rem;
    letter-spacing: 4px;
    text-transform:uppercase
  }

  @media screen and (max-width: 768px){
    padding: 10rem 0;
    .top__section{
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading{
      font-size: 1.6rem;
    }
    .about__heading{
      font-size: 2.6rem;
    }
    .about__info__heading{
      font-size: 2.8rem;
    }
  }
`

const About = () => {
    return <AboutPageStyles>
      <div className="container">
        <div className="top__section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Redwan islam</span>
            </p>

            <h2 className="about__heading">
              A freelance web  developer
            </h2>

            <div className="about__info">
              <PText>
                I am from faridpur,Bangladesh.A place of beauty and nature.Since my childhood,i love art and design.I always try to design stuff with my unique point of view.I also love to create things that can be useful to others.
                <br /><br />
                I am from faridpur,Bangladesh.A place of beauty and nature.Since my childhood,i love art and design.I always try to design stuff with my unique point of view.I also love to create things that can be useful to others.
                <br /><br />
                I am from faridpur,Bangladesh.A place of beauty and nature.Since my childhood,i love art and design.I always try to design stuff with my unique point of view.I also love to create things that can be useful to others.
              </PText>
            </div>
            <Button btnText='Download CV' btnLink='#'/>
          </div>
          
          <div className="right">
              <img src={AboutImg} alt="redwan img" />
          </div>
        </div>

        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">
              Education
            </h1>
            <AboutInfoItems
              title='School'
              items={["Hatkholar char md dakhil Madrasha, Boalmary"]}
            />
            <AboutInfoItems
              title='College'
              items={["Bongabondhu government college, Faridpur"]}
            />
            <AboutInfoItems
              title='Varsity'
              items={["Faridpur Mohabiddaloya, Faridpur"]}
            />
          </div>

          <div className="about__info__item">
            <h1 className="about__info__heading">
              My Skill
            </h1>
            <AboutInfoItems
              title='Frontend'
              items={["HTML","CSS","Javascript", "React"]}
            />
            <AboutInfoItems
              title='Backend'
              items={["NodeJs","Express", "MongoDB", "PHP","Firebase"]}
            />
            <AboutInfoItems
              title='Design'
              items={["PhotoShop","After Effect", "Figma", "XD"]}
            />
          </div>

          <div className="about__info__item">
            <h1 className="about__info__heading">
              Experience
            </h1>
            <AboutInfoItems
              title='2016-2018'
              items={["Junior web developer"]}
            />
            <AboutInfoItems
              title='2016-2020'
              items={["Frontend web developer"]}
            />
            <AboutInfoItems
              title='2020'
              items={["Freelance Web Developer"]}
            />
          </div>
        </div>
     </div>

      <ContactBanner />
  </AboutPageStyles>;
};

export default About;
