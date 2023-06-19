import React from "react";
import { CircularProgress, Grid, makeStyles } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
}));
const Loading = ({ compHeight }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className="mt-1">
      <Grid item xs={12} className={classes.root}>
        <div className="mt-3" style={{ position: "relative" }}>
          <div>
            <div>
              <Grid container>
                <Grid item md={12} className="text-center">
                  <div
                    style={{
                      height: "100px",
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CircularProgress size={100} />
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Loading;
