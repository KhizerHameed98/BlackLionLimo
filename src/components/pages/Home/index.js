import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { getTopNews } from "../../../Redux/Reducers/MainDashboard";
import ToolBar from "../../layout/timeLineToolBar";
import Loading from "../../layout/Loading";
import ListCard from "../../layout/cards";
import carImage2 from "../../../assets/images/carImage2.jpg";
import carImage768 from "../../../assets/images/carImage768.jpg";
import carImage400 from "../../../assets/images/carImage400.jpg";
import carImage1024 from "../../../assets/images/carImage1024.jpg";
import carImage1980 from "../../../assets/images/carImage1980.jpg";
import cardImage from "../../../assets/images/cardImage.jpg";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  cardGrid2: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),

    fontWeight: "bold",
    marginLeft: theme.spacing(5),
    fontFamily: "nyt-imperial,georgia,times new roman,times,serif",
  },
  textGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),

    fontWeight: "bold",
    marginLeft: theme.spacing(5),
    fontFamily: "AvenirNextDemiBold,Helvetica,Arial,Open Sans,sans-serif",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    height: "100px",
  },
  imageBackground: {
    // backgroundImage: `url(${carImage2})`,
    // height: "500px",
    // /* Full height */
    // // height: "100%",

    // /* Center and scale the image nicely */
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
    overflowY: "hidden",
    display: "flex",
    width: "100%",
    zIndex: "-1",
  },
  cardContent: {
    flexGrow: 1,
  },
  midCard: {
    maxWidth: 400,
  },
  midCardMedia: {
    height: 100,
  },

  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loading, newsList, listByState } = useSelector(
    (state) => state.npReducers.dashboard
  );
  const listByEnum = {
    All: "All",
    World: "World",
    Science: "Science",
  };
  const [listBy, setListBy] = useState(
    listByState ? listByState : listByEnum?.All
  );

  useEffect(() => {
    if (!newsList) {
      dispatch(getTopNews(listBy));
    }
  }, []);

  const toolChangeHandle = (value) => {
    setListBy(value);
    dispatch(getTopNews(value));
  };
  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="lg">
            <Typography
              // className="mt-3 pl-4"
              className={classes.cardGrid2}
              component="h1"
              variant="h4"
              color="textPrimary"
            >
              Your global chauffeur service
            </Typography>
          </Container>

          <div className={classes.imageBackground}>
            <picture>
              <source
                srcSet={carImage400}
                media="(max-width: 400px)"
                type="image/webp"
              />
              <source
                srcSet={carImage768}
                media="(max-width: 768px)"
                type="image/webp"
              />
              <source
                srcSet={carImage1024}
                media="(max-width: 1024px)"
                type="image/webp"
              />
              {/* <source
                srcSet={carImage1980}
                media="(max-width: 3840px)"
                type="image/webp"
              /> */}
              <img src={carImage2} style={{ backgroundSize: "cover" }} />
            </picture>
          </div>

          <div className="DownloadAppQr_fullWidthBg__EbnW3">
            <section>
              <Container maxWidth="lg">
                <Typography
                  // className="mt-3 pl-4"
                  className={classes.cardGrid2}
                  component="h1"
                  variant="h4"
                  color="textPrimary"
                  style={{
                    color: "white",
                    paddingBottom: "150px",
                    paddingTop: "50px",
                  }}
                >
                  Chauffeurs at your fingertips
                  <p
                    style={{
                      color: "white",
                      fontSize: "15px",
                      marginTop: "10px",
                      fontWeight: "lighter",
                    }}
                  >
                    Download the Blacklane app to easily book safe, private
                    rides while you're on the go.
                  </p>
                </Typography>
              </Container>
            </section>
          </div>
          <Container maxWidth="lg">
            <Grid container style={{ marginTop: "200px" }}>
              <Grid item xs={12} md={4} sm={12}>
                <Card className={classes.midCard}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.midCardMedia}
                      image={cardImage}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        City to City rides
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Your stress-free solution for traveling between cities,
                        with chauffeurs across the globe.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    {/* <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button size="small" color="primary">
                      Learn More
                    </Button> */}
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} md={4} sm={12}>
                <Card className={classes.midCard}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.midCardMedia}
                      image={cardImage}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        City to City rides
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Your stress-free solution for traveling between cities,
                        with chauffeurs across the globe.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    {/* <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button size="small" color="primary">
                      Learn More
                    </Button> */}
                  </CardActions>
                </Card>
              </Grid>{" "}
              <Grid item xs={12} md={4} sm={12}>
                <Card className={classes.midCard}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.midCardMedia}
                      image={cardImage}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        City to City rides
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Your stress-free solution for traveling between cities,
                        with chauffeurs across the globe.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    {/* <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button size="small" color="primary">
                      Learn More
                    </Button> */}
                  </CardActions>
                </Card>
              </Grid>{" "}
              <Grid item xs={12} md={4} sm={12}>
                <Card className={classes.midCard}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.midCardMedia}
                      image={cardImage}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        City to City rides
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Your stress-free solution for traveling between cities,
                        with chauffeurs across the globe.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    {/* <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button size="small" color="primary">
                      Learn More
                    </Button> */}
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>

          {/* <div className={classes.heroButtons}>
            <Grid container spacing={2} justifyContent="center">
              <ToolBar
                listBy={listBy}
                setListBy={setListBy}
                listByEnum={listByEnum}
                toolChangeHandle={toolChangeHandle}
                loading={loading}
              />
            </Grid>
          </div> */}
        </div>
        {/* <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {loading ? (
              <Loading />
            ) : (
              <ListCard data={newsList} classes={classes} />
            )}
          </Grid>
        </Container> */}
      </main>

      {/* End footer */}
    </React.Fragment>
  );
}
