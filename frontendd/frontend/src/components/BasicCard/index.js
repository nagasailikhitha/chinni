import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialogue from '../Dialogue';

export default function BasicCard(props) {
    const image=props.image;
  return (
    <Card sx={{ maxWidth: 305,margin:"5px",marginTop:"10px" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.image}
        title=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {props.year}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.rating}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Dialogue/>
        </Typography>
        

      </CardContent>
     
    </Card>
  );
}