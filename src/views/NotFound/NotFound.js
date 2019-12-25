import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 4
  },
  content: {
    paddingTop: 150,
    textAlign: 'center'
  },
  image: {
    marginTop: 50,
    display: 'inline-block',
    maxWidth: '100%',
    width: 560
  }
}));

const NotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        justify="center"
        spacing={4}
      >
        <Grid
          item
          lg={6}
          xs={12}
        >
          <div className={classes.content}>
            <Typography variant="h5">
              404: お探しのページは見つかりませんでした。
            </Typography>
            <img
              alt="Under development"
              className={classes.image}
              src={ `${ process.env.PUBLIC_URL }/images/not_found.svg` }
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default NotFound;
