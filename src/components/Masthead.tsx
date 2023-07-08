import {AppBar, SvgIcon, Toolbar, Typography} from "@mui/material";

function Triangle() {
  return (
    <SvgIcon fontSize={"small"} sx={{position: "relative", top: 2}}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490">
        <path fill="white" d="M0 456.701h490L245 33.299 0 456.701zm137.318-77.197L245 193.409l107.682 186.094H137.318z"/>
      </svg>
    </SvgIcon>
  );
}

export default function Masthead() {
  return (
    <AppBar position="fixed" elevation={0} color={"transparent"}>
      <Toolbar>
        <Typography variant="h5" sx={{flexGrow: 1, fontWeight: "bold"}} color="white">
          G R E Y H <Triangle/> M E
        </Typography>
      </Toolbar>
    </AppBar>
  );
}