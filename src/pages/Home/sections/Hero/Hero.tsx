import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import AnimatedTypography from "../../../../components/AnimatedTypography/AnimatedTypography";

const Hero = () => {

    const StyledHero = styled("div")(({theme})=>({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: {
            paddingTop: "130px",
            paddingBottom: "80px",
        },

    }))

    const StyledImg = styled("img")(({theme})=>({
        width: "85%",
        borderRadius:"50%",
        border: `1px soliud ${theme.palette.primary.contrastText}`,
        [theme.breakpoints.up('xs')]: {
        },
    }))

    return (
      <>
        <StyledHero>
            <Container maxWidth="lg">            
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Box position="relative" >
                            <Box position="absolute" width={"150%"} top={-100} right={0}>
                                <AnimatedBackground/>
                            </Box>
                            <Box position="relative" paddingLeft={"48px"}>
                            <StyledImg src={Avatar} alt="avatar" />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={1}>Mohamed Schuster</Typography>
                        <AnimatedTypography color="primary.contrastText" variant="h2" textAlign="center"pb={3}>I'm a software developer</AnimatedTypography>
                        <Grid container spacing={3} display="flex" justifyContent="center">
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <StyledButton onClick= {() => console.log("teste")}>
                                    <FileDownloadIcon/>
                                    <Typography>DOWNLOAD CV</Typography>
                                </StyledButton>
                            </Grid>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <StyledButton onClick= {() => console.log("teste")}>
                                    <MailOutlineIcon/>
                                    <Typography>CONTACT ME</Typography>
                                </StyledButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
      </>
    )
  }
  
  export default Hero
  