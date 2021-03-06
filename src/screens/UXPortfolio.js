import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
//local files
import UXProject from '../components/uxportfolio/UXProject.js';
import Mockup from '../components/uxportfolio/Mockup.js';
import UXProjectData from '../data/UXProjectData.js';
import { homePageStyles } from '../styling/homePageStyling.js';

export default function Home() {
  React.useEffect(() => {
    document.title = 'Eric Navar | UX Portfolio';
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);
  const classes = homePageStyles();

  return (
    <section className={classes.home}>
      <Grid container spacing={10} style={{marginTop:40,marginBottom:40}}>
        <Grid item style={{maxWidth:800}}>
          <Typography color='textPrimary' component="h2" variant="h4" className={classes.topicName}>
            <b>UX Projects I've Worked On</b>
          </Typography>
          <Hidden smUp>
            <Grid container spacing={4}>
              {UXProjectData.map(project => (
                <Grid key={project._id} item xs={12} className={classes.cardButtonContainer}>
                  <UXProject {...project} />
                </Grid>
              ))}
            </Grid>
          </Hidden>
          <Hidden only="xs">
            <Grid id='ux-projects' container spacing={4}>
              {UXProjectData.map(project => (
                <Grid item key={project._id} xs={12} className={classes.cardButtonContainer}>
                  <UXProject {...project} />
                </Grid>
              ))}
            </Grid>
          </Hidden>
        </Grid>
        <Grid item style={{display:'flex',justifyContent:'center'}}>
          <Mockup />
        </Grid>
      </Grid>

    </section>
  );
}
