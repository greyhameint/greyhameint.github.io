import {Box} from "@mui/material";

// https://unsplash.com/t/3d-renders

export default function Fold() {
  return <Box
    sx={{
      // no - would overflow because of right scrollbar
      // width: "100vw",
      height: "100vh",
      // https://unsplash.com/photos/pELem6Qj_GE
      backgroundImage: "url(https://images.unsplash.com/photo-1680288103814-114a5052ae9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundColor: "black"
    }}
  />;
}