import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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

  console.log(props.link);

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
            <Button size="small" color="primary" onClick={handleClick}>
              View
            </Button>
          </CardActions>
        </Card>
      );
}

export {MenuCard, ProblemCard};