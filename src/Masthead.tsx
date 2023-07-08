import {AppBar, Toolbar, Typography} from "@mui/material";

export default function Masthead() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          G R E Y H A M E
        </Typography>
      </Toolbar>
    </AppBar>
  );
}