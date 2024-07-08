import React from 'react';
import { Box, Card, CardContent, Chip, Typography, styled } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
}

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  margin: theme.spacing(2),
}));

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies }) => {
  return (
    <StyledCard>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5">{title}</Typography>
          <LinkIcon />
        </Box>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          {description}
        </Typography>
        <Box mt={2} display="flex" flexWrap="wrap" gap={1}>
          {technologies.map((tech) => (
            <Chip key={tech} label={tech} color="secondary" />
          ))}
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default ProjectCard;
