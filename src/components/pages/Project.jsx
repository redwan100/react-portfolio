import React, { useState,useEffect } from 'react';
import SectionTitle from '../SectionTitle';
import ProjectItem from '../ProjectItems'
import ProjectInfo from '../../assets/data/Data';
import styled from 'styled-components';


const ProjectsStyles = styled.div`
  padding: 10rem 0;

  .project__allItems{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 3rem;
    margin-top: 5rem;
  }

  .project__searchBar{
    position: relative;
    width: 300px;
    margin-top: 5rem;
    border-radius: 6px;
    background-color: var(--gray-2);

    input{
      width: 100%;
      padding: .8rem;
      font-size: 2rem;
      color: var(--gray-1);
      outline: none;
      border: none;
      background: none;
      z-index: 5;
    }

  }

  .search__icon{
    position: absolute;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--gray-1);
    font-size: 2rem;

  }


  @media screen and (max-width: 768px){
    .project__searchBar,
    form{
      width: 100%;
    }
  }

`

const Project = () => {
  
  const [searchText, setSearchText] = useState('');
  const [projectData, setProjectData] = useState(ProjectInfo);
  useEffect(() => {
    if (searchText === '') return;
    setProjectData(() => (
      ProjectInfo.filter((item) => (
        item.name.toLowerCase().match(searchText.toLowerCase())
      ))
    ))
  },[searchText])
  

  const handleOnChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value)
    if (!e.target.value.length > 0) {
      setProjectData(ProjectInfo)
    }
  }

    return <ProjectsStyles>
      <div className="container">
        <SectionTitle heading='Projects' subheading='some of my recent works'/>

        <div className="project__searchBar">
        <form action="">
            <input type="text" placeholder='Search Project'
              value={searchText}
              onChange={handleOnChange}
            />
          <span className="search__icon">
            <ion-icon name="search-outline"></ion-icon>
          </span>
        </form>
      </div>

      <div className="project__allItems">
        {
          projectData.map((item) => (
            <ProjectItem
              key={item.name}
              name = {item.name}
              title={item.name}
              desc={item.desc}
              // img={item.img}
            />
          ))
        }
      </div>
     </div>

     
  </ProjectsStyles>;
};

export default Project;
