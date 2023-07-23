import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

function Grades() {

    function createData(courseName, grade){
        return { courseName, grade}
    }

    const rows = [
        createData('Computer Graphics', 5),
    createData('GUI', 5),
    createData('Computer Aided Design', 5),
    createData('Civic Knowledge and Engagement 4', 5),
    createData('Professional Design Project', 5),
    createData('Internet of Things', 5),
    createData('Operating Systems', 5),
    ]

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow sx={{backgroundColor: "rgba(175,0,0,0.74)"}}>
                        <TableCell sx={{color: "white"}}>Course</TableCell>
                        <TableCell align="right" sx={{color: "white"}}>Grade</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.courseName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.courseName}
                            </TableCell>
                            <TableCell align="right">{row.grade}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Grades;