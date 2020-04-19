import React from "react";
import { Active, Close, All, Daily } from "./index";
import { Card, Container, Grid } from "@material-ui/core";
import Loading from "../Loading";
import { BriefCasesContext } from "../context";

const Brief = () => {
  const {
    cases,
    deaths,
    recovered,
    active_cases,
    closed_cases,
  } = BriefCasesContext();

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
      <Card style={{ marginTop: "3rem" }}>
        <Daily />
      </Card>
    </Container>
  ) : (
    <Loading value={100} />
  );
};

export default Brief;
