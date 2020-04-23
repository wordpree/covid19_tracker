import React, { useState } from "react";
import { BriefCasesContext } from "./context";
import Loading from "./Loading";
import Country from "./country";
import { Typography } from "@material-ui/core";
import {
  NativeSelect,
  makeStyles,
  FormControl,
  InputLabel,
  Container,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  title: {
    margin: "3rem auto 1.5rem",
  },
  formControl: {
    width: "50%",
    minWidth: 200,
    padding: "8px 0",
    marginBottom: "1rem",
  },
  selectEmpty: {},
}));

const Options = () => {
  const classes = useStyles();
  const { countries } = BriefCasesContext();
  const [country, setCountry] = useState("Australia");
  const handleChange = (e: React.ChangeEvent<{ value: string }>) => {
    setCountry(e.target.value);
  };
  const countryCase = countries.find((item) => item.Country === country);
  return countries.length ? (
    <Container className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        Covid-19 situaction around {country}
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="country-cases">Country</InputLabel>
        <NativeSelect
          value={country}
          onChange={handleChange}
          inputProps={{
            name: "country",
            id: "country-cases",
          }}
        >
          {countries.slice(0, countries.length - 1).map((country) => (
            <option key={country.Country} value={country.Country}>
              {country.Country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
      <div>
        <Country case={countryCase} />
      </div>
    </Container>
  ) : (
    <Loading value={100} />
  );
};

export default Options;
