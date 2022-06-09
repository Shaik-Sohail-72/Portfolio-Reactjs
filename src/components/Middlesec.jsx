import React from "react";
import Card from "./Card";
import { Grid, makeStyles} from "@material-ui/core";
import cardData from "../cardData"
const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "10px",
    paddingRight: "10px"
  },
  container: {
    backgroundColor:"#222",
    paddingBottom:"25px"
  },
  heading: {
    paddingTop:"25px",
    paddingBottom:"25px",
    fontWeight: "bold",
    fontSize: "40px",
    color:"#fff"
  }
})

function createCard(cardData)
{
  return (<Card
    img={cardData.img}
    title={cardData.title}
    des={cardData.des}
    readmore={cardData.readmore}
    chipstitle1={cardData.chipstitle1}
    chipstitle2={cardData.chipstitle2}
    chipstitle3={cardData.chipstitle3}
    chipstitle4={cardData.chipstitle4}
    chipstitle5={cardData.chipstitle5}
    vist_link={cardData.visit_link}
    git_link={cardData.git_link}
    />)
}
function Middlesec()
{
  const classes=useStyles();
  return(
    <Grid
      container
      alignItems="center"
      justify="flex-start"
      className={classes.container}
    >
    <Grid container spacing={2} className={classes.gridContainer} justify="center">
        {cardData.map(createCard)}
        </Grid>
        </Grid>
  )
}
export default Middlesec;                                                                                                                                                               