import React from "react";
import ModalComponent from "./ModalComponent";
import "./components.css";
import img1 from "../images/1.jpg"
import img2 from "../images/2.jpg"
import img3 from "../images/3.jpg"
import img4 from "../images/4.jpg"
import img5 from "../images/5.jpg"
import img6 from "../images/6.jpg"
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
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
      img: img1
    },
    {
      id: 2,
      img: img2
    },
    {
      id: 3,
      img: img3
    },
    {
      id: 4,
      img: img4
    },
    {
      id: 5,
      img: img5
    },
    {
      id: 6,
      img: img6
    },
];

  const classes = useStyles();

    return(
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.img}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                    <ModalComponent />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    )
}

export default Cards;