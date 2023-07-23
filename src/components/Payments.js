import user from "../userInformation.json";
import {
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import styles from "../payments.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function createDataPaymentsTable(
  date,
  forSemester,
  chargeAmount,
  paid,
  toPay,
  paidInTime,
  interest,
  description
) {
  return {
    date,
    forSemester,
    chargeAmount,
    paid,
    toPay,
    paidInTime,
    interest,
    description,
  };
}

const rowsPaymentsTable = [
  createDataPaymentsTable(
    "2020-10-31",
    "2020/21 Z,s.1",
    "22 zł",
    "0 zł",
    "tak",
    "0 zł",
   " Legitymacja"
  ),
];

function createDataPaymentTable(
    date,
    paymentDeadline,
    description,
    forSemester,
    paid,
    used,
    left
) {
    return {
        date,
        paymentDeadline,
        description,
        forSemester,
        paid,
        used,
        left
    };
}

const rowsPaymentTable = [
    createDataPaymentTable(
        "2020-09-30",
        "2020-10-31",
        "Opłata za legitymację",
        "2020/21 Z",
        "22 zł",
        "",
        ""
    ),
];

function Payments() {
  return (
    <div>
      <h2>{user.courseName}: Opłaty</h2>
      <Divider sx={{ "margin-bottom": "2rem" }} />
      <p>Uwaga!</p>
      <p className={styles.info}>
        Odsetki należy regulować po pojawieniu się na Państwa koncie przypisu
        oznaczonego ODS (odsetki) w polu Opis. Wielkość odsetek za dany przypis
        (braki, czesne) jest wyliczana dopiero po uiszczeniu opłaty w pełnej
        wysokości. Do momentu zapłaty widać jedynie przewidywaną kwotę odsetek.
      </p>

      <h4>Bilans płatności</h4>
      <Divider sx={{ "margin-bottom": "2rem" }} />
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Item sx={{ backgroundColor: "rgba(175,0,0,0.74)", color: "white" }}>
            Nadłata dla albumu {user.indexNumber}:
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>{user.excessPayment}</Item>
        </Grid>
      </Grid>

      <h4>Stawki opłat</h4>
      <Divider sx={{ "margin-bottom": "2rem" }} />
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Item sx={{ backgroundColor: "rgba(175,0,0,0.74)", color: "white" }}>
            Wydział:
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>{user.faculty}</Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{ backgroundColor: "rgba(175,0,0,0.74)", color: "white" }}>
            Za 1 pkt:
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>brak danych</Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{ backgroundColor: "rgba(175,0,0,0.74)", color: "white" }}>
            Kierunek:
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>{user.courseName}</Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{ backgroundColor: "rgba(175,0,0,0.74)", color: "white" }}>
            Podstawowa za powtarzanie:
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>brak danych</Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{ backgroundColor: "rgba(175,0,0,0.74)", color: "white" }}>
            Tryb:
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>{user.studiesMode}</Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{ backgroundColor: "rgba(175,0,0,0.74)", color: "white" }}>
            Max za semester:
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>brak danych</Item>
        </Grid>
      </Grid>

      <h4>Lista płatności</h4>
      <Divider sx={{ "margin-bottom": "2rem" }} />
      <span>Wybrany semest:</span>
      <FormControl
        sx={{ width: "20%", marginLeft: "10px", paddingBottom: "10px", border: "red" }}
      >
        <InputLabel>2020/21 Z</InputLabel>
        <Select label="Semestr">
          <MenuItem value="Semestr">2020/21 Z</MenuItem>
        </Select>
      </FormControl>

        <h4>Odpłatności</h4>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "rgba(175,0,0,0.74)" }}>
              <TableCell sx={{ color: "white" }}>Data</TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                Za semestr
              </TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                Kwota obciążenia
              </TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                Wpłacono
              </TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                Pozostało
              </TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                Czy zapłacono w terminie
              </TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                Odsetki
              </TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                Opis
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsPaymentsTable.map((row) => (
              <TableRow
                key={row.forSemester}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.date}
                </TableCell>
                <TableCell align="right">{row.forSemester}</TableCell>
                  <TableCell align="right">{row.chargeAmount}</TableCell>
                  <TableCell align="right">{row.paid}</TableCell>
                  <TableCell align="right">{row.toPay}</TableCell>
                  <TableCell align="right">{row.paidInTime}</TableCell>
                  <TableCell align="right">{row.interest}</TableCell>
                  <TableCell align="right">{row.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

        <h4>Wpłaty</h4>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow sx={{ backgroundColor: "rgba(175,0,0,0.74)" }}>
                        <TableCell align="right" sx={{ color: "white" }}>
                            Data wpłaty
                        </TableCell>
                        <TableCell align="right" sx={{ color: "white" }}>
                            Termin płatności odpłatności
                        </TableCell>
                        <TableCell align="right" sx={{ color: "white" }}>
                            Opis
                        </TableCell>
                        <TableCell align="right" sx={{ color: "white" }}>
                            Za semestr
                        </TableCell>
                        <TableCell align="right" sx={{ color: "white" }}>
                            Wpłacono
                        </TableCell>
                        <TableCell align="right" sx={{ color: "white" }}>
                            Wykorzystano
                        </TableCell>
                        <TableCell align="right" sx={{ color: "white" }}>
                            Pozostało
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rowsPaymentTable.map((row) => (
                        <TableRow
                            key={row.forSemester}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.date}
                            </TableCell>
                            <TableCell align="right">{row.paymentDeadline}</TableCell>
                            <TableCell align="right">{row.description}</TableCell>
                            <TableCell align="right">{row.forSemester}</TableCell>
                            <TableCell align="right">{row.paid}</TableCell>
                            <TableCell align="right">{row.used}</TableCell>
                            <TableCell align="right">{row.left}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  );
}

export default Payments;
