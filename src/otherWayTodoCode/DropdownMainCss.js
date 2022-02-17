import { makeStyles } from "@mui/styles";

export const DropdownMainCss = makeStyles({
  navLinks: {
    margin: "10px 15px 0px 10px",
    textDecoration: "none",
    color: "black",
    minHeight: "40px",
    backgroundColor: "transparent",
    padding: "2px",
    fontSize: "15px",
    fontWeight: "lighter",

    "&:hover": {
      cursor: "pointer",
      color: "black",
      height: "20px",
      // width: "120px",
      backgroundColor: "rgb(238, 238, 238)",
      borderTop: "2px rgb(255, 0, 200) solid",
    },
    "& .menu": {
      height: "600px !important",
      width: "400px !important",
      border: "solid 5px rgb(238, 238, 238) !important",
      display: "flex !important",
      flexDirection: "column !important",
      overflowY: "auto !important",
    },
  },
});
