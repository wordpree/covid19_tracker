import React, { useState, ChangeEvent } from "react";
import { Tabs, Tab, makeStyles, Paper, Typography } from "@material-ui/core";
import { ViewGrid, MapMarker, Map } from "mdi-material-ui";
import TabPanel from "./TabPanel";
import MobileNav from "./MobileNav";
import { BriefCasesProvider, DailyCasesProvider } from "./context";
import { Brief } from "./brief";
import Options from "./Options";
import img from "../assets/covid-19.png";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    clear: "both",
    maxHeight: 0,
    transition: "max-height .2s ease-out",
    overflow: "hidden",
  },
  paper: {
    background: "rgb(58, 171, 166)",
    color: "#eee",
    [theme.breakpoints.up(768)]: {
      position: "fixed",
      height: "100%",
      maxWidth: 120,
      top: 0,
      zIndex: 999,
    },
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
    "&>button": {
      padding: "1rem 0",
    },
  },
  indicator: {
    background: "#F7B03B",
  },
  tabRoot: {
    [theme.breakpoints.down(768)]: {
      minWidth: "100%",
    },
  },
  selected: {
    transition: "all 0.3s",
    background: "#42C2BB",
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
        <MobileNav />
        <div className={`${classes.wrapper} wrapper`}>
          <Paper className={classes.paper}>
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
              <Tab
                label="Global"
                icon={<ViewGrid />}
                classes={{
                  selected: classes.selected,
                  root: classes.tabRoot,
                }}
              />
              <Tab
                label="Country"
                icon={<MapMarker />}
                classes={{
                  root: classes.tabRoot,
                  selected: classes.selected,
                }}
              />
              <Tab
                label="Map"
                icon={<Map />}
                classes={{
                  root: classes.tabRoot,
                  selected: classes.selected,
                }}
              />
            </Tabs>
          </Paper>
        </div>
        <TabPanel value={value} index={0}>
          <Brief />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Options />
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
          {console.log(img)}
        </TabPanel>
      </DailyCasesProvider>
    </BriefCasesProvider>
  );
};

export default TabNav;
