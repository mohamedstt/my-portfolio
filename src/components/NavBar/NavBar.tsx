import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"
import { Link as ScrollLink } from 'react-scroll';


const NavBar = () => {
    const StyledToobar = styled(Toolbar)(({ theme })=>({
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: theme.palette.primary.main,
    }))
    const StyledMenuItem = styled(MenuItem)<{ active?: boolean }>(({ theme, active }) => ({
      color: active ? theme.palette.primary.main : theme.palette.primary.contrastText,
      backgroundColor: active ? 'white' : 'transparent',
      borderRadius: '20px',
      padding: theme.spacing(1, 2),
      fontSize: '1.2rem', 
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.main,
      },
    }));
  

    return (
      <>
        <AppBar position="absolute">
            <StyledToobar>
              <StyledMenuItem>
              <ScrollLink to="about" smooth={true} duration={500}>
                About
              </ScrollLink> 
              </StyledMenuItem>
              <StyledMenuItem>
              <ScrollLink to="skills" smooth={true} duration={500}>
                Skills
              </ScrollLink> 
              </StyledMenuItem>
              <StyledMenuItem>
              <ScrollLink to="projects" smooth={true} duration={500}>
                Projects
              </ScrollLink> 
              </StyledMenuItem>
              
            </StyledToobar>
        </AppBar>
      </>
    )
  }
  
  export default NavBar
  