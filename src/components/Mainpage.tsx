import React from 'react';
import { ListItem, alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import { MenuCard } from "./cards";
import { navLinks, slides } from "../constants/index";
import CreateSlides from "./Slides";

export default function Mainpage() {
  return (
    <Box
      id="main"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
          >
            SOS&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
              13<sup>th</sup>
            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            Welcome to SOS13th camp. This camp is designed to equip you with the skills, knowledge, and connection
            with friends. Hope you enjoy all the things we have prepared for you.
          </Typography>

          <ButtonGroup variant="outlined" aria-label="Basic button group" sx={{ alignSelf: "center" }} size="large">
            {slides.map((item) => (
                <CreateSlides name={ item.name } link={ item.link } />
            ))}
          </ButtonGroup>

          <Box sx={{ 
            display: "flex", 
            flexWrap: "wrap", 
            justifyContent: "space-around", 
            flexDirection: "row", 
            alignItems: "center",
            gap: "1rem"}}>
            {navLinks.map((item) => (
                <MenuCard icon={ item.icon } name={ item.name } description={ item.description } link={ item.link } />
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
