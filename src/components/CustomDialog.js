import React, { useState } from "react";
import Select, { components, DropdownIndicatorProps } from "react-select";
import makeStyles from "@mui/styles/makeStyles";
import LeftPaneItems from "./LeftPaneItems";
import { useNavigate } from "react-router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";

const useStyles = makeStyles({
  select: {
    margin: "10px",
    padding: "10px",
    width: "1300px",
    background: "#F2EBE1",
    height: "720px",
  },
  dialogPaper: {
    minHeight: "40vh",

    background: "#DC143C",
    width: "70px",
  },
  arrow: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  h2: {
    margin: "10px",
  },
  button: {
    padding: "20px",
    display: "flex",
    justifyContent: "center",

    margin: "10px",
  },
});

const CustomDialog = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDialogOpen = () => {
    setOpen(true);
  };
  const arrow = () => {
    navigate("/");
  };
  const handleDialogClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.select}>
      <div className={classes.arrow}>
        <IconButton onClick={arrow}>
          <ArrowBackIcon />
        </IconButton>
      </div>
      <div>
        <IconButton onClick={handleDialogOpen}>
          <AddIcon />
        </IconButton>

        <Dialog
          open={open}
          onClose={handleDialogClose}
          fullWidth
          maxWidth="sm"
          classes={{ paper: classes.dialogPaper }}
        >
          <DialogTitle
            sx={{
              height: "70px",
              background: "#00008B",
              display: "flex",
              justifyContent: "center",
              fontSize: "40px",
              color: "white",
            }}
          >
            Leave This Page?
          </DialogTitle>
          <DialogContent
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Your progress will not be saved
          </DialogContent>
          <DialogActions>
            <div className={classes.button}>
              <Button
                style={{ fontFamily: "Manrope, sans-serif" }}
                sx={{
                  background: "white",
                  border: "2px solid blue",
                  paddingBottom: "50px",
                  paddingTop: "50px",
                  padding: "15px",
                  width: "220px",
                  borderRadius: "20px",
                  margin: "20px",
                  fontweight: "bold",
                  color: "blue",
                }}
                onClick={handleDialogClose}
              >
                Cancel
              </Button>
              <Button
                style={{ fontFamily: "Manrope, sans-serif" }}
                sx={{
                  background: "#DC143C",
                  paddingBottom: "50px",
                  paddingTop: "50px",
                  padding: "15px",
                  width: "220px",
                  borderRadius: "20px",
                  margin: "20px",
                  fontweight: "bold",
                  color: "blue",
                }}
              >
                Leave
              </Button>
            </div>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default CustomDialog;
