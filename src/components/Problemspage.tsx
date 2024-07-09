import React from 'react';
import { ListItem, alpha } from '@mui/material';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Navbars from './Navbars';
import NavProblem from './NavDay';
import Footer from './Footer';
import starburst from '../assets/star_burst.mp4';
import Box from '@mui/material/Box';
import Webcam from "react-webcam";


export default function Problempage() {
  const current_page = "/Problemspage";

  const WebcamComponent = () => <Webcam />;

  return (
  <Box
    id="problem"
    sx={(theme) => ({
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      overflow: 'hidden'
    })}
    className="pt-16"
  >
    <video
        autoPlay
        muted
        loop
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1
        }}
      >
        <source src={starburst} type="video/mp4" />
      </video>
    <Navbars page={ current_page }/>
    <Container
        sx={{
        display: 'flex',
        flexDirection: 'column',
        pt: { xs: 4, sm: 8 },
        pb: { xs: 4, sm: 8 },
        }}
    >
      <NavProblem />
      <WebcamComponent />
    </Container>
    <Footer />
  </Box>
  )
}