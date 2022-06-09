import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  text: {
    backgroundColor:"#00ADB5",
    textAlign:"center",
    margin: "0px",
    padding: "15px",
	  fontSize: "15px",
    color: "#fff"
  }
})

const date = new Date();
let year = date.getFullYear();

function Footer()
{
  const classes=useStyles();
return (<div>
    <p className={classes.text}>© {year} Shaik Sohail</p>
</div>
)
}

export default Footer;