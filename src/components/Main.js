import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { SocialIcon } from 'react-social-icons';
import Logo from "../Logo.png"
import "./components.css"

import Cards from "./Cards";

import EmailModal from "./EmailModal";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#2E933C"

  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(0),
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },
  card: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(4),
  },
  footerIcon: {
    marginTop: '1%'
  }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Main() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.appBar} position="relative">
        <Toolbar>
          <h1 className="header">The Lawn Gnome</h1>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <img className="logo" src={Logo} />
            <div className="social-icons">
              <SocialIcon url='https://www.facebook.com/thelawngnomeokc' target="_blank" />
            </div>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <EmailModal />
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Cards />
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          The Lawn Gnome
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Follow us on social media!
        </Typography>
        <div className={classes.footerIcon}>
          <SocialIcon url='https://www.facebook.com/thelawngnomeokc' target="_blank" />
        </div>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}