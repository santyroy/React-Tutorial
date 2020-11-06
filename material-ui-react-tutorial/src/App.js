import React from "react";
import logo from "./logo.svg";
import "./App.css";

import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Save from "@material-ui/icons/Save";
import CloudUpload from "@material-ui/icons/CloudUpload";
import Delete from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import "fontsource-roboto";
import Topography from "@material-ui/core/Typography";

import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";

import { orange } from "@material-ui/core/colors";

const myStyle = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6888, #FF8E53)",
    border: 0,
    borderRadius: 15,
    color: "white",
    padding: "5px 30px",
    marginBottom: 15,
  },
});

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 48,
    },
  },
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

function ButtonStyled() {
  const classes = myStyle();
  return <Button className={classes.root}>Test Styled Button</Button>;
}

function CheckBoxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        }
        label="Testing Checkbox"
      />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <div className="App" style={{ marginTop: 80 }}>
          <header className="App-header">
            <AppBar>
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Topography variant="h6">MUI Theming</Topography>
                <Button>Login</Button>
              </Toolbar>
            </AppBar>

            <Topography variant="h2" component="header">
              Welcome To MUI
            </Topography>
            <Topography variant="subtitle1">
              Learn how to use Material UI
            </Topography>
            <ButtonStyled />

            <Grid container spacing={5} justify="center">
              <Grid item xs={12} sm={3}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
            </Grid>

            <TextField
              variant="filled"
              color="secondary"
              type="email"
              label="The Email"
              placeholder="email@email.com"
            />
            <CheckBoxExample />
            <ButtonGroup>
              <Button
                startIcon={<Save />}
                endIcon={<CloudUpload />}
                href="#"
                onClick={() => alert("Save")}
                variant="contained"
                color="primary"
                size="large"
                style={{ fontSize: 16 }}
              >
                Save
              </Button>
              <Button
                startIcon={<Delete />}
                href="#"
                onClick={() => alert("Discard")}
                variant="contained"
                color="secondary"
                size="large"
                style={{ fontSize: 16 }}
              >
                Discard
              </Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
