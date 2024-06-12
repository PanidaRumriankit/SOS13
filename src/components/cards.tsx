import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function MenuCard(props) {
    return (
        <Card sx={{ width: 250 }}>
          <CardActionArea href={ props.link }>
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
    return (
        <Card sx={{ width: 250 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={ props.img }
              alt={ props.title }
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                { props.title }
              </Typography>
              <Typography variant="body2" color="text.secondary">
                { props.describe }
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              View
            </Button>
          </CardActions>
        </Card>
      );
}

export {MenuCard, ProblemCard};