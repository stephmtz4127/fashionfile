import { makeStyles } from "@mui/styles";

export const DropdownMainCss = makeStyles({
  navLinks: {
    margin: "10px 15px 0px 10px",
    textDecoration: "none",
    color: "black",
    minHeight: "40px",
    width: "90px",
    backgroundColor: "transparent",
    padding: "2px",
    fontSize: "15px",
    fontWeight: "lighter",
    border: "none",

    "&:hover": {
      cursor: "pointer",
      color: "black",
      height: "10px",
      width: "100%",
      textAlign: "center",
      backgroundColor: "rgb(238, 238, 238)",
      borderTop: "2px #f09 solid",
      // padding: "1px 1px 1px 1px",
    },
    "& .menu": {
      height: "600px !important",
      width: "200px !important",
      border: "solid 5px rgb(238, 238, 238) !important",
      display: "flex !important",
      flexDirection: "column !important",
      overflowY: "auto !important",
    },
  },
});
