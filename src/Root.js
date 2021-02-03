import React, {Suspense, lazy} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect
} from "react-router-dom";
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
//local files
import Home from "./screens/Home";
const ResumePage = lazy(() => import('./screens/ResumePage.js'));
const GatoNoches = lazy(() => import('./screens/GatoNoches'));
const InspirePage = lazy(() => import('./screens/InspirePage'));
const WorstWebsite = lazy(() => import('./screens/WorstWebsite'));

//https://reacttraining.com/react-router/web/guides/quick-start

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#151965',
    },
    secondary: {
      main: '#46b5d1',
    },
    itemContainer: 'rgba(215,218,225,1)',
    backgroundColor1: "rgba(66,179,245,1)",
    backgroundColor2: "rgba(95,44,130,1)",
    backgroundGradient: "linear-gradient(rgba(66,179,245,1) 0%, rgba(95,44,130,1) 100%)",
  },
  typography: {
    fontFamily: "'Merriweather Sans', sans-serif"
  }
});
const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#46b5d1',
    },
    secondary: {
      main: '#151965',
    },
    itemContainer: 'rgb(50, 70, 90)',
    backgroundColor1: "#537895",
    backgroundColor2: "#09203f",
    backgroundGradient: "linear-gradient(#537895 0%, #09203f 100%)"
  },
  typography: {
    fontFamily: "'Merriweather Sans', sans-serif"
  }
});

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    "&::selection": {
      background: "rgba(70, 181, 209, .8)"
    },
    fontFamily: '"Merriweather Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif"'
  }
});

function ScrollToTop(props) {
  const history = useHistory();
  React.useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo({
        top: 0,
        left: 0,
      });
    });
    return unlisten;
  }, [history]);

  return <React.Fragment>{props.children}</React.Fragment>;
};

export default function Root() {
  const [darkMode,setDarkMode]=React.useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const classes = useStyles();
  return (
    <Router id="router">
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <div className={classes.root}>
          <ScrollToTop>
            <Switch>
              <Route exact path='/'>
                <Home/>
              </Route>
              <Route path="/resume">
                <Suspense fallback={<div/>}>
                  <ResumePage darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
                </Suspense>
              </Route>
              <Route path="/gato-noches">
                <Suspense fallback={<div/>}>
                  <GatoNoches/>
                </Suspense>
              </Route>
              <Route path="/inspire">
                <Suspense fallback={<div/>}>
                  <InspirePage/>
                </Suspense>
              </Route>
              <Route path="/worst-website">
                <Suspense fallback={<div/>}>
                  <WorstWebsite/>
                </Suspense>
              </Route>
                <Route path="*">
                  <Redirect to="/"/>
                </Route>
            </Switch>
          </ScrollToTop>
        </div>
      </ThemeProvider>
    </Router>
  );
}
//citation: https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition
