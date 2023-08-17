import {AppBar, SvgIcon, Toolbar, Typography} from "@mui/material";
import HammerSickle from "./HammerSickle";

function Logo() {
  return (
    <SvgIcon fontSize={"large"}>
      <HammerSickle/>
    </SvgIcon>
  );
}

export default function Masthead() {
  return (
    <AppBar position="fixed" elevation={0} color={"transparent"} sx={{backdropFilter: "blur(10px)"}}>
      <Toolbar>
        <Logo/>
        <Typography variant="h5" sx={{flexGrow: 1, fontWeight: "bold", ml: 1}} color="white">
          Soweird Union
        </Typography>
      </Toolbar>
    </AppBar>
  );
}