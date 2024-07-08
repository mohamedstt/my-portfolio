import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import ProjectCard from '../../../../components/ProjectCards/ProjectCards';

const projects = [
  {
    title: 'desafio-anotaai-backend',
    description: 'Marketplace de restaurantes criado como solução do desafio de backend do AnotaAi para um vídeo...',
    technologies: ['Java']
  },
  {
    title: 'eventostec-backend',
    description: '',
    technologies: ['Java']
  },
  {
    title: 'eventostec-frontend',
    description: '',
    technologies: ['HTML', 'TypeScript', 'JavaScript', 'SCSS']
  },
  {
    title: 'Fernanda-Kipper',
    description: '',
    technologies: []
  },
  {
    title: 'gen-ai-document-sumarization',
    description: 'Exploring Open Source Generative AI models for understanding and summarizing documents',
    technologies: ['Jupyter Notebook', 'Python']
  },
  {
    title: 'auth-api',
    description: 'This repository contains a simple Java Spring project that implements authentication and...',
    technologies: ['Java']
  }
];

const Projects: React.FC = () => {
  return (
    <Container maxWidth="md" id="projects">
      <Typography variant="h3" align="center" gutterBottom pb={"50px"}>
        Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <ProjectCard
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
