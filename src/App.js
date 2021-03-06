import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import AppBar from "./components/AppBar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    padding: theme.spacing(0, 0),
    margin: { margin: "0px" },
    justifyContent: "space-between",
  },
  main: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(0, 0),
    justifyContent: "space-between",
  },
  footer: {
    padding: theme.spacing(2, 2),
    marginTop: "auto",
    backgroundColor: theme.palette.primary.main,
    // color: theme.palette.primary.contrastText
  },
  header: {
    paddingBottom: "2px",
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Container className={classes.main}>
        <AppBar />
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            Toggle Theme
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            {"Click the toggle buttons down below to switch between themes."}
          </Typography>
        </Container>
      </Container>
      <Container className={classes.footer} />
    </Container>
  );
}
