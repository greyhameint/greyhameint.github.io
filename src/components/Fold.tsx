import {Box, Container, Typography} from "@mui/material";

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
      backgroundColor: "black",

      // lazy center
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",

      color: "white"
    }}
  >
    <Container maxWidth={"sm"}>
      <Typography sx={{fontWeight: "bold"}} paragraph>
        Games used to be made by nerds. Now they are made by business people.
      </Typography>
      <Typography paragraph>
        The games industry lacks innovation.
        The reason is simple - it's risky to bet big budgets on untested ideas.
        So developers stick to what's worked before, churning out sequel after sequel with formulaic gameplay.
        {/*7 of 2022's 10 most-played game franchises also featured in 2021's top 10.*/}
      </Typography>
      <Typography paragraph>
        The catch is that to make great games that sell, developers need to push boundaries.
        The most successful games are made by the most creative teams,
        unshackled from the diktats of management.
      </Typography>
      <Typography paragraph>
        Greyhame Interactive is a bootstrapped micro game studio based in London and Hong Kong.
      </Typography>
    </Container>
    <Typography sx={{fontWeight: "bold", marginTop: 4}}>
      © {new Date().getFullYear()} Greyhame Interactive
    </Typography>
  </Box>;
}