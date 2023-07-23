import {
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import user from "../userInformation.json";

function MedicalExamination() {
  function createData(number, expirationDate) {
    return { number, expirationDate };
  }

  const rows = [
    createData(user.numberOfExamination, user.expirationDateOfExamination),
  ];

  return (
    <>
      <h2>{user.courseName}: Badania lekarskie</h2>
      <Divider />
      <h3>Ważne badania lekarskie</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "rgba(175,0,0,0.74)" }}>
              <TableCell sx={{ color: "white" }}>Numer</TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                Data ważności badania
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.number}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.number}
                </TableCell>
                <TableCell align="right">{row.expirationDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default MedicalExamination;
