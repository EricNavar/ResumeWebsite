import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
//local files
import Footer from '../components/resumePage/Footer';
import Header from '../components/resumePage/Header';
import SkillList from '../components/resumePage/SkillList';
import Education from '../components/resumePage/Education';
import Experience from '../components/resumePage/Experience';
import InvolvementList from '../components/resumePage/InvolvementList';
import PersonalStatement from '../components/resumePage/PersonalStatement';

const useStyles = makeStyles((theme) => ({
  background: {
    background: theme.palette.background.default
  },
  gridItem: {
    justifyContent: 'center',
    display: 'flex'
  },
  sectionContainer: {
    [theme.breakpoints.down('xs')]: {
      marginRight: 40,
      marginLeft: 40
    },
    [theme.breakpoints.up('sm')]: {
      marginRight: 80,
      marginLeft: 80
    },
  }
}));

export default function ResumePage({darkMode, toggleDarkMode}) {
  React.useEffect(() => {
    document.title = 'Resume | Eric Navar';
    window.scrollTo({
      top: 0,
      left: 0,
    });
  },[]);

  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <div className={classes.sectionContainer}>
        <PersonalStatement/>
        <Grid container spacing={4} justify='center'>
          <Grid id='skill-list-container' item sm={12} md={6} className={classes.gridItem}>
            <SkillList/>
          </Grid>
          <Grid id='education-container' item sm={12} md={6} className={classes.gridItem}>
            <Education/>
          </Grid>
        </Grid>
        <Experience/>
        <InvolvementList/>
        <div style={{height:40}}></div>
      </div>
      <Footer top={false}/>
    </div>
  );
}