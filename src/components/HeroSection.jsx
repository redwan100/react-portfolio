import React from "react";
import HeroImg from "../assets/codding.png";
import Button from "./Button";
import PText from "./PText";
import DownArrow from "../assets/picture/down-arrow.svg";
import ScrollDown from "../assets/picture/social-arrow.svg";
import styled from "styled-components";

const HeroStyled = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;

    span{
        display: inline-block;
        width: 100%;
        letter-spacing: 5px;
    }

    .hero__name{
        font-size: 7rem;
        font-family: "Montserrat";
        letter-spacing: 0;
        text-transform: uppercase;
    }
  }

  .hero__img{
        max-width: 900px;
        width: 100%;
        height: 600px;
        margin: 0 auto;
        border: 2px solid var(--gray-1);
    }

    .hero__info{
        margin-top: -18rem;
    }

    .hero__social,
    .hero__scroll__down{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        position: absolute;
        bottom: 20px;
        width: 50px;
    }

    .hero__social{
        left: 50px;
    }

    .hero__scroll__down{
        right: 50px;
    }

    .hero__social__indicator,
    .hero__scroll__down{
        width: 50px;

        p{
            font-size: 1.6rem;
            transform: translateY(-70px) rotate(90deg);
            color: var(--gray-1);
        }

        img{
            max-height: 45px;
            width: 16px;
            margin: 0 auto;
            object-fit: contain;
        }
    }
     
     .hero__scroll__down{
       color: var(--gray-1);
         img{
            max-height: 70px;
         }
     }

     .hero__social__text{
      
         ul{
             li{
                 margin-bottom: 1rem;
             }
             a{
                 text-decoration:none;
                 display: inline-block;
                 color: var(--gray-1);
                 font-size: 1.6rem;
                 transform: rotate(-90deg);
                 letter-spacing: 5px;
                 margin-bottom: 2rem;
             }
         }
     }

     @media screen and (max-width: 768px){
         .hero{
             min-height: 750px;
         }

         .hero__heading{
             font-size: 1.4rem;
             margin-bottom: -3rem;
             color: var(--gray-1);

             .hero__name{
                 font-size: 4.5rem;
             }
         }

         
         .hero__img{
             height: 300px;
         }

         .hero__info{
             margin-top: 3rem;
         }

         .hero__social{
             left: 0;
             bottom: 15%;
             width: 30px;
             .hero__social__indicator{
                 width: 20px;
                 color: var(--gray-1);
                 
                 p{
                     font-size: 1.2rem;
                 }

                 img{
                     max-height: 22px;
                 }
             }

             .hero__social__text{
                 ul{
                     li{
                         a{
                             font-size: 1.2rem;
                             margin-bottom: 1rem;
                         }
                     }
                 }
             }

             .hero__scroll__down{
                 right: 0;
                 width: 30px;
                 gap: 1rem;
                 p{
                     font-size: 1.3rem;
                 }
             }
         }
     }  
`;

const HeroSection = () => {
  return (
    <HeroStyled>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, I'm  </span>
            <span className="hero__name">Redwan Islam</span>
          </h1>

          <div className="hero__img">
            <img src={HeroImg} alt="" />
          </div>

          <div className="hero__info">
            <PText className="hero__desc">
              I am working as a freelance web designer and developer for 4
              years. I love to design and make new web experience for the
              people.
            </PText>

            <Button btnLink="/project" btnText="see my works" outline={false} />
          </div>

          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>

              <img src={DownArrow} alt="" />
            </div>

            <div className="hero__social__text">
              <ul>
                <li>
                  <a href="/project" target="_blank" rel="noopener noreferrer">
                    FB
                  </a>
                </li>
                <li>
                  <a href="/project" target="_blank" rel="noopener noreferrer">
                    TW
                  </a>
                </li>
                <li>
                  <a href="/project" target="_blank" rel="noopener noreferrer">
                    LI
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="hero__scroll__down">
            <p>Scroll</p>
            <img src={ScrollDown} alt="" />
          </div>
        </div>
      </div>
    </HeroStyled>
  );
};

export default HeroSection;
