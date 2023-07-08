import {AppBar, Toolbar, Typography} from "@mui/material";

export default function Masthead() {
  return (
    <AppBar position="fixed" elevation={0} color={"transparent"}>
      <Toolbar>
        <Typography variant="h5" sx={{flexGrow: 1, fontWeight: "bold"}} color="white">
          G R E Y H A M E
        </Typography>
      </Toolbar>
    </AppBar>
  );
}