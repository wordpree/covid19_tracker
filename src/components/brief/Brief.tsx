import React from "react";
import { Active, Close, All } from "./index";
import { IBrief } from "../../util/type";
import { Card, Container, Grid } from "@material-ui/core";
import Loading from "../Loading";

const Brief = ({
  cases,
  deaths,
  recovered,
  active_cases,
  closed_cases,
}: IBrief) => {
  return cases ? (
    <Container style={{ marginTop: "3rem" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Card>
            <Active active={active_cases} />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <Close closed={closed_cases} />
          </Card>
        </Grid>
      </Grid>
      <Card style={{ marginTop: "3rem" }}>
        <All cases={cases} deaths={deaths} recovered={recovered} />
      </Card>
    </Container>
  ) : (
    <Loading value={100} />
  );
};

export default Brief;
