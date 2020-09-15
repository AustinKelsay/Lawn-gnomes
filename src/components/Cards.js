import React from "react";
import "./components.css";
import img1 from "../images/1.jpg"
import img2 from "../images/2.jpg"
import img3 from "../images/3.jpg"
import img4 from "../images/4.jpg"
import img5 from "../images/5.jpg"
import img6 from "../images/6.jpg"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
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
    paddingBottom: 'none'
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Cards = () => {
  const cards = [
    {
      id: 1,
      img: img1,
      text: "We now offer mosquito fogging!  (Over 75 insects: Stink Bugs, Bed Bugs, Scorpions, Spiders, Mosquitoes, Cockroaches, Ticks, Fleas, Pillbugs, Chinch Bugs, Earwigs, Millipedes, Dichondra Flea Beetles, Spittlebugs and others)"
    },
    {
      id: 2,
      img: img2,
      text: "We can do stone work for your garden or patio! We source our stones locally and can work around a number of different jobs not just strict 'brick stacking'"
    },
    {
      id: 3,
      img: img3,
      text: "Busy during the holidays? We will set up your lights in no time! We would love to help make your house the shining star of your street!"
    },
    {
      id: 4,
      img: img4,
      text: "We do brick work of all kinds, reach out and we can give you an estimate today!"
    },
    {
      id: 5,
      img: img5,
      text: "Let us transform your garden with fresh flowers, iron garden lining, stones, and soil substitutions!"
    },
    {
      id: 6,
      img: img6,
      text: "We can also do custom planters for your home or bussiness!"
    },
];

  const classes = useStyles();

    return(
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.img}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h3">
                      Services
                    </Typography>
                    <Typography gutterBottom variant="subtitle2" component="p">{card.text}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    )
}

export default Cards;