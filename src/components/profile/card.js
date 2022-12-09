import  React from 'react';
import {Card, CardContent, Typography} from '@mui/material';


export default function BasicCard({res}) {
  
  
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Typography variant="h5" component="div">
          Name: {res.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Gender: {res.gender}
        </Typography>
       
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Age: {res.age}
        </Typography>
        <Typography variant="body2">
          City: {res.city}
          <br />
          State: {res.state}
        </Typography>
      </CardContent>
    </Card>
  );
}
