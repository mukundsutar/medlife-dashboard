import { Container, CssBaseline, Grid, Typography } from "@mui/material";
import Header from "./components/header";
import Patients from "./components/patients";
import DiagnosisHistory from "./components/diagnosis_history";
import DiagnosticList from "./components/diagnostic_list";
import Profile from "./components/profile";
import LabResults from "./components/lab_results";
import { useEffect, useState } from "react";

function App() {
    const [apiData, setApiData] = useState(null);

    async function fetchAPIData() {
        let username = "coalition";
        let password = "skills-test";
        let auth = btoa(`${username}:${password}`);

        // Authenticate (dummy API)
        await fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
            headers: {
                Authorization: `Basic ${auth}`,
            },
        })
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then(function (data) {
                // console.log(data);
                setApiData(data);
            })
            .catch(function (error) {
                console.warn(error);
            });
    }

    useEffect(() => {
        fetchAPIData();
    }, []);

    return (
        <>
            <CssBaseline />
            <Container
                sx={{ height: 1, bgcolor: "#F6F7F8", p: 2 }}
                maxWidth={"xl"}
            >
                <Header />

                {apiData && (
                    <Grid container spacing={4} sx={{ my: 0 }}>
                        <Grid item xs={3}>
                            <Patients apiData={apiData} />
                        </Grid>

                        <Grid item xs={6}>
                            <Grid container spacing={4}>
                                <Grid item xs={12}>
                                    <DiagnosisHistory
                                        apiData={apiData[3].diagnosis_history}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <DiagnosticList
                                        apiData={apiData[3].diagnostic_list}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={3}>
                            <Grid container spacing={4}>
                                <Grid item xs={12}>
                                    <Profile apiData={apiData[3]} />
                                </Grid>
                                <Grid item xs={12}>
                                    <LabResults
                                        apiData={apiData[3].lab_results}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                )}
            </Container>
        </>
    );
}

export default App;
