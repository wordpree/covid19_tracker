import React from "react";
import BarChart from "../BarChart";
import PieChart from "../PieChart";
import { Country as CountyType } from "../../util/type";
import { Grid, Card } from "@material-ui/core";
import { barDataSortByCountry, pieDataSortByCountry } from "../../util";

interface ICProps {
  case: CountyType | undefined;
}

const Country = (props: ICProps) => {
  if (!props.case) return null;

  const barDataNew = barDataSortByCountry(props.case, "new");
  const barData = barDataSortByCountry(props.case, "brief");
  const pieData = pieDataSortByCountry(props.case);

  return (
    <div style={{ marginBottom: "10rem" }}>
      <div style={{ margin: "2rem auto" }}>
        <Card>
          <BarChart data={barData} />
        </Card>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <BarChart data={barDataNew} />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <PieChart data={pieData} />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Country;
