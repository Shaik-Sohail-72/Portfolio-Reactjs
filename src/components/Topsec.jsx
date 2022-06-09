import React from "react";
import { Box, Grid, makeStyles, Typography, Tooltip } from "@material-ui/core";
import { GitHub, Linkedin, Instagram, Facebook, Mail } from "react-feather";
import { Fade, Bounce, Zoom} from "react-reveal"
const useStyles = makeStyles(() => ({
  container: {
    padding: "30px",
    height: "100%",
    backgroundColor:"#222"
  },
  circleimg: {
    borderRadius : "50%",
    border: "5px solid #fff",
    width: "135px",
    height: "135px"
  },
  heading: {
    fontWeight: "bold",
    fontSize: "40px",
    color:"#fff"
  },
  subHeading: {
    fontSize: "20px",
    width: "70%",
    color:"#ccc"
  },
  h3: {
    fontSize: "30px",
    width: "100%",
    paddingTop:"10px",
    paddingBottom:"10px",
    color:"#fff",
    textAlign:"center"
  },
  socialIcon: {
    display: "inline-block",
    width: "30px",
    height: "30px",
    marginRight: "20px",
  },
  socialIconLink: {
    color: "#fff",
  },
  link: {
    color: "#fff"
  },
  "@media only screen and (max-width:600px)": {
    container: {
      padding: "20px",
    },
    subHeading: {
      fontSize: "20px",
      width: "90%"
    },
  },
}));
function Topsec()
{
  const styles = useStyles();
  return (<div>
    <Grid
      container
      alignItems="center"
      justify="flex-start"
      className={styles.container}
    >
      <Grid item><Fade top>
        <img
          src={require('./images/profile_img.jpg')}
          alt="Shaik Sohail Hussain"
          className={styles.circleimg}
        /></Fade>
        <Box mt={2}><Fade right>
          <Typography
            variant="h1"
            className={styles.heading}
            color="textPrimary">
            Hey, I'm Sohail
          </Typography></Fade>
        </Box>
        <Box mt={3}>
        <Fade left>
          <Typography
            className={styles.subHeading}>
            I'm a Computer Science student. My theme of interest is web development. And my eager interest has made me to build many web applications from frontend to backend. I like to create and design websites, applications and also I provide various web services. I can work with Nodejs, Reactjs and mongoDB etc...
          </Typography></Fade>
        </Box>
        <Zoom right>
        <Box mt={3}> 
          <Tooltip title="github.com/shaik-sohail-72" arrow placement="top">
            <Box className={styles.socialIcon}>
              <a
                href="https://github.com/shaik-sohail-72"
                alt="github"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIconLink}>
                <GitHub strokeWidth={1.5} size={30} />
              </a>
            </Box>
          </Tooltip>
          <Tooltip title="linkedin.com/shaik-sohail-72" arrow placement="top">
            <Box className={styles.socialIcon}>
              <a href="https://www.linkedin.com/in/shaik-sohail-a7b7aa240"
                alt="linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIconLink}>
                <Linkedin strokeWidth={1.5} size={30} />
              </a>
            </Box>
          </Tooltip>
          <Tooltip title="instagram.com/shaik_sohail_72" arrow placement="top">
            <Box className={styles.socialIcon}>
              <a
                href="https://instagram.com/shaik_sohail_72?igshid=NWRhNmQxMjQ="
                alt="instagram"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIconLink} >
                <Instagram strokeWidth={1.5} size={30} />
              </a>
            </Box>
          </Tooltip>
          <Tooltip title="facebook.com/shaik.sohail.567" arrow placement="top">
            <Box className={styles.socialIcon}>
              <a
                href="https://www.facebook.com/shaik.sohail.567"
                alt="facebook"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIconLink} >
                <Facebook strokeWidth={1.5} size={30} />
              </a>
            </Box>
          </Tooltip>
          <Tooltip title="shaiksohailhu7n@gmail.com" arrow placement="top">
            <Box className={styles.socialIcon}>
              <a
                href="mailto:shaiksohailhu7n@gmail.com"
                alt="email"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIconLink}>
                <Mail strokeWidth={1.5} size={30} />
              </a>
            </Box>
          </Tooltip>
        </Box>
        </Zoom>
        <Box mt={2}>
        <Bounce bottom>
          <Typography variant="h1"
            className={styles.h3}>
            Check Out
          </Typography></Bounce>
        </Box>
      </Grid>
    </Grid>
    </div>
  )
}
export default Topsec;
