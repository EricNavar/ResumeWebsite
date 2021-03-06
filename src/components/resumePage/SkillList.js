import React, {Suspense, lazy} from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
//local files
import Section from './Section';
import commonStyles from './../../styling/commonStyles.js';

const GitIcon = lazy(() => import('./../../assets/skills/git-white.js'));
const AwsIcon = lazy(() => import( './../../assets/skills/aws-white.js'));
const CssIcon = lazy(() => import( './../../assets/skills/css3-white.js'));
const HtmlIcon = lazy(() => import( './../../assets/skills/html5-white.js'));
const JavaIcon = lazy(() => import( './../../assets/skills/java-white.js'));
const ReactIcon = lazy(() => import( './../../assets/skills/react-white.js'));
const MySqlIcon = lazy(() => import( './../../assets/skills/mysql-white.js'));
const MongoDbIcon = lazy(() => import( './../../assets/skills/mongodb-white.js'));
const PythonIcon = lazy(() => import( './../../assets/skills/python-white.js'));
const JavascriptIcon = lazy(() => import( './../../assets/skills/javascript-white.js'));
const TypescriptIcon = lazy(() => import( '../../assets/skills/typescript-white.js'));
const CppIcon = lazy(() => import('./../../assets/skills/cpp-white.js'));

const useStyles = makeStyles({
  paper: {
    textTransform: "none",
    textAlign: "center",
    border: "5px solid white",
    borderRadius: 8,
    color: "white",
    transition: ".5s ease-in-out"
  },
  image: {
    height: 40
  }
});

function SkillItem({ children, skill }) {
  const classes = useStyles();
  const commonClasses = commonStyles();
  return (
    <Grid item xs={4} sm={3} className={classes.gridItem}>
      <Paper className={`${classes.paper} ${commonClasses.backgroundGradient}`} elevation={3} >
        {children}
        <Typography
          variant='body1'
          align='center'
        >
          {skill}
        </Typography>
      </Paper>
    </Grid>
  );
}

export default function SkillList() {
  return (
    <Section title="Skills">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="stretch"
        spacing={1}

      >
        <SkillItem skill="Git"><Suspense fallback={<div/>}><GitIcon/></Suspense></SkillItem>
        <SkillItem skill="Javascript"><Suspense fallback={<div/>}><JavascriptIcon/></Suspense></SkillItem>
        <SkillItem skill="HTML"><Suspense fallback={<div/>}><HtmlIcon/></Suspense></SkillItem>
        <SkillItem skill="CSS"><Suspense fallback={<div/>}><CssIcon/></Suspense></SkillItem>
        <SkillItem skill="C++"><Suspense fallback={<div/>}><CppIcon/></Suspense></SkillItem>
        <SkillItem skill="React"><Suspense fallback={<div/>}><ReactIcon/></Suspense></SkillItem>
        <SkillItem skill="Java"><Suspense fallback={<div/>}><JavaIcon/></Suspense></SkillItem>
        <SkillItem skill="Python"><Suspense fallback={<div/>}><PythonIcon/></Suspense></SkillItem>
        <SkillItem skill="TypeScript"><Suspense fallback={<div/>}><TypescriptIcon/></Suspense></SkillItem>
        <SkillItem skill="AWS"><Suspense fallback={<div/>}><AwsIcon/></Suspense></SkillItem>
        <SkillItem skill="MongoDB"><Suspense fallback={<div/>}><MongoDbIcon/></Suspense></SkillItem>
        <SkillItem skill="MySQL"><Suspense fallback={<div/>}><MySqlIcon/></Suspense></SkillItem>
      </Grid>
    </Section>
  );
}