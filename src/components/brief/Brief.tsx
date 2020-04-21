import React from "react";
import { Daily, CasePortion, CaseBar } from "./index";
import {
  Card,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Loading from "../Loading";
import { BriefCasesContext } from "../context";

const useStyles = makeStyles({
  title: {
    textAlign: "center",
    margin: "2rem auto",
    color: "#4F4F4F",
    fontWeight: "bold",
  },
  container: { margin: "3rem auto" },
  card: { marginTop: "3rem" },
});

const Brief = () => {
  const data = BriefCasesContext();
  const classes = useStyles();
  return data.hasOwnProperty("cases") ? (
    <Container className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        Briefing situation about covid-19 cases globally
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CasePortion {...data} />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CaseBar {...data} />
          </Card>
        </Grid>
      </Grid>
      <Card className={classes.card}>
        <Daily />
      </Card>
    </Container>
  ) : (
    <Loading value={100} />
  );
};

export default Brief;
