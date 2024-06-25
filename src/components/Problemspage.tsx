import React from 'react';
import { ListItem, alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Navbars from './Navbars';
import NavProblem from './NavDay';

export default function Problempage() {
  const current_page = "/Problemspage";

  return (
  <Box
    id="problem"
    sx={(theme) => ({
      width: '100%',
      backgroundImage:
        theme.palette.mode === 'light'
          ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
          : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
      backgroundSize: '100% 50%',
      backgroundRepeat: 'no-repeat',
      color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light'
    })}
  >
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
      {/* <Typography
        variant="h1"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          fontSize: 'clamp(3.5rem, 10vw, 4rem)',
        }}
      >
        Problems
      </Typography>

      <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 4,
      pt: { xs: 2, sm: 4 },
      justifyContent: 'flex-start'
      }}>
      {  problems.map((problem) => [
          <ProblemCard title={ problem.title } describe={ problem.describe } link={ problem.link } img={ problem.img } id={ problem.id } />
        ])}
      </Box> */}
    </Container>
  </Box>
  )
}