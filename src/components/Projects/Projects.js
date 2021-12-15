import React from 'react';

import { projects } from '../../constants/constants';
import { SectionTitle } from '../../styles/GlobalComponents';
import Code from '../svg/Icons/Code';
import {
  ProjectContainer,
  ProjectContainerInfo,
  ProjectSection,
  ProjectContainerImage,
} from './ProjectsStyles'

const Projects = () => {
  return (
    <ProjectSection>
      <SectionTitle>
        <h2>Projetos</h2>
      </SectionTitle>
      {projects.map((project) => (
        <ProjectContainer key={project.id}>
          <ProjectContainerImage>
            <img src={project.image} />
          </ProjectContainerImage>
          {project.right && ( <div />)}
          <ProjectContainerInfo color={project.color}>
            <div className="title">{project.title}</div>
            <div className="description">{project.description}</div>
            <a href={project.visit} target="_blank" className="visit">Ver Projeto</a>
            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <a href={project.source} className="source">
              Source code
              <Code />
            </a>
          </ProjectContainerInfo>
          {!project.right && ( <div />)}
        </ProjectContainer>

      ))}
    </ProjectSection>
  )
}
export default Projects;