import { Container, Grid, makeStyles, Paper, Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import singleVenue from "../../api/singleVenue";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Venue() {
  const classes = useStyles();
  const { id } = useParams();
  const [data, setData] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    singleVenue(id, 20190724)
      .then((res) => {
        const venueData = res.data.response.venue;
        setData(venueData);
      })
      .catch((err) => setError(err.response.data.meta.errorDetail));
  }, [id]);
  if (data) {
    return (
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h2>{data && data.name}</h2>
              {data &&
                data.categories.map((category, index) => {
                  return (
                    <h3 className="venue-category" key={index}>
                      {category.name}
                    </h3>
                  );
                })}
              <p className="venue-category">{data && data.description}</p>

              <Button
                className="search-button"
                type="button"
                variant="contained"
                color="primary"
              >
                <a className="read-more-text" href={data && data.url}>
                  Read more
                </a>
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <h2>Location</h2>
              <p className="venue-category">
                {data && data.location.address}
                <br />
                {data && data.location.city}
                <br />
                {data && data.location.country}
              </p>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <h2>Time frames</h2>
              {data &&
                data.popular.timeframes.map((item, index) => (
                  <p key={index} className="venue-category">
                    {item && item.days}: &nbsp;
                    {item &&
                      item.open.map((item, index) => (
                        <span key={index}>{item.renderedTime}</span>
                      ))}
                  </p>
                ))}
            </Paper>
          </Grid>
        </Grid>
        <Button
          className="search-button read-more-button"
          type="button"
          variant="contained"
          color="primary"
        >
          <Link className="read-more-text" to="/">
            {"< Home"}
          </Link>
        </Button>
      </Container>
    );
  } else if (error) {
    return (
      <Container>
        <h1>Error: {error}</h1>
      </Container>
    );
  } else {
    return (
      <Container>
        <h1>Loading...</h1>
      </Container>
    );
  }
}

export default Venue;
