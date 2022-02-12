import React from 'react';
import { Link } from 'react-router-dom';
import projectImg from '../assets/picture/projectImg.png'
import styled from 'styled-components';



const ProjectItemStyle = styled.div`
    .projectItem__img{
        width: 100%;
        height: 400px;
        overflow: hidden;
        border: 3px solid var(--gray-2);
        border-radius: 10px;
        display: inline-block;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .project__info{
        margin-top: 1rem;
        background-color: var(--deep-dark);
        padding: 1rem;
        border-radius: 10px;

        a{
            color: var(--gray-1);
        }
    }

    .project__title{
        font-size: 2.2rem;
        
    }

    .projectItem__desc{
        font-size: 1.6rem;
        font-family: "Roboto Mono";
        margin-top: 1rem;
        color: var(--gray-1);
    }


    @media screen and (max-width: 768px){
        .projectItem__img{
            height: 350px;
        }
    }
`

const ProjectItems = ({
    img = projectImg,
    title = 'Project name',
    desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit"
}) => {
    return <ProjectItemStyle>
        <Link to="/project" className='projectItem__img'>
            <img src={img} alt="project img" />
        </Link>

        <div className="project__info">
            <Link to='#'>
                <h3 className="projectItem__title"> { title }</h3>
            </Link>

            <p className="projectItem__desc">
               {desc}
            </p>
        </div>
  </ProjectItemStyle>;
};

export default ProjectItems;
