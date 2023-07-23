import user from "../userInformation.json";
import {Divider, Grid, Paper, styled} from "@mui/material";

function GeneralData() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (<div>
        {user.courseName}: Dane o studiach
        <h3>Dane ogólne</h3>
        <Divider sx={{"margin-bottom": "2rem"}}/>
        <Grid container spacing={1}>
            <Grid item xs={3}>
                <Item sx={{backgroundColor: "rgba(175,0,0,0.74)", color:"white"}}>Wydział</Item>
            </Grid>
            <Grid item xs={3}>
                <Item>{user.faculty}</Item>
            </Grid>
            <Grid item xs={3}>
                <Item sx={{backgroundColor: "rgba(175,0,0,0.74)", color:"white"}} >Kierunek</Item>
            </Grid>
            <Grid item xs={3}>
                <Item>{user.courseName}</Item>
            </Grid>
            <Grid item xs={3}>
                <Item sx={{backgroundColor: "rgba(175,0,0,0.74)", color:"white"}}>Tryb</Item>
            </Grid>
            <Grid item xs={3}>
                <Item>{user.studiesMode}</Item>
            </Grid>
            <Grid item xs={3}>
                <Item sx={{backgroundColor: "rgba(175,0,0,0.74)", color:"white"}}>Długość studiów</Item>
            </Grid>
            <Grid item xs={3}>
                <Item>{user.studiesDuration}</Item>
            </Grid>
            <Grid item xs={3}>
                <Item sx={{backgroundColor: "rgba(175,0,0,0.74)", color:"white"}}>Tok główny</Item>
            </Grid>
            <Grid item xs={3}>
                <Item>{user.mainProcess ? "tak" : "nie"}</Item>
            </Grid>
            <Grid item xs={3}>
                <Item sx={{backgroundColor: "rgba(175,0,0,0.74)", color:"white"}}>Czy ustawiono album główny:</Item>
            </Grid>
            <Grid item xs={3}>
                <Item>{user.isMainIndexNumberSet ? "tak" : "nie"}</Item>
            </Grid>
            <Grid item xs={3}>
                <Item sx={{backgroundColor: "rgba(175,0,0,0.74)", color:"white"}}>Album główny</Item>
            </Grid>
            <Grid item xs={3}>
                <Item>{user.indexNumber}</Item>
            </Grid>
        </Grid>

        <h3>Dane aktualne</h3>
        <Divider sx={{"margin-bottom": "2rem"}}/>
        <Grid container spacing={1}>
            <Grid item xs={3}>
                <Item sx={{backgroundColor: "rgba(175,0,0,0.74)", color:"white"}}>Aktualny rok:</Item>
            </Grid>
            <Grid item xs={3}>
                <Item>{user.currentStudyYear}</Item>
            </Grid>
            <Grid item xs={3}>
                <Item sx={{backgroundColor: "rgba(175,0,0,0.74)", color:"white"}}>Aktualny semestr:</Item>
            </Grid>
            <Grid item xs={3}>
                <Item>{user.currentSemester}</Item>
            </Grid>
            <Grid item xs={3}>
                <Item sx={{backgroundColor: "rgba(175,0,0,0.74)", color:"white"}}>Rejestracja roczna:</Item>
            </Grid>
            <Grid item xs={3}>
                <Item>{user.annualRegistration}</Item>
            </Grid>
            <Grid item xs={3}>
                <Item sx={{backgroundColor: "rgba(175,0,0,0.74)", color:"white"}}>Semestr akademicki:</Item>
            </Grid>
            <Grid item xs={3}>
                <Item>{user.academicalSemester}</Item>
            </Grid>
            <Grid item xs={3}>
                <Item sx={{backgroundColor: "rgba(175,0,0,0.74)", color:"white"}}>Status:</Item>
            </Grid>
            <Grid item xs={3}>
                <Item>{user.status}</Item>
            </Grid>
            <Grid item xs={3}>
                <Item sx={{backgroundColor: "rgba(175,0,0,0.74)", color:"white"}}>Kwalifikacja semestralna:</Item>
            </Grid>
            <Grid item xs={3}>
                <Item>{user.semestralQualification}</Item>
            </Grid>
        </Grid>

        <h3>Średnia</h3>
        <Divider sx={{"margin-bottom": "2rem"}}/>
        <Grid container spacing={1}>
            <Grid item xs={3}>
                <Item sx={{backgroundColor: "rgba(175,0,0,0.74)", color:"white"}}>Uznana:</Item>
            </Grid>
            <Grid item xs={3}>
                <Item>{user.acknowledgedAverage}</Item>
            </Grid>
            <Grid item xs={3}>
                <Item sx={{backgroundColor: "rgba(175,0,0,0.74)", color:"white"}}>Za semestr:</Item>
            </Grid>
            <Grid item xs={3}>
                <Item>{user.averageForSemester}</Item>
            </Grid>
            <Grid item xs={3}>
                <Item sx={{backgroundColor: "rgba(175,0,0,0.74)", color:"white"}}>Za całe studia:</Item>
            </Grid>
            <Grid item xs={3}>
                <Item>{user.averageForStudies}</Item>
            </Grid>
            <Grid item xs={3}>
                <Item sx={{backgroundColor: "rgba(175,0,0,0.74)", color:"white"}}>Uznane:</Item>
            </Grid>
            <Grid item xs={3}>
                <Item>{user.acknowledgedECTSPoints}</Item>
            </Grid>
            <Grid item xs={3}>
                <Item sx={{backgroundColor: "rgba(175,0,0,0.74)", color:"white"}}>Zdobyte:</Item>
            </Grid>
            <Grid item xs={3}>
                <Item>{user.allAcknowledgedECTSPoints}/150</Item>
            </Grid>
        </Grid>
    </div>)
}

export default GeneralData;