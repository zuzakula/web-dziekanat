import { Divider, Grid, Paper, styled, TextField } from "@mui/material";
import user from "../userInformation.json";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function PersonalData() {
  return (
    <div>
      <h2>Dane osobowe</h2>
      <Divider />
      <h3>Dane personalne</h3>
      <Divider sx={{ "margin-bottom": "2rem" }} />
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Item sx={{ backgroundColor: "rgba(175,0,0,0.74)", color: "white" }}>
            Imię:
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>{user.firstName}</Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{ backgroundColor: "rgba(175,0,0,0.74)", color: "white" }}>
            Nazwisko:
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>{user.surname}</Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{ backgroundColor: "rgba(175,0,0,0.74)", color: "white" }}>
            Imię ojca:
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>{user.fathersName}</Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{ backgroundColor: "rgba(175,0,0,0.74)", color: "white" }}>
            Miejsce urodzenia:
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>{user.placeOfBirth}</Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{ backgroundColor: "rgba(175,0,0,0.74)", color: "white" }}>
            Data urodzenia:
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>{user.dateOfBirth}</Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{ backgroundColor: "rgba(175,0,0,0.74)", color: "white" }}>
            PESEL:
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>{user.pesel}</Item>
        </Grid>
      </Grid>

      <h3>Adres do korespondencji</h3>
      <Divider sx={{ "margin-bottom": "2rem" }} />
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Item sx={{ backgroundColor: "rgba(175,0,0,0.74)", color: "white" }}>
            Ulica:
          </Item>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={user.street}
            disabled
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <Item sx={{ backgroundColor: "rgba(175,0,0,0.74)", color: "white" }}>
            Nr domu:
          </Item>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={user.buildingNumber}
            disabled
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <Item sx={{ backgroundColor: "rgba(175,0,0,0.74)", color: "white" }}>
            Nr mieszkania:
          </Item>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={user.apartamentNumber}
            disabled
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <Item sx={{ backgroundColor: "rgba(175,0,0,0.74)", color: "white" }}>
            Kod pocztowy:
          </Item>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={user.postalCode}
            disabled
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <Item sx={{ backgroundColor: "rgba(175,0,0,0.74)", color: "white" }}>
            Miejscowość:
          </Item>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={user.city}
            disabled
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <Item sx={{ backgroundColor: "rgba(175,0,0,0.74)", color: "white" }}>
            Województwo:
          </Item>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={user.voivodeship}
            disabled
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <Item sx={{ backgroundColor: "rgba(175,0,0,0.74)", color: "white" }}>
            Czy potwierdzono adres:
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>{user.addressConfirmed ? "tak" : "nie"}</Item>
        </Grid>
      </Grid>

      <Button sx={{ color: "rgba(175,0,0,0.74)", marginTop: "30px" }}>
        Potwierdź adres korespondencyjny
      </Button>
      <Button
        sx={{ color: "rgba(175,0,0,0.74)", float: "right", marginTop: "30px" }}
      >
        Edytuj adres korespondencyjny
      </Button>

      <h3>Średnia</h3>
      <Divider sx={{ "margin-bottom": "2rem" }} />
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Item sx={{ backgroundColor: "rgba(175,0,0,0.74)", color: "white" }}>
            Telefon:
          </Item>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={user.telephoneNumber}
            disabled
            fullWidth
          />
        </Grid>
      </Grid>

      <Button
        sx={{ color: "rgba(175,0,0,0.74)", float: "right", marginTop: "30px" }}
      >
        Edytuj numer telefonu
      </Button>
    </div>
  );
}

export default PersonalData;
