import React, { useState, ChangeEvent } from "react";
import { Tabs, Tab, makeStyles, Paper, Typography } from "@material-ui/core";
import { ViewGrid, MapMarker, Map } from "mdi-material-ui";
import TabPanel from "./TabPanel";
import { BriefCasesProvider, DailyCasesProvider } from "./context";
import { Brief } from "./brief";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    height: "100%",
    marginRight: 180,
    background: "rgb(58, 171, 166)",
    color: "#eee",
    maxWidth: 120,
    top: 0,
    zIndex: 999,
  },
  title: {
    fontWeight: "bold",
    borderBottom: "2px inset aliceblue",
    textAlign: "center",
    padding: "2rem 2px",
    lineHeight: 2,
  },
  center: {
    alignItems: "center",
    paddingTop: "1rem",
    "&>button": {
      padding: "1rem 0",
    },
  },
  indicator: {
    background: "#F7B03B",
  },
}));

const TabNav = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (e: ChangeEvent<{}>, value: number) => {
    setValue(value);
  };
  return (
    <BriefCasesProvider>
      <DailyCasesProvider>
        <Paper className={classes.root}>
          <Typography variant="h6" className={classes.title}>
            Covid-19
          </Typography>
          <Tabs
            classes={{
              flexContainer: classes.center,
              indicator: classes.indicator,
            }}
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="tabs navigation"
          >
            <Tab label="Global" icon={<ViewGrid />} />
            <Tab label="Country" icon={<MapMarker />} />
            <Tab label="Map" icon={<Map />} />
          </Tabs>
        </Paper>
        <TabPanel value={value} index={0}>
          <Brief />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </DailyCasesProvider>
    </BriefCasesProvider>
  );
};

export default TabNav;
