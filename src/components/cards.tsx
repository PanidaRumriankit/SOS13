import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { navLinks } from "../constants/index";
import '../index.css';
import { Box, Button, CardActionArea, CardActions, Checkbox, CircularProgress } from '@mui/material';
import WebcamCapture from './webcam';
import Banana from '../assets/banana.jpg'


function MenuCard(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    for (let i = 0; i < 3; i++) {
      if (props.link === navLinks[i].link) {
        navLinks[i].current = true;
      }
      else {
        navLinks[i].current = false;
      }
    }
    navigate(props.link);
  };
  
  return (
      <Card className="box" sx={{ width: 250, backgroundColor: 'transparent', color: 'white' }}>
        <CardActionArea className="rainbow_text_animated" onClick={handleClick}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              { props.name }
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
}

const status = localStorage.status ? JSON.parse(localStorage.status) : {};

function ProblemCard(props) {

  const [isChecked, setIsChecked] = useState(status[props.id] ? status[props.id] : false);

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  const handleClick = () => {
    window.open(props.link, '_blank');
  };

  function handleCheckbox() {
    status[props.id] = !(isChecked);
    localStorage.setItem('status', JSON.stringify(status));
    checkHandler();
  };

    return (
        <Card sx={{ width: 250 , height: 400, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
            <CardMedia
              component="img"
              height="140"
              image={ props.img }
              alt={ props.title }
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                { props.id + " " + props.title }
              </Typography>
              <Typography variant="body2" color="text.secondary">
                { props.describe }
              </Typography>
            </CardContent>
          <CardActions>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Button size="small" color="primary" onClick={handleClick}>
              View
            </Button>
            <Checkbox onChange={handleCheckbox} checked={isChecked}/>
          </Box>
          </CardActions>
        </Card>
      );
}

function ProblemCardWebCam(props) {
  return (
  <Box sx={{ position: 'relative', width: 250 , height: 400, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden' }}>
    <img src={Banana} alt='banana pic eiei'
    style={{
      backgroundColor: 'white',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1, // Ensures the webcam is behind other content
      objectFit: 'cover'
    }}/>
    {props.camera ? <div/> : <WebcamCapture/>}
      <Box sx={{ position: 'relative', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', height: '100%'}}>
        <ProblemCard
          key={props.id}
          title={props.title}
          describe={props.describe}
          img={props.img}
          link={props.link}
          id={props.id}
        />
    </Box>
  </Box>
  );
};




export {MenuCard, ProblemCard, ProblemCardWebCam};