import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Grid } from "@material-ui/core";
import queryString from "query-string";
import { saveUserToken } from "../state/actions/actions";

const Home = ({ location, saveUserTokenAction }) => {
  useEffect(() => {
    if (location.search) {
      const values = queryString.parse(location.search);
      const { code } = values;
      saveUserTokenAction(code);
    }
  });

  return (
    <Grid
      justify="center"
      alignItems="center"
      direction="row"
      container
      style={{ margin: 16 }}
    >
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          href="https://github.com/login/oauth/authorize?client_id=e7500c886684f9dbf4c7"
        >
          Sign in with github
        </Button>
      </Grid>
    </Grid>
  );
};

export default connect(null, (dispatch) => {
  return {
    saveUserTokenAction: (code) => {
      dispatch(saveUserToken(code));
    }
  };
})(withRouter(Home));
