import React, { useEffect, useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useNavigate } from "react-router";
import { IconButton, TextField } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import Checkbox from "@mui/material/Checkbox";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const useStyles = makeStyles({
  select: {
    margin: "10px",
    padding: "10px",
    width: "1300px",
    background: "#F2EBE1",
    height: "720px",
  },
  arrow: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
});

const API_URL = "https://jsonplaceholder.typicode.com/users";

const CustomCheckBox = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [checkboxData, setCheckboxData] = useState([]);

  const arrow = () => {
    navigate("/");
  };

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setCheckboxData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={classes.select}>
      <div className={classes.arrow}>
        <IconButton onClick={arrow}>
          <ArrowBackIcon />
        </IconButton>
      </div>
      <FormGroup>
        {checkboxData.map((item, index) => (
          <FormControlLabel
            key={index}
            control={<Checkbox />}
            label={item.name}
          />
        ))}
      </FormGroup>
    </div>
  );
};

export default CustomCheckBox;
