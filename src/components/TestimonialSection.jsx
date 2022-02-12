import React,{useState} from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import SectionTitle from './SectionTitle';
import PText from './PText'
import styled from 'styled-components';
import testimonials from '../assets/data/testimonial';


const TestimonialSectionStyle = styled.div`
padding: 10rem 0;
text-align: center;

.testimonial__wrapper{
    position: relative;
    max-width: 700px;
    margin: 0 auto;
}

.testimonial__info{
    width: 100%;
    height: fit-content;
    padding: 3rem;
    background-color: var(--deep-dark);
    border-radius: 10px;
    margin-top: 5rem;
}

.testimonial__desc{
    .para{
        text-align: center;
        line-height: 1.2;
    }
}

.testimonial__name{
    margin-top: 4rem;
    font-size: 2rem;
    font-family: "Montserrat";
    font-weight: 900;
    text-transform: uppercase;
    color: var(--gray-1);
}

.testimonial__title{
    font-size: 1.5rem;
    margin-top: .3rem;
    color: var(--gray-1);
    letter-spacing: 3px;
}


.arrows{
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.arrow__icon{
    font-size: 2rem;
    pointer-events: none;
}

.prev,
.next{
    background-color: var(--deep-dark);
    margin: 0 .5rem 0;
    padding: .3rem .5rem;
    border-radius: .5rem;
    width: fit-content;
    cursor: pointer;
}

.fade-enter{
    opacity: 0;
    transform: scale(.90);
}
.fade-enter-active{
    opacity: 1;
    transition: 100ms ease-in;
    transform: scale(1);
}
.fade-exit{
    transform: scale(1);
    opacity: 1; 
}
.fade-exit-active{
    transition: 100ms ease-in;
    opacity: 0;
    transform: scale(.8);
}
`;

const TestimonialSection = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const activeSlide = testimonials[activeIndex];

    const handlePrev = () => { 
        if (activeIndex <= 0) {
            setActiveIndex(testimonials.length - 1);
        } else {
            setActiveIndex((oldIndex) => oldIndex - 1);
        }
    };

    const handleNext = () => {
        if (activeIndex >= testimonials.length - 1) {
           setActiveIndex(0)
        } else {
            setActiveIndex((oldIndex) => oldIndex + 1);
        }
    };

    return <TestimonialSectionStyle>
        <div className="container">
            <SectionTitle heading='Testimonials'
                subheading='see what out clients say about us'
            />

            <div className="testimonial__wrapper">
                <SwitchTransition>
                    <CSSTransition
                        key={activeSlide.id}
                        timeout={300}
                        classNames="fade"
                    >
                        <div className="testimonial__info">
                            <div className="testimonial__desc">
                                <PText className="testimonial__para">
                                   {activeSlide.desc}
                                </PText>
                            </div>

                            <h2 className="testimonial__name">
                                {activeSlide.name}
                            </h2>
                            
                            <p className="testimonial__title">
                                {activeSlide.title}
                            </p>
                        </div>
                    </CSSTransition>
                </SwitchTransition>
            </div>

            <div className="arrows">
                <div className="prev" onClick={handlePrev}>
                    <span className="arrow__icon">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                    </span>
                </div>
                <div className="next" onClick={handleNext}>
                    <span className="arrow__icon">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                    </span>
                </div>
            </div>
     </div>
  </TestimonialSectionStyle>;
};

export default TestimonialSection;
