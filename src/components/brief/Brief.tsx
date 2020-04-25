import React from "react";
import { Daily } from "./index";
import BarChart from "../BarChart";
import PieChart from "../PieChart";
import {
  Card,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Loading from "../Loading";
import { BriefCasesContext } from "../context";
import { barDataSort, pieDataSort } from "../../util";

const useStyles = makeStyles({
  title: {
    textAlign: "center",
    margin: "2rem auto",
    color: "#4F4F4F",
    fontWeight: "bold",
  },
  container: { margin: "3rem auto 10rem" },
  card: { marginTop: "3rem" },
});

const Brief = () => {
  const data = BriefCasesContext();
  const classes = useStyles();

  const barData = barDataSort(data);
  const pieData = pieDataSort(data);

  return data.hasOwnProperty("cases") ? (
    <Container className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        Briefing situation about covid-19 cases globally
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <PieChart data={pieData} />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <BarChart data={barData} />
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
