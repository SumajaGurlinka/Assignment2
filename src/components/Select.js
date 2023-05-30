import React, { useState } from "react";
import Select, { components, DropdownIndicatorProps } from "react-select";
import { useNavigate } from "react-router";
import makeStyles from "@mui/styles/makeStyles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
const useStyles = makeStyles({
  select: {
    margin: "10px",
    padding: "10px",
    width: "1300px",

    background: "#F2EBE1",
    height: "720px",
  },
  select1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  arrow: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  h2: {
    margin: "10px",
  },
});
const customStyles = {
  control: (provided) => ({
    ...provided,
    width: "600px",
    height: "90px",

    borderRadius: "10px",
  }),
  menu: (provided) => ({
    ...provided,
    width: "600px",
    height: "190px",
    marginBottom: "20px",
    borderRadius: "10px",
  }),
};
const Select1 = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const arrow = () => {
    navigate("/");
  };
  const options = [
    { value: "pre-program", label: "Pre-Program" },
    { value: "Post-Program", label: "Post-Program" },
    { value: "Mid-Program", label: "Mid-Program" },
    { value: "Qtr1", label: "Qtr1" },
    { value: "Qtr2", label: "Qtr2" },
  ];
  return (
    <div className={classes.select}>
      <div className={classes.arrow}>
        <IconButton onClick={arrow}>
          <ArrowBackIcon />
        </IconButton>
        <h2 className={classes.h2}>Select Time Period</h2>
      </div>
      <div className={classes.select1}>
        <Select
          options={options}
          defaultValue={options[0]}
          styles={customStyles}
        />
      </div>
    </div>
  );
};

export default Select1;
