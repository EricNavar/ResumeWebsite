import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      color: "#000000"
    },
    
  },
}));

export default function TextButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Chip 
        icon = {<GitHubIcon/>}
        label="Github"
        component="a"
        href="https://github.com/EricNavar"
        clickable
        variant="outlined" 
      />
      <Chip 
        icon = {<LinkedInIcon/>}
        label="LinkedIn"
        component="a"
        href="https://www.linkedin.com/in/ericnavar/"
        clickable
        variant="outlined" 
      />
      <Chip 
        icon = {<FacebookIcon/>}
        label="Facebook"
        component="a"
        href="https://www.facebook.com/"
        clickable
        variant="outlined" 
      />
    </div>
  );
}