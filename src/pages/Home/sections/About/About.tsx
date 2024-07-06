import React from 'react';
import { Box, Container, Grid, styled, Typography, Card, CardContent } from "@mui/material";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';

const AboutSection = styled('section')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  textAlign: 'center'
}));

const SkillBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.5),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  margin: theme.spacing(1),
  width: "130px",
}));

const About: React.FC = () => {
  return (
    <AboutSection>
      <Container maxWidth="md">
        <Typography variant="h2" gutterBottom>About me</Typography>
        
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
              
                <WorkspacePremiumIcon/>
                <Typography variant="h6" gutterBottom>Experience</Typography>
                <Typography variant="body2">2+ years</Typography>
                <Typography variant="body2">Frontend Development</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <SchoolIcon/>
                <Typography variant="h6" gutterBottom>Education</Typography>
                <Typography variant="body2">Bachelors Degree</Typography>
                <Typography variant="body2">Computer Science</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box mt={4}>
          <Typography variant="body1" paragraph >
            Recently graduated in Computer Science, with
            experience in developing web applications using
            technologies such as JavaScript, HTML5, CSS, React
            and NodeJS. Proven skills in front-end frameworks
            (React), version control, and back-end development
            with NodeJS. Knowledgeable in SQL and NoSQL
            databases and experienced with TypeScript and
            NodeJS frameworks(Express). Seeking opportunities
            to gain experience and available for IEFP internship.
          </Typography>
        </Box>

        <Box mt={5}>
          <Typography variant="h2" gutterBottom>Skills</Typography>
          <Grid container spacing={4} justifyContent="center">
            {['Javascript', 'Typescript', 'React', 'Next', 'Git', 'HTML', 'CSS', 'WordPress', 'Python', 'Material UI', 'Figma'].map((skill, index) => (
              <Grid item key={index}>
                <SkillBox>
                  <Typography variant="body2">{skill}</Typography>
                </SkillBox>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </AboutSection>
  );
};

export default About;
