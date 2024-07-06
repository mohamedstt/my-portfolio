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
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum. 
            Aliquam vulputate, nisi eget tristique mattis, nisi sem faucibus eros, a auctor felis sem ut mauris. 
            Phasellus a ultrices elit. Curabitur ut diam eu orci auctor pretium. Nullam ultricies erat quam, 
            eget porta velit vehicula sit amet. Nullam sodales iaculis metus, sed vestibulum nisl vulputate at. 
            Integer in pulvinar libero. Donec ornare est quis tortor varius efficitur. 
            Maecenas sed erat quis felis facilisis pellentesque. 
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
            Nullam id felis convallis, luctus lorem eget, varius dolor.
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
