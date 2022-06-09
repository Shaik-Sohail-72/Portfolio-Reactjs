import * as React from 'react';
import Fade from 'react-reveal/Fade';
import {Box,Grid,Chip, Button, Card, CardActions, CardContent, CardMedia, Typography, makeStyles} from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import InsertLinkIcon from '@material-ui/icons/InsertLink';
const useStyles = makeStyles({
  cardcontainer: {
    backgroundColor:"#333",
    color:"#fff"  
  },
  secondarytext:{
    color:"#ccc"
  },
  body:{
    backgroundColor:"#222"
  },
  chipcolor:{
    borderColor:'#0097e6',
    color:"#0076ED"
  },
  link:{
    color:"#fff",
    textDecorationLine:"none",
    fontSize:"15px",
    padding:"10px"
  }
});
export default function ImgMediaCard(props) {
  const classes=useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
    <Fade bottom>
    <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        component="img"
        alt="project image"
        height="225"
        image={props.img}
      />
      <CardContent className={classes.cardcontainer} >
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" className={classes.secondarytext}>
          {props.des}<a href={props.readmore}
                alt="Read More"
                target="_blank"
                rel="noopener noreferrer"
                color="#fff"
                variant="h1"
                textDecoration="none"
                className={classes.link}
                 >Read More</a> 
        </Typography>
        <Box mt={2}>
        <Box mr={1} mt={1} display="inline-block">
        <Chip className={classes.chipcolor} label={props.chipstitle1} variant="outlined" />
        </Box>
        <Box mr={1} mt={1} display="inline-block">
        <Chip className={classes.chipcolor} label={props.chipstitle2} variant="outlined" />
        </Box>
        <Box mr={1} mt={1} display="inline-block">
        <Chip className={classes.chipcolor} label={props.chipstitle3} variant="outlined" />
        </Box>
        <Box mr={1} mt={1} display="inline-block">
        <Chip className={classes.chipcolor} label={props.chipstitle4} variant="outlined" />
        </Box>
        <Box mr={1} mt={1} display="inline-block">
        <Chip className={classes.chipcolor} label={props.chipstitle5} variant="outlined" />
        </Box>  
        </Box>
      </CardContent>
      <CardActions className={classes.cardcontainer} >
        <a href={props.vist_link} style={{textDecoration:"none"}} target="_blank">
      <Button variant="contained"  startIcon={<InsertLinkIcon />} style={{
        color:"#fff",backgroundColor:"#0275d8"}}> 
        Visit
      </Button></a>
      <a href={props.git_link} style={{textDecoration:"none"}} target="_blank">
      <Button variant="outlined" endIcon={<GitHubIcon  />} style={{borderColor:"#ccc",color:"#fff"}}>
        Code
      </Button></a>
      </CardActions>
    </Card>
    </Fade>
    </Grid>
  );
}
