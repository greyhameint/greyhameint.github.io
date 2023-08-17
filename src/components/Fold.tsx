import {Box, Container, Typography} from "@mui/material";

// https://unsplash.com/t/3d-renders

export default function Fold() {
  return <Box
    sx={{
      // no - would overflow because of right scrollbar
      // width: "100vw",
      height: "100vh",
      // https://unsplash.com/photos/pELem6Qj_GE
      backgroundImage: "url(https://images.unsplash.com/photo-1683560901896-52ed09af616f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundColor: "black",

      // lazy center
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",

      color: "white"
    }}
  >
    <Container maxWidth={"sm"} sx={{backdropFilter: "blur(10px)", padding: 4}}>
      <Typography paragraph>
        Soweird Union is a bootstrapped micro game studio based in London and Hong Kong.
      </Typography>
      <Typography sx={{fontWeight: "bold", marginTop: 4}}>
        © {new Date().getFullYear()} Soweird Union
      </Typography>
    </Container>
  </Box>;
}