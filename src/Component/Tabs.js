import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withRouter } from "react-router-dom";
import { RoleContext } from "../Context/RoleProvider";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const CenterTabs = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [activeStep, setActiveStep] = React.useContext(RoleContext);
  console.log("FROM TABS",activeStep)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={activeStep}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab
          label="Request"
          onClick={() => {
            props.history.push("./request");
          }}
        />
        <Tab
          label="Service"
          onClick={() => {
            props.history.push("./service");
          }}
        />
        <Tab
          label="Payment"
          onClick={() => {
            props.history.push("./payment");
          }}
        />
      </Tabs>
    </Paper>
  );
};
export default withRouter(CenterTabs);
