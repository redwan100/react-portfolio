import React from 'react';
import SectionTitle from '../components/SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react';
import projects from '../assets/data/Data';
import ProjectItems from './ProjectItems';
import styled from 'styled-components';
import SwiperCore, { Navigation } from 'swiper';
import "swiper/css";
import 'swiper/css/navigation';


SwiperCore.use([Navigation]);

const ProjectSectionStyle = styled.div`
    padding: 10rem 0;

    .project__allItems{
        display: flex;
        gap: 3rem;
        margin-top: 5rem;
    }

    .swiper__container{
        padding-top: 8rem;
        max-width: 100%;
    }

    .swiper-button-prev,
    .swiper-button-next{
        width: 50px;
        height: 50px;
        background-color: var(--deep-dark);
        color: var(--gray-1);
        border-radius: 0.5rem;
        opacity: 0;
        transition: all .3s;
        z-index: 10;
    }

    .swiper-button-prev::after,
    .swiper-button-next::after{
        font-size: 2rem;
    }
    .project__allItems:hover 
    .swiper-button-prev{
        opacity: 1;
    }
    .project__allItems:hover 
    .swiper-button-next{
        opacity: 1;
    }


    /* @media screen and (max-width: 768px){
        .project__allItems{
            flex-direction: column;
            max-width: 400px;
            margin: 0 auto;
            padding-top: 5rem;

        }
    } */

`;


const ProjectsSection = () => {
    return <ProjectSectionStyle>
        <div className="container">
            <SectionTitle heading ="Project" subheading='some of my recent work'/>
            <div className="project__allItems">
                <Swiper spaceBetween={30} slidesPerView={2} navigation
                    breakpoints={
                        {
                            640:{
                                slidesPerView:1 ,
                            },
                            768:{
                                slidesPerView:2,
                            },
                            1200:{
                                slidesPerView:3,
                            }
                        }
                    }
                >
                    {projects.map((project)=>{
                        return (
                            <SwiperSlide key={project.name}>
                                <ProjectItems
                                    title={project.name}
                                    desc={project.desc}
                                    // img={project.img}
                                />
                           </SwiperSlide>
                        )
                    })}
                  </Swiper>
            </div>
     </div>
  </ProjectSectionStyle>;
};

export default ProjectsSection;
