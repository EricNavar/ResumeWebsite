import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  parent: {
    display: "flex",
    color:'textSecondary',
    variant: 'body2'
  },
  position: {
    flex: 1,
    textAlign: "left",
  },
  time_period: {
    flex: 1,
    textAlign: "right",
  },
  flex:{
    display:"flex"
  }
}));

export default function InvolvementItem(props) {
  const classes = useStyles();
  let link = null;
  if (props.link != null)
  {
    link = (
      <ListItem>
        <Link href={props.link}>
          {props.linkDescription}
        </Link>
      </ListItem>
    );
  }
  
  let description = null;
  if (Array.isArray(props.description))
    description = props.description.map((x) =>
      <ListItem>
        {x}
      </ListItem>
    );

  return (
    <div className={classes.root}>
      <div className={classes.flex}>
        <Typography variant="h5">
          {props.title}
        </Typography>
        <Avatar variant="square" src={props.icon}/>
      </div>
      <div className={classes.parent}>
        <Typography className={classes.position}>
          {props.position}
        </Typography>
        <Typography className={classes.time_period}>
          {props.time_period}
        </Typography>
      </div>
      <List>
        {description}
        {link}
      </List>
    </div>
  );
}