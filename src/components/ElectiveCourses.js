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

function ElectiveCourses() {
  function createData(
    courseCode,
    courseName,
    professor,
    maxAndMinPeople,
    numberOfPeople,
    ectsPoints,
    semester
  ) {
    return {
      courseCode,
      courseName,
      professor,
      maxAndMinPeople,
      numberOfPeople,
      ectsPoints,
      semester,
    };
  }

  const rows = [
    createData(
      "0257619800",
      "Computer Graphics",
      "Zubert Mariusz, dr hab. inż.",
      "1/99",
      16,
      3,
      5
    ),
    createData(
      "0252642100",
      "GUI",
      "Nowakowski Jacek, dr inż.",
      "1/99",
      16,
      3,
      5
    ),
  ];

  return (
    <>
      <h2>Przedmioty obieralne</h2>
      <Divider />
      <h4>
        <p>Przedmioty realizowane w semestrze 2022/23 Z.</p>
        <p>
          {" "}
          Wybierz następującą liczbę przedmiotów: 2. Pozostało do wyboru: 0.
        </p>
      </h4>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "rgba(175,0,0,0.74)" }}>
              <TableCell sx={{ color: "white" }}>Kod przedmiotu</TableCell>
              <TableCell sx={{ color: "white" }}>Nazwa przedmiotu</TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                Prowadzący
              </TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                Min/Max liczba osób
              </TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                Liczba zapisanych
              </TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                Punkty
              </TableCell>
              <TableCell align="right" sx={{ color: "white" }}>
                Semester studiów
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.courseName}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.courseCode}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.courseName}
                </TableCell>
                <TableCell align="right">{row.professor}</TableCell>
                <TableCell align="right">{row.maxAndMinPeople}</TableCell>
                <TableCell align="right">{row.numberOfPeople}</TableCell>
                <TableCell align="right">{row.ectsPoints}</TableCell>
                <TableCell align="right">{row.semester}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default ElectiveCourses;
