import React from 'react';

import { projects, mainProject } from '../../constants/constants';
import { SectionTitle } from '../../styles/GlobalComponents';
import Code from '../svg/Icons/Code';
import Link from '../svg/Icons/Link';
import More from '../svg/Icons/More';
import { MainProjectContainer, MainProjectContainerInfo, ProjectSection, ProjectTitleContainer } from './ProjectsStyles'

const Projects = () => {
  return (
    <ProjectSection>
      <SectionTitle>
        <h3>Projetos</h3>
      </SectionTitle>

      <MainProjectContainer>
        <div className="row">

          <div className="left_side">
            <img src={mainProject.image} />
          </div>
          <MainProjectContainerInfo>
            <ProjectTitleContainer>
              <div className="title">{mainProject.title}</div>
            </ProjectTitleContainer>
            <div className="project_description">
              {mainProject.description}
            </div>
            <div className="tags_container">
              {mainProject.tags.map((tag) => ( 
                <span key={tag} className="tag">. {tag}</span>
              ))}

            </div>
          </MainProjectContainerInfo>
        </div>

        <div className="footer">
          <a className="link_a" href={mainProject.source}>
            source code
            <Code />
          </a>

          <a className="link_a" href={mainProject.visit}>
            visit
            <Link />
          </a>

          <a className="more link_a" href={mainProject.visit}>
            mais
            <More />
          </a>

        </div>
      </MainProjectContainer>
    </ProjectSection>
  )
}
export default Projects;