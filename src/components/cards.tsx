import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Checkbox } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function MenuCard(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(props.link);
  };
  
  return (
      <Card sx={{ width: 250 }}>
        <CardActionArea onClick={handleClick}>
        <CardMedia
            component="img"
            height="140"
            image={ props.icon }
            alt={ props.name }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              { props.name }
            </Typography>
            <Typography variant="body2" color="text.secondary">
              { props.description }
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
}

function ProblemCard(props) {

  const handleClick = () => {
    window.open(props.link, '_blank');
  };

  const status = new Map(JSON.parse(localStorage.status));

  const [isChecked, setIsChecked] = useState(status.get(props.id));
  
  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  function handleCheckbox() {
    status.set(props.id, isChecked);
    localStorage.status = JSON.stringify(Array.from(status));
    checkHandler();
  };



    return (
        <Card sx={{ width: 250 , height: 400, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
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

export {MenuCard, ProblemCard};