import { makeStyles } from "@material-ui/core";

const DashHeaderStyle = makeStyles({
  dashDataCont: {
    height: "100%",
    width: "800px ",
    marginLeft: "30px",
  },
  dashDataContTwo: {
    height: "100%",
    width: "800px ",
    marginLeft: "400px",
    marginTop: "10px",
  },
  dashPinkHeader: {
    height: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    textAlign: "left",
    borderLeft: "solid 4px rgb(221, 4, 185)",
    borderTop: "1px solid rgb(204, 204, 204)",
    borderRight: "1px solid rgb(204, 204, 204)",
    borderBottom: "1px solid rgb(204, 204, 204)",
  },
  pinkLabel: {
    fontSize: "30px",
    fontWeight: 400,
    color: "rgb(221, 4, 185)",
    marginLeft: "30px",
    marginTop: "10px",
  },
  pinkLabelTwo: {
    marginLeft: "30px",
    fontSize: "20px",
    paddingTop: "15px",
  },
});

export default DashHeaderStyle;
