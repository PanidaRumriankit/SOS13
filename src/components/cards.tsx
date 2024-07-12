import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { navLinks } from "../constants/index";
import '../index.css';
import { Box, Button, CardActionArea, CardActions, Checkbox } from '@mui/material';
import WebcamCapture from './webcam';
import getIMG from '../utils/getIMG';


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
  const image = getIMG(props.img);

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
    <Card sx={{
      width: 250,
      height: 400,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: 'rgba(1, 23, 51, 0.6)',
      color: 'white',
      textAlign: 'center',
      borderRadius: 2,
      boxShadow: 3,
      padding: 2,
      paddingBottom: 0,
      overflow: 'visible'
    }}>
      <Box sx={{ 
        width: 40, 
        height: 40, 
        borderRadius: '50%', 
        backgroundColor: '#f272c8', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        alignSelf: 'center', 
        marginBottom: -2,
        zIndex: 1
      }}>
        <Typography variant="h6" component="div" sx={{ color: 'white' }}>
          {props.id}
        </Typography>
      </Box>
      <CardContent sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexGrow: 1,
        paddingTop: 0,
      }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', paddingBottom: 2 }}>
          {props.title}
        </Typography>
        {image && (
          <CardMedia
            component="img"
            sx={{ width: '80px', height: '80px', marginY: 2 }}
            image={image}
            alt={props.title}
          />
        )}
        <Typography variant="body2" sx={{ color: '#bdbdbd', paddingX: 1, paddingTop: 2 }}>
          {props.describe}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button size="small" color="primary" onClick={handleClick}>
          View
        </Button>
        <Checkbox onChange={handleCheckbox} checked={isChecked} sx={{ color: 'white' }} />
      </CardActions>
    </Card>
  );
}

function ProblemCardWebCam(props) {
  return (
  <Box sx={{ position: 'relative', width: 250 , height: 400, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden' }}>
    <WebcamCapture/>
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