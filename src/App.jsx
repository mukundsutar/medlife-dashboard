import { Container, Grid, Typography } from "@mui/material";
import Header from "./components/header";
import Patients from "./components/patients";
import DiagnosisHistory from "./components/diagnosis_history";
import DiagnosticList from "./components/diagnostic_list";
import Profile from "./components/profile";
import LabResults from "./components/lab_results";

function App() {
    return (
        <>
            <Container sx={{ height: 1, bgcolor: "#f6f7f8" }} maxWidth={"xl"}>
                <Header />

                <Grid container spacing={4} sx={{ my: 1 }}>
                    <Grid item xs={3}>
                        <Patients />
                    </Grid>

                    <Grid item xs={6}>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <DiagnosisHistory />
                            </Grid>
                            <Grid item xs={12}>
                                <DiagnosticList />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3}>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <Profile />
                            </Grid>
                            <Grid item xs={12}>
                                <LabResults />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default App;
