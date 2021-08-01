import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Brightness4, Brightness7 } from "@material-ui/icons";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import React, { useContext } from "react";
import { CustomThemeContext } from "./CustomThemeProvider";

const useStyles = makeStyles((theme) => ({
  button: {
    color: theme.palette.primary.contrastText,
  },
}));

export default function ThemeToggle() {
  const classes = useStyles();
  const { currentTheme, setTheme } = useContext(CustomThemeContext);

  const handleThemeChange = (event, newTheme) => {
    setTheme(currentTheme === "normal" ? newTheme : "normal");
  };

  return (
    <>
      <ToggleButtonGroup
        className={classes.root}
        value={currentTheme}
        exclusive
        size="small"
        onChange={handleThemeChange}
      >
        <ToggleButton className={classes.button} value="pastelCandy">
          {/* <PaletteIcon /> */}
          <IconButton>
            {" "}
            {currentTheme === "normal" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}
