import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Radio, FormControlLabel, RadioGroup } from "@mui/material";
import { Avatar, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles({
  select: {
    margin: "10px",
    padding: "10px",
    width: "1300px",
    background: "#F2EBE1",
    height: "720px",
  },
});

const API_URL = "https://jsonplaceholder.typicode.com/users";

const CustomRadio = () => {
  const classes = useStyles();
  const [Data, setData] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");

  const navigate = useNavigate();

  const arrow = () => {
    navigate("/");
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        if (data && data.length > 0) {
          setSelectedValue(data[0].name);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={classes.select}>
      <div className={classes.arrow}>
        <IconButton onClick={arrow}>
          <ArrowBackIcon />
        </IconButton>
      </div>
      <RadioGroup
        value={selectedValue}
        onChange={handleChange}
        sx={{ padding: "50px" }}
      >
        {Data?.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option.name}
            control={<Radio />}
            label={option.name}
          />
        ))}
      </RadioGroup>
    </div>
  );
};

export default CustomRadio;
