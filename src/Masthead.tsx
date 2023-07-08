import {AppBar, Toolbar, Typography} from "@mui/material";

export default function Masthead() {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <Typography variant="h5" sx={{flexGrow: 1, fontWeight: "bold"}}>
          G R E Y H A M E
        </Typography>
      </Toolbar>
    </AppBar>
  );
}