import { useState } from 'react';
import { CheckCameraPermission, ProblemCard, ProblemCardWebCam } from './cards';
import { problems } from "../constants/index";
import { AppBar, Toolbar, Button, Typography, Container, Box } from '@mui/material';
import { Check } from '@mui/icons-material';

export default function NavProblem() {
    const [selectedDay, setSelectedDay] = useState(1);
  
    const handleDayChange = (day) => {
      setSelectedDay(day);
    };
  
    const filteredProblems = problems.filter(problem => problem.day === selectedDay);

    const chooseCard = (props) => { 
      return CheckCameraPermission() ? (
         <ProblemCardWebCam  
            key={props.id}
            title={props.title}
            describe={props.describe}
            img={props.img}
            link={props.link}
            id={props.id}
         />
        ) : (
         <ProblemCard  
            key={props.id}
            title={props.title}
            describe={props.describe}
            img={props.img}
            link={props.link}
            id={props.id}
         />);
    };

  
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Problems
            </Typography>
            <Button 
                color="inherit"
                onClick={() => handleDayChange(1)}
                sx={{ backgroundColor: selectedDay === 1 ? '#0066b2' : 'inherit' }}
                >
                    Day 1
            </Button>
            <Button
                color="inherit"
                onClick={() => handleDayChange(2)}
                sx={{ backgroundColor: selectedDay === 2 ? '#0066b2' : 'inherit' }}
                >
                    Day 2
            </Button>
            <Button
                color="inherit"
                onClick={() => handleDayChange(3)}
                sx={{ backgroundColor: selectedDay === 3 ? '#0066b2' : 'inherit' }}
                >
                    Day 3
            </Button>
          </Toolbar>
        </AppBar>
        <Container>
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            pt: { xs: 2, sm: 4 },
            justifyContent: 'flex-start'
          }}>
            {filteredProblems.map((problem) => (
            <div>
              {chooseCard(problem)}
            </div>
            ))}
          </Box>
        </Container>
      </div>
    );
  }